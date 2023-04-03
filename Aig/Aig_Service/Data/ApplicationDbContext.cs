using Microsoft.EntityFrameworkCore;
using Aig.Common.DM;

namespace Aig_Service.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
           
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Article> Articles { get; set; }
        

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity < Category>().HasData(
        //     new Category
        //     {
        //         CategoryID = 6,
        //         CategoryName = "animals"
        //     });
        //}
    }
}
