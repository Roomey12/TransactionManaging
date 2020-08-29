using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TransactionsControl_CSV_Excel.Entities;

namespace TransactionsControl_CSV_Excel.EF
{
    /// <summary>
    /// <c>ApplicationContext</c> is a class.
    /// Represents settings for database.
    /// </summary>
    public class ApplicationContext : IdentityDbContext<User>
    {
        /// <summary>
        /// Represents table for <see cref="Transaction"/> class.
        /// </summary>
        public DbSet<Transaction> Transactions { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaction>()
              .Property(a => a.TransactionId)
              .ValueGeneratedNever();
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                              .SetBasePath(Path.GetFullPath(@"..\TransactionsControl_CSV_Excel"))
                              .AddJsonFile("appsettings.json")
                              .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("connectionString"));
        }
    }
}
