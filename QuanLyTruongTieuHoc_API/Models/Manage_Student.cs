using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Manage_Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public DateTime BirthDate { get; set; }
        public string ClassName { get; set; }

        public string ParentName { get; set; }
        public string ParentPhone { get; set; }
        public string ParentAddress { get; set; }
        public int Status { get; set; }
    }

}
