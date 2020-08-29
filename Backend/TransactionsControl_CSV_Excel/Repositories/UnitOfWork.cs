using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.EF;
using TransactionsControl_CSV_Excel.Interfaces;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Repositories
{
    /// <summary>
    /// <UnitOfWork> is a class.
    /// Is used for encapsulating logic of working with the database.
    /// </summary>
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationContext _context;
        private TransactionRepository _transactionRepository;
        private UserManager<User> _userManager;

        public UnitOfWork(ApplicationContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        /// <summary>
        /// Returns <c>IRepository<Transactions></c> object.
        /// </summary>
        /// <returns><c>IRepository<Transactions></c> object.</returns>
        public IRepository<Transaction> Transactions
        {
            get
            {
                if(_transactionRepository == null)
                {
                    _transactionRepository = new TransactionRepository(_context);
                }
                return _transactionRepository;
            }
        }

        /// <summary>
        /// Returns <c>UserManager<User></c> object.
        /// </summary>
        /// <returns><c>UserManager<User></c> object.</returns>
        public UserManager<User> UserManager
        {
            get
            {
                return _userManager;
            }
        }

        /// <summary>
        /// Saves changes to the database. 
        /// </summary>
        public void Save()
        {
            _context.SaveChanges();
        }

        /// <summary>
        /// Asynchronously saves changes to the database. 
        /// </summary>
        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
