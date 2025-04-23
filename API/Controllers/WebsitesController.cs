using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WebsitesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Website>> Get()
        {
            var websites = new List<Website>
            {
                new Website { Id = 1, Title = "OpenTec", Url = "https://www.opentec.com" },
                new Website { Id = 2, Title = "Google", Url = "https://www.google.com.mx" },
                new Website { Id = 3, Title = "Wikipedia", Url = "https://www.wikipedia.org" }
            };

            return Ok(websites);
        }
    }
}
