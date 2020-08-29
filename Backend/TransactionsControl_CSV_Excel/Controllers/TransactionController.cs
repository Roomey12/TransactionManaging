using CsvHelper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Interfaces;
using TransactionsControl_CSV_Excel.Entities;
using System.Net.Http;
using TransactionsControl_CSV_Excel.Models;

namespace TransactionsControl_CSV_Excel.Controllers
{
    /// <summary>
    /// <c>TransactionController</c> is a class.
    /// Contains http methods for working with transactions.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit, filter transactions.
    /// </remarks>
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionService _transactionService;
        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        /// <summary>
        /// This method returns all transactions.
        /// </summary>
        /// <returns>Transactions which were found.</returns>
        // GET: api/transaction
        [HttpGet]
        public IActionResult GetAllTransactions()
        {
            IEnumerable<Transaction> transactions;
            try
            {
                transactions = _transactionService.GetAll();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(transactions);
        }

        /// <summary>
        /// This method finds transaction by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of transaction which should be returned.</param>
        /// <returns>Transaction which was found.</returns>
        // GET: api/transaction/5
        [HttpGet("{id}")]
        public IActionResult GetTransactionById(int id)
        {
            Transaction transaction;
            try
            {
                transaction = _transactionService.GetById(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(transaction);
        }

        /// <summary>
        /// This method creates transaction.
        /// </summary>
        /// <param name="transaction">Transaction which should be created.</param>
        // POST: api/transaction
        [HttpPost]
        public IActionResult PostTransaction([FromBody] Transaction transaction)
        {
            try
            {
                _transactionService.Create(transaction);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Transaction was successfully created!" });
        }

        /// <summary>
        /// This method updates transaction's data.
        /// </summary>
        /// <param name="transaction">Transaction which should be updated.</param>
        // PUT: api/transaction
        [HttpPut]
        public IActionResult PutTransaction([FromBody] Transaction transaction)
        {
            try
            {
                _transactionService.Update(transaction);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Transaction was successfully updated!" });
        }

        /// <summary>
        /// This method deletes transaction.
        /// </summary>
        /// <param name="id">Id of transaction which should be deleted.</param>
        // DELETE: api/transaction/
        [HttpDelete("{id}")]
        public IActionResult DeleteTransaction(int id)
        {
            try
            {
                 _transactionService.Delete(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Transaction was successfully deleted!" });
        }

        /// <summary>
        /// This method returns all transaction statuses.
        /// </summary>
        /// <returns>Transactions statuses which were found.</returns>
        // GET: api/transaction/statuses
        [HttpGet("statuses")]
        public IActionResult GetStatuses()
        {
            IEnumerable<string> statuses;
            try
            {
                statuses = _transactionService.GetStatuses();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(statuses);
        }

        /// <summary>
        /// This method returns all transaction types.
        /// </summary>
        /// <returns>Transactions types which were found.</returns>
        // GET: api/transaction/types
        [HttpGet("types")]
        public IActionResult GetTypes()
        {
            IEnumerable<string> types;
            try
            {
                types = _transactionService.GetTypes();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(types);
        }

        /// <summary>
        /// This method returns certain count of transactions which can be filtered by type and status of transaction.
        /// </summary>
        /// <param name="type">Type of transaction.</param>
        /// <param name="status">Status of transaction.</param>
        /// <param name="pagination">Seeting for transactions count.</param>
        /// <returns>Transactions which were found.</returns>
        // GET: api/transaction
        [HttpGet("filtered")]
        public IActionResult GetFilteredTransactions([FromQuery] string status, [FromQuery] string type, [FromQuery] Pagination pagination)
        {
            PagedResponse<Transaction> transactions;
            try
            {
                transactions = _transactionService.GetFilteredTransactions(status, type, pagination);
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return Ok(transactions);
        }
    }
}
