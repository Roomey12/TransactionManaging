using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Infrastucture
{
    /// <summary>
    /// <c>TransactionExportProperties</c> is a class.
    /// Represents whether to export data for <see cref="Transaction"/> properties.
    /// </summary>
    public class TransactionExportProperties
    {
        /// <summary>
        /// Gets or sets TransactionId value.
        /// Represents whether to export data for property TransactionId.
        /// </summary>
        public bool TransactionId { get; set; }

        /// <summary>
        /// Gets or sets Status value.
        /// Represents whether to export data for property Status.
        /// </summary>
        public bool Status { get; set; }

        /// <summary>
        /// Gets or sets Type value.
        /// Represents whether to export data for property Type.
        /// </summary>
        public bool Type { get; set; }

        /// <summary>
        /// Gets or sets ClientName value.
        /// Represents whether to export data for property ClientName.
        /// </summary>
        public bool ClientName { get; set; }

        /// <summary>
        /// Gets or sets Amount value.
        /// Represents whether to export data for property Amount.
        /// </summary>
        public bool Amount { get; set; }
    }
}
