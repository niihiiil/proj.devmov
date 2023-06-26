using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.Models
{
    public class TarjetaCredito
    {
        public int TarjetaID { get; set; }
        public int? ClienteID { get; set; }
        public string NumeroTarjeta { get; set; }
    }

}
