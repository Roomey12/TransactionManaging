using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransactionsControl_CSV_Excel.Infrastucture
{
    /// <summary>
    /// <c>ValidationException</c> is a class.
    /// Represents custom exception which is thrown when occured error in logic of program.
    /// </summary>
    public class ValidationException : Exception
    {
        public string Property { get; protected set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ValidationException"/> with specified error message and property.
        /// </summary>
        /// <param name="message">Error message.</param>
        /// <param name="prop">Property which cause exception.</param>
        public ValidationException(string message, string prop) : base(message)
        {
            Property = prop;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ValidationException"/> with specified error message.
        /// </summary>
        /// <param name="message">Error message.</param>
        public ValidationException(string message) : base(message)
        {

        }
    }
}
