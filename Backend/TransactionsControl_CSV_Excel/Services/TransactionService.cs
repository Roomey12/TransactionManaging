using CsvHelper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Interfaces;
using TransactionsControl_CSV_Excel.Entities;
using ClosedXML.Excel;
using TransactionsControl_CSV_Excel.Models;
using DocumentFormat.OpenXml.Drawing.Charts;
using System.Threading;

namespace TransactionsControl_CSV_Excel.Services
{
    public class TransactionService : ITransactionService
    {
        IUnitOfWork Database { get; set; }

        public TransactionService(IUnitOfWork uow)
        {
            Database = uow;
        }

        /// <summary>
        /// This method creates transaction.
        /// </summary>
        /// <param name="transaction">Transaction which should be created.</param>
        public void Create(Transaction transaction)
        {
            Database.Transactions.Create(transaction);
            Database.Save();
        }

        /// <summary>
        /// This method deletes transaction.
        /// </summary>
        /// <param name="id">Id of transaction which should be deleted.</param>
        public void Delete(int id)
        {
            var transaction = Database.Transactions.Get(id);
            if(transaction != null)
            {
                Database.Transactions.Delete(id);
                Database.Save();
            }
            else
            {
                throw new NotFoundException("Transaction was not found", "Id");
            }
        }

        /// <summary>
        /// This method returns all transactions.
        /// </summary>
        /// <returns>Transactions which were found.</returns>
        public IEnumerable<Transaction> GetAll()
        {
            return Database.Transactions.GetAll();
        }

        /// <summary>
        /// This method finds transaction by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of transaction which should be returned.</param>
        /// <returns>Transaction which was found.</returns>
        public Transaction GetById(int id)
        {
            var transaction = Database.Transactions.Get(id);
            if (transaction != null)
            {
                return transaction;
            }
            else
            {
                throw new NotFoundException("Transaction was not found", "Id");
            }
        }

        /// <summary>
        /// This method updates transaction's data.
        /// </summary>
        /// <param name="transactionData">Transaction which should be updated.</param>
        public void Update(Transaction transactionData)
        {
            var transaction = Database.Transactions.Get(transactionData.TransactionId);
            transaction.Status = transactionData.Status;
            Database.Save();
        }

        /// <summary>
        /// This method returns all transaction statuses.
        /// </summary>
        /// <returns>Transactions statuses which were found.</returns>
        public IEnumerable<string> GetStatuses()
        {
            return ((Status[])Enum.GetValues(typeof(Status))).Select(c => c.ToString()).ToList();
        }

        /// <summary>
        /// This method returns all transaction types.
        /// </summary>
        /// <returns>Transactions types which were found.</returns>
        public IEnumerable<string> GetTypes()
        {
            return ((Entities.Type[])Enum.GetValues(typeof(Entities.Type))).Select(c => c.ToString()).ToList();
        }

        /// <summary>
        /// This method filters transaction by their type and status.
        /// </summary>
        /// <param name="type">Type of transaction.</param>
        /// <param name="status">Status of transaction.</param>
        /// <returns>Filtered transactions.</returns>
        public IEnumerable<Transaction> FilterTransactions(string status, string type)
        {
            IEnumerable<Transaction> transactions = Database.Transactions.GetAll();
            if (!string.IsNullOrEmpty(type))
            {
                transactions = transactions.Where(x => x.Type == type);
            }
            if (!string.IsNullOrEmpty(status))
            {
                transactions = transactions.Where(x => x.Status == status);
            }
            return transactions;
        }

        /// <summary>
        /// This method returns certain count of transactions which can be filtered by type and status of transaction.
        /// </summary>
        /// <param name="type">Type of transaction.</param>
        /// <param name="status">Status of transaction.</param>
        /// <param name="pagination">Seeting for transactions count.</param>
        /// <returns>Transactions which were found.</returns>
        public PagedResponse<Transaction> GetFilteredTransactions(string type, string status, Pagination pagination)
        {
            var transactions = FilterTransactions(type, status);
            var transactionsForPagination = transactions
                                .OrderBy(on => on.TransactionId)
                                .Skip((pagination.PageNumber - 1) * pagination.PageSize)
                                .Take(pagination.PageSize);
            return new PagedResponse<Transaction>(transactionsForPagination, transactions.Count());
        }
    }
}
