using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransactionsControl_CSV_Excel.Infrastucture
{
    /// <summary>
    /// <c>NotFoundException</c> is a class.
    /// Represents custom exception which is thrown when item was not found.
    /// </summary>
    public class NotFoundException : Exception
    {
        public string Property { get; protected set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="NotFoundException"/> with specified error message and property.
        /// </summary>
        /// <param name="message">Error message.</param>
        /// <param name="prop">Property which cause exception.</param>
        public NotFoundException(string message, string prop) : base(message)
        {
            Property = prop;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="NotFoundException"/> with specified error message.
        /// </summary>
        /// <param name="message">Error message.</param>
        public NotFoundException(string message) : base(message)
        {

        }
    }
}
