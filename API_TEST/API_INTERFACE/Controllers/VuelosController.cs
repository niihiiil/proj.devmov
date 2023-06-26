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
    public class VuelosController : ControllerBase
    {
        // POST: api/Vuelo
        [HttpPost]
        public ActionResult<Vuelo> CrearVuelo(Vuelo vuelo)
        {
            try
            {
                vuelo.GuardarVuelo(); // Guardar el nuevo vuelo en la base de datos
                return Ok(vuelo); // Devolver el vuelo creado en la respuesta
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // Devolver un código de error 500 en caso de error
            }
        }

        // PUT: api/Vuelo/5
        [HttpPut("{id}")]
        public ActionResult<Vuelo> ActualizarVuelo(int id, Vuelo vuelo)
        {
            try
            {
                vuelo.ActualizarVuelo(id); // Actualizar el vuelo en la base de datos
                return Ok(vuelo); // Devolver el vuelo actualizado en la respuesta
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // Devolver un código de error 500 en caso de error
            }
        }

        // GET: api/Vuelo/5
        [HttpGet("{id}")]
        public ActionResult<Vuelo> ObtenerVuelo(int id)
        {
            try
            {
                Vuelo vuelo = Vuelo.ObtenerVueloPorId(id); // Obtener el vuelo por su ID
                if (vuelo == null)
                    return NotFound(); // Devolver un código de error 404 si el vuelo no existe
                return Ok(vuelo); // Devolver el vuelo en la respuesta
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // Devolver un código de error 500 en caso de error
            }
        }
    }
}