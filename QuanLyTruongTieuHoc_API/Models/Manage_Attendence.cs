using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Manage_Attendence
    {
        public int TotalAttendance { get; set; }
        public int PresentCount { get; set; }
        public decimal PresentPercent { get; set; }
    }
}
