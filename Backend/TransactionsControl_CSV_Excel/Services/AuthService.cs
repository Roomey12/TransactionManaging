using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Interfaces;
using Microsoft.AspNetCore.Identity;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Models;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Options;
using DocumentFormat.OpenXml.Drawing.Charts;

namespace TransactionsControl_CSV_Excel.Services
{
    /// <summary>
    /// <c>AuthService</c> is a class.
    /// Contains all methods for authorization and authentication.
    /// </summary>
    /// <remarks>
    public class AuthService : IAuthService
    {
        private readonly ApplicationSettings _appSettings;
        IUnitOfWork Database { get; set; }

        public AuthService(IUnitOfWork uow, IOptions<ApplicationSettings> appSettings)
        {
            Database = uow;
            _appSettings = appSettings.Value;
        }

        /// <summary>
        /// This method is used to register a user.
        /// </summary>
        /// <param name="registrationModel">User who is registrating.</param>
        /// <returns>Result of registration.</returns>
        public async Task<IdentityResult> Register(RegistrationModel registrationModel)
        {
            if (registrationModel == null)
            {
                throw new ValidationException("Model can not be null");
            }
            User user = new User() { UserName = registrationModel.UserName, Email = registrationModel.Email };
            IdentityResult result = await Database.UserManager.CreateAsync(user, registrationModel.Password);
            await Database.UserManager.AddToRoleAsync(user, "customer");
            return result;
        }

        /// <summary>
        /// This method is used to authenticate user.
        /// </summary>
        /// <param name="loginModel">User who is authenticating.</param>
        /// <returns>JSON Web Token.</returns>
        public async Task<string> Login(LoginModel loginModel)
        {
            var user = await Database.UserManager.FindByNameAsync(loginModel.UserName);
            if (user != null && await Database.UserManager.CheckPasswordAsync(user, loginModel.Password))
            {
                var role = await Database.UserManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();
                var tokenDescriptor = new SecurityTokenDescriptor 
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddHours(3),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey
                        (Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)),
                        SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return token;
            }
            else
            {
                throw new ValidationException("Username or password is incorrect");
            }
        }

        /// <summary>
        /// This method is used for getting user by id.
        /// </summary>
        /// <returns>User whi was found.</returns>
        public async Task<User> GetUser(string userId)
        {
            var user = await Database.UserManager.FindByIdAsync(userId);
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            return user;
        }
    }
}
