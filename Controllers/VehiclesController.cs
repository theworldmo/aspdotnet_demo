using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vega.Controllers.Resources;
using vega.Models;
using vega.Persistence;

namespace vega.Controllers
{
    [Route("/api/vehicles")]
    public class VehiclesController : Controller
    {
        private readonly JmoDbContext context;
        private readonly IMapper mapper;
        public VehiclesController(JmoDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }
        
        // [HttpPost("/api/vehicles")]
        // public async Task<IEnumerable<MakeResource>> GetMakes()
        // {
        //     var makes = await this.context.Makes.Include(m => m.Models).ToListAsync();
        //     return mapper.Map<List<Make>, List<MakeResource>>(makes);
        // }

        [HttpPost()]
        public IActionResult CreateVehicle([FromBody] VehicleResource vehicleResource){
            var vehicle = this.mapper.Map<VehicleResource, Vehicle>(vehicleResource);
            return this.Ok(vehicle);
        }
    }
}