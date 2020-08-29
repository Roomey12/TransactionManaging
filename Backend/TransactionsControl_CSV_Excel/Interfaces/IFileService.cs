using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Infrastucture;

namespace TransactionsControl_CSV_Excel.Interfaces
{
    /// <summary>
    /// <c>IFileService</c> is an interface.
    /// Contains methods for reading csv and exporting xlsx files.
    /// </summary>
    public interface IFileService
    {
        /// <summary>
        /// This method creates transactions by imported csv file.
        /// </summary>
        /// <param name="formFile">CSV file with transaction's data.</param>
        /// <returns>All transactions, included which were in csv file.</returns>
        IEnumerable<Transaction> ReadCSVFile(IFormFile formFile);

        /// <summary>
        /// This method exports transactions into xlsx file.
        /// </summary>
        /// <param name="type">Type of transaction.</param>
        /// <param name="status">Status of transaction.</param>
        /// <param name="prop">Properties which should be returned.</param>
        /// <returns>XLSX file with transaction's data.</returns>
        byte[] ExportXLSXFile(string type, string status, TransactionExportProperties prop);
    }
}
