using CAPA_DATOS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAPA_NEGOCIO.MODEL
{
        public class Credenciales : EntityClass
        {
            private const string TableName = "Credenciales";

            public int? CredencialesID { get; set; }
            public string Usuario { get; set; }
            public string Contraseña { get; set; }


            public void CrearInicioSesion()
            {
            SqlADOConexion.IniciarConexion("sa", "1234");
                Save(); 
            }

            // Método para obtener un inicio de sesión por su ID
            public static Credenciales ObtenerInicioSesionPorId(int id)
            {
                SqlADOConexion.IniciarConexion("sa", "1234");
                Credenciales inicioSesion = new Credenciales();
                List<Credenciales> iniciosSesion = inicioSesion.Get<Credenciales>("CredencialesID = " + id); 
                return iniciosSesion.Count > 0 ? iniciosSesion[0] : null; // Devolver el primer inicio de sesión encontrado o null si no hay coincidencias
            }

            // Método para obtener todos los inicios de sesión
            public static List<Credenciales> ObtenerTodosLosIniciosSesion()
            {
                SqlADOConexion.IniciarConexion("sa", "1234");
                Credenciales inicioSesion = new Credenciales();
                return inicioSesion.Get<Credenciales>(); 
            }
        }
    }
