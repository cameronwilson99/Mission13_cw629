using Microsoft.AspNetCore.Mvc;
using MovieAPI.Controllers.Data;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext _db;
        public MovieController(MovieDbContext temp)
        {
            _db = temp;
        }
        public IEnumerable<Movies> Get()
        {
            return _db.Movies.ToArray();
        }
    }
}
