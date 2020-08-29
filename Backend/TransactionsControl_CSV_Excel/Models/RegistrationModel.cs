using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Models
{
    /// <summary>
    /// RegistrationModel is a class.
    /// Represents model for User.
    /// </summary>
    public class RegistrationModel
    {
        /// <summary>
        /// Gets or sets Username value.
        /// Represents username of User who is registering.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets Email value.
        /// Represents email of User who is registering.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets Password> value.
        /// Represents password of User who is registering.
        /// </summary>
        public string Password { get; set; }
    }
}
