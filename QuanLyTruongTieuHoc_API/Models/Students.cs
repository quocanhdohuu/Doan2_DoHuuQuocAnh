using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Students
    {
        public int StudentID { get; set; }
        public string FullName { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string HealthNote { get; set; }
        public int Status { get; set; }
        public int ParentID { get; set; }
    }

}
