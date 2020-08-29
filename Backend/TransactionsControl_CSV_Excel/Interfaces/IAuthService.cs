using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Models;

namespace TransactionsControl_CSV_Excel.Interfaces
{
    /// <summary>
    /// <c>IAuthService</c> is an interface.
    /// Contains all methods for authorization and authentication.
    /// </summary>
    public interface IAuthService
    {
        /// <summary>
        /// This method is used to register a user.
        /// </summary>
        /// <param name="registrationModel">User who is registrating.</param>
        /// <returns>Result of registration.</returns>
        Task<IdentityResult> Register(RegistrationModel registrationModel);

        /// <summary>
        /// This method is used to authenticate user.
        /// </summary>
        /// <param name="loginModel">User who is authenticating.</param>
        /// <returns>JSON Web Token.</returns>
        Task<string> Login(LoginModel loginModel);

        /// <summary>
        /// This method is used for getting user by his id.
        /// </summary>
        /// <returns>User who was found.</returns>
        Task<User> GetUser(string userId);
    }
}
