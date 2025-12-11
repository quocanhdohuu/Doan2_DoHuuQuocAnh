using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Schedule
    {
        public int ScheduleID { get; set; }
        public int ClassID { get; set; }
        public int DayOfWeek { get; set; }
        public int Period { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public int SubjectID { get; set; }
        public int TeacherID { get; set; }
        public string Room { get; set; }
    }

}
