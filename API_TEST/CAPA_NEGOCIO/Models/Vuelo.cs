using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.Models
{
        public class Vuelo : EntityClass
        {
            private const string TableName = "Vuelo";

            public int VueloID { get; set; }
            public string CodigoUnico { get; set; }
            public DateTime FechaSalida { get; set; }
            public TimeSpan HoraSalida { get; set; }
            public DateTime FechaLlegada { get; set; }
            public TimeSpan HoraLlegada { get; set; }
            public int AeropuertoSalidaID { get; set; }
            public int AeropuertoLlegadaID { get; set; }
            public int AvionID { get; set; }

            // Método para guardar un nuevo vuelo en la base de datos
            public void GuardarVuelo()
            {
                SqlADOConexion.IniciarConexion("sa", "1234");
                Save(); // Guardar la instancia actual de Vuelo en la base de datos
            }

            // Método para actualizar un vuelo en la base de datos
            public void ActualizarVuelo(int id)
            {
                SqlADOConexion.IniciarConexion("sa", "1234");
                Update(id.ToString());
            }

        public static Vuelo ObtenerVueloPorId(int id)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");

            string query = "SELECT * FROM Vuelo WHERE VueloID = " + id;

            Vuelo vuelo = new Vuelo();
            List<Vuelo> vuelos = vuelo.Get<Vuelo>(query);

            return vuelos.FirstOrDefault();
        }


    }
}

