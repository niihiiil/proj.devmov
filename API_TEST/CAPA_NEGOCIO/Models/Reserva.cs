using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.Models
{
    public class Reserva
    {
        public int ReservaID { get; set; }
        public int? ClienteID { get; set; }
        public int NumPlazas { get; set; }
    }

}
