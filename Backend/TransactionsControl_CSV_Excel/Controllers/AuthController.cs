using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Interfaces;
using TransactionsControl_CSV_Excel.Models;

namespace TransactionsControl_CSV_Excel.Controllers
{
    /// <summary>
    /// <c>AuthController</c> is a class.
    /// Contains all http methods for authorization and authentication.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        /// <summary>
        /// This method is used to register a user.
        /// </summary>
        /// <param name="model">RegistrationModel object which contains userName, email and password.</param>
        /// <returns>Result of registration.</returns>
        // POST: api/auth/register
        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegistrationModel model)
        {
            IdentityResult result;
            try
            {
                result = await _authService.Register(model);
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        /// <summary>
        /// This method is used to authenticate user.
        /// </summary>
        /// <param name="model">LoginModel object which contains userName and password.</param>
        /// <returns>JSON Web Token.</returns>
        // POST: api/auth/login
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginModel model)
        {
            string token;
            try
            {
                token = await _authService.Login(model);
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { token });
        }

        /// <summary>
        /// This method is used for getting current user by claims.
        /// </summary>
        /// <returns>Current user.</returns>
        // GET: api/user/profile
        [HttpGet("profile")]
        [Authorize]
        public async Task<IActionResult> GetUserProfile()
        {
            User user;
            try
            {
                string userId = User.Claims.First(c => c.Type == "UserID").Value;
                user = await _authService.GetUser(userId);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(user);
        }
    }
}
