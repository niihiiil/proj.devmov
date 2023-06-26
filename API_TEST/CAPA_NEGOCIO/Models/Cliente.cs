using CAPA_DATOS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAPA_NEGOCIO.MODEL
{
    public class Cliente : EntityClass
    {
        public int ClienteID { get; set; }
        public string DNI { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Dirección { get; set; }
        public string Teléfono { get; set; }
        public int? IDCredenciales { get; set; }

        public void Guardar()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Save();
        }

        public void Editar()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("ClienteID");
        }
    }
}
