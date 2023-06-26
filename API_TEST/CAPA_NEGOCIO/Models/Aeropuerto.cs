using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.Models
{
    public class Aeropuerto : EntityClass
    {
        public int AeropuertoID { get; set; }
        public string CodigoUnico { get; set; }
        public string Nombre { get; set; }
        public string Localidad { get; set; }
        public string Pais { get; set; }

        public static List<Aeropuerto> ObtenerTodosLosAeropuertos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Aeropuerto aeropuerto = new Aeropuerto();
            return aeropuerto.Get<Aeropuerto>(); // Obtener una lista de todos los aeropuertos de la base de datos
        }
    }

}
