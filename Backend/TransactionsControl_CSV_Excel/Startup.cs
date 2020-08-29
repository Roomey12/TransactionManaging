using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Logging;
using TransactionsControl_CSV_Excel.EF;
using TransactionsControl_CSV_Excel.Interfaces;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Repositories;
using TransactionsControl_CSV_Excel.Services;
using System.Text;
using TransactionsControl_CSV_Excel.Infrastucture;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.IO;
using Swashbuckle.AspNetCore.Swagger;

namespace TransactionsControl_CSV_Excel
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<ApplicationSettings>(Configuration.GetSection("ApplicationSettings"));
            services.AddDbContext<ApplicationContext>(ServiceLifetime.Transient);
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<ITransactionService, TransactionService>();
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IFileService, FileService>();
            string symChar = " !@#$%^&*()_+=-:{}[]/\\|/'0123456789";
            string ruChar = "ёйцукенгшщзхъфывапролджэячсмитьбюїє";
            string enChar = "qwertyuiopasdfghjklzxcvbnm";
            services.AddIdentity<User, IdentityRole>(opts =>
            {
                opts.User.AllowedUserNameCharacters = symChar + ruChar + ruChar.ToUpper() + enChar + enChar.ToUpper();
                opts.User.RequireUniqueEmail = true;
                opts.SignIn.RequireConfirmedEmail = false;
                opts.Password.RequiredLength = 6;
                opts.Password.RequireNonAlphanumeric = false;
                opts.Password.RequireLowercase = false;
                opts.Password.RequireUppercase = false;
                opts.Password.RequireDigit = false;
            })
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();

            //Jwt Authentication
            var tokenKey = Configuration["ApplicationSettings:JWT_Secret"].ToString();
            var key = Encoding.UTF8.GetBytes(tokenKey);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;//change false to true
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });

            // CORS
            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy",
                      builder =>
                      {
                          builder
                          .WithOrigins(Configuration["ApplicationSettings:Client_URL"].ToString())
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
            });
            services.AddControllers();

            // Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Transactions",
                    Description = "System allows to manage transactions.",
                    Contact = new OpenApiContact
                    {
                        Name = "Alex Lutsenko",
                        Email = "alexlutsenko12@gmail.com",
                        Url = new Uri("https://github.com/Roomey12"),
                    }
                });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Transactions");
                c.RoutePrefix = string.Empty;
            });
            SampleData.Initialize(app);
            app.UseHttpsRedirection();
            app.UseCors("MyPolicy");
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
