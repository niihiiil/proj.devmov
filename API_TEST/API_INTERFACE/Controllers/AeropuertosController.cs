using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAPA_NEGOCIO.Models;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AeropuertosController : ControllerBase
    {
        // GET: api/Aeropuerto
        [HttpGet]
        public ActionResult<IEnumerable<Aeropuerto>> GetAeropuertos()
        {
            try
            {
                List<Aeropuerto> aeropuertos = Aeropuerto.ObtenerTodosLosAeropuertos(); 

                if (aeropuertos.Count == 0)
                {
                    return NotFound();
                }

                return Ok(aeropuertos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
