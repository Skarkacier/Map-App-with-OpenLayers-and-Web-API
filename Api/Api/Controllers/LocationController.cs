using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Npgsql;
using System.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationController : ControllerBase
    {
        private static List<Location> _Location = new List<Location>();
        Result _result = new Result();
        DBOperations dbOperations = new DBOperations();
        private readonly LocationContext _context;
        public LocationController(LocationContext context) => _context = context;

        [HttpGet]
        public List<Location> GetLocation()
        {
            return dbOperations.GetLocation();
        }

        [HttpGet("{Id}")]
        public Location Get(int Id)
        {
            var author = _context.Location.FirstOrDefault(p => p.Id == Id);
            return author;
        }

        [HttpPost("Post")]
        public Result Post(Location _location)
        {
            Location lct = dbOperations.FindLocation(_location.Name);
            bool locationCheck = (lct != null) ? true : false;

            if (locationCheck == false)
            {
                if (dbOperations.AddModel(_location) == true)
                {
                    _result.status = 1;
                    _result.message = "Baþarýyla eklendi.";
                }
                else
                {
                    _result.status = 0;
                    _result.message = "Hata, eklenemedi.";
                }
            }
            else
            {
                _result.status = 0;
                _result.message = "Zaten listede mevcut.";
            }
            return _result;
        }

        [HttpPut("Put/{Id}")]
        public Result Update(int Id, Location newValue)
        {
            var location = _context.Location.FirstOrDefault(p => p.Id == Id);
            if (location != null)
            {
                if(location.Name != newValue.Name && newValue.Name != "string")
                {
                    location.Name = newValue.Name;
                }
                if(location.X != newValue.X && newValue.X != 0)
                {
                    location.X = newValue.X;
                }
                if (location.Y != newValue.Y && newValue.Y != 0)
                {
                    location.Y = newValue.Y;
                }
                _context.SaveChanges();
                _result.status = 1;
                _result.message = "Baþarýyla güncellendi";

            }
            else
            {
                _result.status = 0;
                _result.message = "Bulunamadý.";
            }
            return _result;
        }

        [HttpDelete("Del/{Id}")]
        public Result Delete(int Id)
        {
            if (dbOperations.DeleteModel(Id))
            {
                _result.status = 1;
                _result.message = "Baþarýyla silindi";
            }
            else
            {
                _result.status = 0;
                _result.message = "Bulunamadý veya silinmiþ.";
            }
            return _result;
        }
    }
}