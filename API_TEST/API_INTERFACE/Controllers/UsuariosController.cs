using CAPA_NEGOCIO.MODEL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login(Credenciales model)
        {
            // Verificar si las credenciales son válidas
            Credenciales usuario = Credenciales.ObtenerInicioSesionPorId(model.CredencialesID ?? 0);
            if (usuario != null && usuario.Usuario == model.Usuario && usuario.Contraseña == model.Contraseña)
            {
                return Ok(new { message = "Inicio de sesión exitoso" });
            }
            else
            {
                return BadRequest(new { message = "Credenciales inválidas" });
            }
        }
        [HttpPost("registro")]
        public IActionResult Registro([FromBody] Credenciales model)
        {
            // Validar si los datos del modelo son válidos
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                model.CrearInicioSesion();
                return Ok(model);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al registrar el usuario: {ex.Message}");
            }
        }
       

    }
}
