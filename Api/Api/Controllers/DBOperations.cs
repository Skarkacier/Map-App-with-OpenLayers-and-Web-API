using Api.Models;
using Npgsql;
using System.Data;

namespace Api.Controllers
{
    public class DBOperations
    {
        private LocationContext _context = new LocationContext();

        public List<Location> GetLocation()
        {
            List<Location> _Location = new List<Location>();
            _Location = _context.Location.ToList();
            return _Location;
        }
        public bool AddModel(Location _location)
        {
            try
            {
                _context.Location.Add(_location);
                _context.SaveChanges();
                return true;
            }
            catch (Exception exc)
            {
                return false;
            }
        }
        public bool DeleteModel(int Id)
        {
            try
            {
                _context.Location.Remove(FindLocation("",Id));
                _context.SaveChanges();
                return true;
            }
            catch (Exception exc)
            {
                return false;
            }
        }
        public Location FindLocation(string Name, int Id = 0)
        {
            Location location = new Location();
            if (!string.IsNullOrEmpty(Name))
            {
                location = _context.Location.FirstOrDefault(x => x.Name == Name );
            }

            else if (Id > 0)
            {
                location = _context.Location.FirstOrDefault(x => x.Id == Id);

            }
            return location;
        }
    }
}
