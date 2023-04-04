using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Controllers.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }
    }
}
