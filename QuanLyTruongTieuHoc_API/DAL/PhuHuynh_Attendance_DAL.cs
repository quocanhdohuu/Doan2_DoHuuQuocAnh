using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class PhuHuynh_Attendance_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Attendance_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Attendance> GetAllAttendance(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Attendance", out error);

            var list = new List<Attendance>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Attendance
                {
                    AttendanceID = (int)row["AttendanceID"],
                    StudentID = (int)row["StudentID"],
                    ClassID = (int)row["ClassID"],
                    Date = (DateTime)row["Date"],
                    Status = row["Status"].ToString(),
                    Note = row["Note"].ToString(),
                });
            }

            return list;
        }

        public Attendance GetAttendanceById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Attendance WHERE AttendanceID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Attendance
            {
                AttendanceID = (int)row["AttendanceID"],
                StudentID = (int)row["StudentID"],
                ClassID = (int)row["ClassID"],
                Date = (DateTime)row["Date"],
                Status = row["Status"].ToString(),
                Note = row["Note"].ToString(),
            };
        }
    }
}
