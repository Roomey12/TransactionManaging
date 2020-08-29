using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;
using TransactionsControl_CSV_Excel.Infrastucture;
using TransactionsControl_CSV_Excel.Interfaces;

namespace TransactionsControl_CSV_Excel.Controllers
{
    /// <summary>
    /// <c>AuthController</c> is a class.
    /// Contains http methods for reading csv and exporting xlsx files.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;
        public FileController(IFileService authService)
        {
            _fileService = authService;
        }

        /// <summary>
        /// This method creates transactions by imported csv file.
        /// </summary>
        /// <param name="formFile">CSV file with transaction's data.</param>
        /// <returns>All transactions, included which were in csv file.</returns>
        // POST: api/transaction/csv
        [HttpPost("import/csv")]
        public IActionResult PostCSVFile(/*IFormFile formFile*/)
        {
            IEnumerable<Transaction> transactions;
            try
            {
                var formFile = Request.Form.Files[0];
                transactions = _fileService.ReadCSVFile(formFile);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(transactions);
        }

        /// <summary>
        /// This method exports transactions into xlsx file.
        /// </summary>
        /// <param name="transStatus">Status of transaction.</param>
        /// <param name="transType">Type of transaction.</param>
        /// <param name="prop">Properties which should be returned.</param>
        /// <returns>XLSX file with transaction's data.</returns>
        // POST: api/transaction/export/excel
        [HttpGet("export/excel")]
        public IActionResult GetTransactionsInXLSX([FromQuery] string transStatus, [FromQuery] string transType, [FromQuery] TransactionExportProperties prop)
        {
            byte[] content;
            string contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            try
            {
                content = _fileService.ExportXLSXFile(transType, transStatus, prop);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return File(content, contentType);
        }
    }
}
