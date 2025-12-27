using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Manage_Schedule
    {
        public int ScheduleID { get; set; }
        public string ClassName { get; set; }
        public int DayOfWeek { get; set; }
        public int Period { get; set; }
        public string SubjectName { get; set; }
        public string TeacherName { get; set; }
        public string Room { get; set; }
    }
}
