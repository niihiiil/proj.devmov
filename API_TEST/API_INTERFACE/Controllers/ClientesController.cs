using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAPA_NEGOCIO.MODEL;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        [HttpPost]
        public IActionResult GuardarCliente(Cliente cliente)
        {
            try
            {
                int idCredenciales = ObtenerIdCredencialesUsuarioLogueado();
                cliente.IDCredenciales = idCredenciales;
                cliente.Guardar();

                return Ok(cliente);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public IActionResult EditarCliente(Cliente cliente)
        {
            try
            {
                int idCredenciales = ObtenerIdCredencialesUsuarioLogueado();
                cliente.IDCredenciales = idCredenciales;
                cliente.Editar();

                return Ok(cliente);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult ObtenerCliente(int id)
        {
            try
            {
                Cliente cliente = ObtenerClientePorId(id);
                if (cliente == null)
                    return NotFound();

                return Ok(cliente);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        private int ObtenerIdCredencialesUsuarioLogueado()
        {
            return 1;
        }

        private Cliente ObtenerClientePorId(int id)
        {
            // Lógica para obtener el cliente por su ID
            // ...

            return null; // Reemplazar con la lógica real para obtener el cliente desde algún origen de datos
        }
    }

}

