using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Models;

namespace TransactionsControl_CSV_Excel.Interfaces
{
    /// <summary>
    /// <c>ITransactionService</c> is an interface.
    /// Contains methods for working with transactions.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit, filter transactions.
    /// </remarks>
    public interface ITransactionService
    {
        /// <summary>
        /// This method finds transaction by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of transaction which should be returned.</param>
        /// <returns>Transaction which was found.</returns>
        Transaction GetById(int id);

        /// <summary>
        /// This method returns all transactions.
        /// </summary>
        /// <returns>Transactions which were found.</returns>
        IEnumerable<Transaction> GetAll();

        /// <summary>
        /// This method creates transaction.
        /// </summary>
        /// <param name="transaction">Transaction which should be created.</param>
        void Create(Transaction transaction);

        /// <summary>
        /// This method deletes transaction.
        /// </summary>
        /// <param name="id">Id of transaction which should be deleted.</param>
        void Delete(int id);

        /// <summary>
        /// This method updates transaction's data.
        /// </summary>
        /// <param name="transaction">Transaction which should be updated.</param>
        void Update(Transaction transaction);

        /// <summary>
        /// This method returns all transaction statuses.
        /// </summary>
        /// <returns>Transactions statuses which were found.</returns>
        IEnumerable<string> GetStatuses();

        /// <summary>
        /// This method returns all transaction types.
        /// </summary>
        /// <returns>Transactions types which were found.</returns>
        IEnumerable<string> GetTypes();

        /// <summary>
        /// This method returns certain count of transactions which can be filtered by type and status of transaction.
        /// </summary>
        /// <param name="type">Type of transaction.</param>
        /// <param name="status">Status of transaction.</param>
        /// <param name="pagination">Seeting for transactions count.</param>
        /// <returns>Transactions which were found.</returns>
        PagedResponse<Transaction> GetFilteredTransactions(string status, string type, Pagination pagination);

        /// <summary>
        /// This method filters transaction by their type and status.
        /// </summary>
        /// <returns>Filtered transactions.</returns>
        IEnumerable<Transaction> FilterTransactions(string status, string type);
    }
}
