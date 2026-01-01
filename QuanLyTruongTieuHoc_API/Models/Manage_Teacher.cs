using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Manage_Teacher
    {
        public int TeacherID { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public bool IsCN { get; set; }
        public List<string> ClassNames { get; set; } = new List<string>();
    }

}
