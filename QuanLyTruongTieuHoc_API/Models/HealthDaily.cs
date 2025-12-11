using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class HealthDaily
    {
        public int HealthID { get; set; }
        public int StudentID { get; set; }
        public DateTime Date { get; set; }
        public string MealStatus { get; set; }
        public string HealthStatus { get; set; }
        public string TeacherNote { get; set; }
    }

}
