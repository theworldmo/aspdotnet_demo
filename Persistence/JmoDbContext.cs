using Microsoft.EntityFrameworkCore;
using Vega.Models;

namespace Vega.Persistence
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