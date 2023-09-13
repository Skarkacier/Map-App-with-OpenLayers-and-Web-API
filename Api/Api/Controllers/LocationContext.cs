using Microsoft.EntityFrameworkCore;
using Npgsql;
using Api.Models;
using System.Data;

namespace Api.Controllers
{
    public class LocationContext : DbContext
    {
        public LocationContext()
        {
        }
        public LocationContext(DbContextOptions<LocationContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseNpgsql("User ID = postgres; Password = seda123; Server = localhost; Port = 5432; Database = stajdbapi;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
            modelBuilder.Entity<Location>().ToTable("Location");
        }
        public DbSet<Location> Location { get; set; }

    }
}