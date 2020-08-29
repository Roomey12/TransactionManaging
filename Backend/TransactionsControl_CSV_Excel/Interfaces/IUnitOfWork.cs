using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.Interfaces
{
    /// <summary>
    /// <c>IUnitOfWork</c> is an interface.
    /// </summary>
    /// <remarks>
    /// This interface contains methods for return Repositories and saving data.
    /// </remarks>
    public interface IUnitOfWork
    {
        /// <summary>
        /// Returns <c>IRepository<Transactions></c> object.
        /// </summary>
        /// <returns><c>IRepository<Transactions></c> object.</returns>
        IRepository<Transaction> Transactions { get; }

        /// <summary>
        /// Returns <c>UserManager<User></c> object.
        /// </summary>
        /// <returns><c>UserManager<User></c> object.</returns>
        UserManager<User> UserManager { get; }

        /// <summary>
        /// Saves changes to the database. 
        /// </summary>
        void Save();

        /// <summary>
        /// Asynchronously saves changes to the database. 
        /// </summary>
        Task SaveAsync();
    }
}
