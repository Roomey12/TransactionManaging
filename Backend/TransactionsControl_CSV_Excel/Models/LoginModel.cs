using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Models
{
    /// <summary>
    /// LoginModel is a class.
    /// Represents model for User.
    /// </summary>
    public class LoginModel
    {
        /// <summary>
        /// Gets or sets Username value.
        /// Represents username of User who is authenticating.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets Password value.
        /// Represents password of User who is authenticating.
        /// </summary>
        public string Password { get; set; }
    }
}
