using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TransactionsControl_CSV_Excel.Entities
{
    /// <summary>
    /// Entity Transaction is a class which is represented in SQL Server Table.
    /// </summary>
    public class Transaction
    {
        /// <summary>
        /// Gets or sets TransactionId value.
        /// Represents primary key.
        /// </summary>
        public int TransactionId { get; set; }

        /// <summary>
        /// Gets or sets Status value.
        /// Represents status of Transaction.
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Gets or sets Type value.
        /// Represents type of Transaction.
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Gets or sets ClientName value.
        /// Represents client name who made a Transaction</c>.
        /// </summary>
        public string ClientName { get; set; }

        /// <summary>
        /// Gets or sets Amount value
        /// Represents amount ofTransaction</c>.
        /// </summary>
        public string Amount { get; set; }
    }

    /// <summary>
    /// Represents enumeration of <c>Transaction</c> types.
    /// </summary>
    public enum Type
    {
        Withdrawal = 1,
        Refill
    }

    /// <summary>
    /// Represents enumeration of <c>Transaction</c> statuses.
    /// </summary>
    public enum Status
    {
        Pending = 1,
        Completed,
        Cancelled
    }
}
