using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.EF;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Interfaces;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Repositories
{
    /// <summary>
    /// <c>TransactionRepository</c> is a class.
    /// Contains methods for CRUD functional.
    /// </summary>
    public class TransactionRepository : IRepository<Transaction>
    {
        private ApplicationContext _context;

        public TransactionRepository(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method creates transaction.
        /// </summary>
        /// <param name="transaction">Transaction which should be created.</param>
        public void Create(Transaction transaction)
        {
            _context.Transactions.Add(transaction);
        }

        /// <summary>
        /// This method deletes transaction.
        /// </summary>
        /// <param name="transactionId">Id of transaction which should be deleted.</param>
        public void Delete(int transactionId)
        {
            var transaction = _context.Transactions.Find(transactionId);
            if(transaction != null)
            {
                _context.Transactions.Remove(transaction);
            }
        }

        /// <summary>
        /// This method finds transaction by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed.</param>
        /// <returns>Transactions which were found.</returns>
        public IEnumerable<Transaction> Find(Func<Transaction, bool> predicate)
        {
            return _context.Transactions.Where(predicate).ToList();
        }

        /// <summary>
        /// This method finds transaction by its Id and returns it.
        /// </summary>
        /// <param name="transactionId">Id of transaction which should be returned.</param>
        /// <returns>Transaction which was found.</returns>
        public Transaction Get(int transactionId)
        {
            return _context.Transactions.Find(transactionId);
        }

        /// <summary>
        /// This method returns all transactions.
        /// </summary>
        /// <returns>Transaction which were found.</returns>
        public IEnumerable<Transaction> GetAll()
        {
            return _context.Transactions.ToList();
        }

        /// <summary>
        /// This method updates transaction's data.
        /// </summary>
        /// <param name="transaction">Transaction which should be updated.</param>
        public void Update(Transaction transaction)
        {
            _context.Entry(transaction).State = EntityState.Modified;
        }
    }
}
