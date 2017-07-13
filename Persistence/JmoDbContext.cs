using Microsoft.EntityFrameworkCore;
using vega.Models;

namespace vega.Persistence
{
    public class JmoDbContext : DbContext
    {
        public JmoDbContext(DbContextOptions<JmoDbContext> options) 
            : base(options)
        { 
            
        }

        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features { get; set; }
        
    }
}