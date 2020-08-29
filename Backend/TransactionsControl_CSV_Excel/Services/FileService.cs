using ClosedXML.Excel;
using CsvHelper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Interfaces;

namespace TransactionsControl_CSV_Excel.Services
{
    /// <summary>
    /// <c>FileService</c> is a class.
    /// Contains methods for reading csv and exporting xlsx files.
    /// </summary>
    public class FileService : IFileService
    {
        IUnitOfWork Database { get; set; }
        private readonly ITransactionService _transactionService;

        public FileService(IUnitOfWork uow, ITransactionService transactionService)
        {
            Database = uow;
            _transactionService = transactionService;
        }

        /// <summary>
        /// This method exports transactions into xlsx file.
        /// </summary>
        /// <param name="type">Type of transaction.</param>
        /// <param name="status">Status of transaction.</param>
        /// <param name="prop">Properties which should be returned.</param>
        /// <returns>XLSX file with transaction's data.</returns>
        public byte[] ExportXLSXFile(string type, string status, TransactionExportProperties prop)
        {
            var transactions = _transactionService.FilterTransactions(status, type);
            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Transactions");
                var listOfPropertyNames = typeof(Transaction).GetProperties().Select(f => f.Name).ToList();
                int currentRow = 1;
                int currentColumn = 1;
                foreach (var propertyName in listOfPropertyNames)
                {
                    if ((bool)prop.GetType().GetProperty(propertyName).GetValue(prop, null))
                    {
                        worksheet.Cell(currentRow, currentColumn++).Value = propertyName;
                    }
                }
                foreach (var transaction in transactions)
                {
                    currentColumn = 1;
                    currentRow++;
                    foreach (var propertyName in listOfPropertyNames)
                    {
                        if ((bool)prop.GetType().GetProperty(propertyName).GetValue(prop, null))
                        {
                            worksheet.Cell(currentRow, currentColumn++).Value =
                                    transaction.GetType().GetProperty(propertyName).GetValue(transaction, null);
                        }
                    }
                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    return stream.ToArray();
                }
            }
        }

        /// <summary>
        /// This method creates transactions by imported csv file.
        /// </summary>
        /// <param name="formFile">CSV file with transaction's data.</param>
        /// <returns>All transactions, included which were in csv file.</returns>
        public IEnumerable<Transaction> ReadCSVFile(IFormFile formFile)
        {
            using var reader = new StreamReader(formFile.OpenReadStream());
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            var transactions = csv.GetRecords<Transaction>().ToList();
            var allTransactions = Database.Transactions.GetAll();
            foreach (var t in transactions)
            {
                var transaction = Database.Transactions.Get(t.TransactionId);
                if (transaction == null)
                {
                    Database.Transactions.Create(t);
                }
                else
                {
                    transaction.Status = t.Status;
                }
            }
            Database.Save();
            return Database.Transactions.GetAll();
        }
    }
}
