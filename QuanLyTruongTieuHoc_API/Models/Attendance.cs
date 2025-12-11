namespace Models
{
    public class Attendance
    {
        public int AttendanceID { get; set; }
        public int StudentID { get; set; }
        public int ClassID { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Note { get; set; }
    }

}
