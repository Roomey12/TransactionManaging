using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Infrastucture;

namespace TransactionsControl_CSV_Excel.Models
{
    /// <summary>
    /// <c>PagedResponse</c> is a class.
    /// Represents settings for response with <see cref="Pagination"/> settings.
    /// </summary>
    public class PagedResponse<T> where T : class
    {
        /// <summary>
        /// Represents data which response consists.
        /// </summary>
        public IEnumerable<T> Data { get; set; }

        /// <summary>
        /// Represents count of total items to paginate.
        /// </summary>
        public int TotalItems { get; set; }

        public PagedResponse(IEnumerable<T> data, int totalItems)
        {
            Data = data;
            TotalItems = totalItems;
        }
    }
}
