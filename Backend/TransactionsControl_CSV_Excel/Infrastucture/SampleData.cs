using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.EF;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Infrastucture
{
    /// <summary>
    /// <c>SampleData</c> is a class.
    /// Represents class for database seeding.
    /// </summary>
    public static class SampleData
    {
        /// <summary>
        /// This method is used to initialize instances of database context and user manager.
        /// </summary>
        /// <param name="app">Class that provides the mechanisms to configure an application request's pipeline.</param>
        public static async void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<ApplicationContext>();
                var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                await SeedData(context, userManager);
            }
        }

        /// <summary>
        /// This method is used to add seed data to database.
        /// </summary>
        /// <param name="context">Database context.</param>
        /// <param name="userManager">Manager for creating user.</param>
        public static async Task SeedData(ApplicationContext context, UserManager<User> userManager)
        {
            Console.WriteLine("Applying Migrations...");
            context.Database.Migrate();

            #region Create admin
            User u1 = new User()
            {
                Id = "19f2bf43-cd00-4dbc-ab4d-7be0cdad7769",
                UserName = "admin",
                Email = "alexlutsenko12@gmail.com",
                EmailConfirmed = true,
                NormalizedEmail = "ALEXLUTSENKO12@GMAIL.COM",
                NormalizedUserName = "ADMIN"
            };
            #endregion

            #region Create roles
            string[] roles = new string[] { "admin", "customer" };
            #endregion

            if (!context.Roles.Any() && !context.Users.Any())
            {
                Console.WriteLine("Adding data - seeding...");
                var roleStore = new RoleStore<IdentityRole>(context);
                foreach (string role in roles)
                {
                    await roleStore.CreateAsync(new IdentityRole(role) { NormalizedName = role.ToUpper() });
                }
                if (!context.Users.Any(u => u.UserName == u1.UserName))
                {
                    var password = new PasswordHasher<User>();
                    var hashed = password.HashPassword(u1, "111111");
                    u1.PasswordHash = hashed;
                    var result = await userManager.CreateAsync(u1);
                }
                await userManager.AddToRoleAsync(u1, "admin");
                context.SaveChanges();
                Console.WriteLine("Data has been added");
            }
            else
            {
                Console.WriteLine("Already have data - not seeding");
            }
        }
    }
}
