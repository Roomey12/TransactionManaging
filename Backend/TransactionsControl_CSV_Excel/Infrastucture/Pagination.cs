using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransactionsControl_CSV_Excel.Infrastucture
{
	/// <summary>
	/// <c>Pagination</c> is a class.
	/// Represents settings of pagination.
	/// </summary>
	public class Pagination
	{
		/// <summary>
		/// Represents maximum page size.
		/// </summary>
		const int maxPageSize = 10;

		/// <summary>
		/// Gets or sets PageNumber.
		/// Represents number of page.
		/// </summary>
		public int PageNumber { get; set; } = 1;

		/// <summary>
		/// Represents default page size.
		/// </summary>
		private int _pageSize = 10;

		/// <summary>
		/// Gets or sets PageSize.
		/// Represents size of page.
		/// </summary>
		public int PageSize
		{
			get
			{
				return _pageSize;
			}
			set
			{
				_pageSize = (value > maxPageSize) ? maxPageSize : value;
			}
		}
	}
}
