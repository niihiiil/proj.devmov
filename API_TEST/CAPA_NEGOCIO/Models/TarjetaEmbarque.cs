using System;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.MODEL
{
    public class TarjetaEmbarque
    {
        public int TarjetaEmbarqueID { get; set; }
        public int? ClienteID { get; set; }
        public int? ReservaID { get; set; }
        public DateTime? Fecha { get; set; }
        public int? NumAsiento { get; set; }
        public int? Fila { get; set; }
        public char? Columna { get; set; }
        public int? Planta { get; set; }
    }
}
