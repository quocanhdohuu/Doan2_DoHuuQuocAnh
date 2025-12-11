using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Scores
    {
        public int ScoreID { get; set; }
        public int StudentID { get; set; }
        public string Subject { get; set; }
        public double ScoreValue { get; set; }
        public string Term { get; set; }
        public DateTime Date { get; set; }
        public int TeacherID { get; set; }
    }

}
