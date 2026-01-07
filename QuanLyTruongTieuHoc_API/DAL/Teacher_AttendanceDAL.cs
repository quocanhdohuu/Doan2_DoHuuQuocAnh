using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Formats.Asn1.AsnWriter;

namespace DAL
{
    public class Teacher_AttendanceDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_AttendanceDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Attendance> GetAllATen(out string error)
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
                    Note = row["Note"].ToString()

                });
            }

            return list;
        }
        public Attendance GetATenById(int id, out string error)
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
                Note = row["Note"].ToString()
            };
        }
        public bool InsertATen(Attendance AT, out string error)
        {
            string sql =
                $"INSERT INTO Attendance (StudentID, ClassID, Date, Status, Note) VALUES (" +
                    $"{AT.StudentID}, " +
                    $"{AT.ClassID}, " +
                    $"'{AT.Date:yyyy-MM-dd}', " +
                    $"'{AT.Status.Replace("'", "''")}', " +
                    $"'{AT.Note.Replace("'", "''")}')";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool UpdateAten(Attendance AT, out string error)
        {
            if (AT.AttendanceID <= 0)
            {
                error = "Invalid AtenID";
                return false;
            }

            string sql =
                 $"UPDATE Attendance SET " +
                $"StudentID = {AT.StudentID}, " +
                $"ClassID = {AT.ClassID}, " +
                $"Date = '{AT.Date:yyyy-MM-dd}', " +
                $"Status = '{AT.Status.Replace("'", "''")}', " +
                $"Note = '{AT.Note.Replace("'", "''")}' " +
                 $"WHERE AttendanceID = {AT.AttendanceID}";
    
            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool DeleteAT(int ATenId, out string error)
        {
            if (ATenId <= 0)
            {
                error = "Invalid ATenID";
                return false;
            }

            string sql =
                $"DELETE FROM Attendance WHERE AttendanceID = {ATenId}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool SaveAttendance(Attendance AT, out string error)
        {
            string sql = $@"
            IF EXISTS (
            SELECT 1 FROM Attendance
            WHERE StudentID = {AT.StudentID}
              AND ClassID = {AT.ClassID}
              AND Date = '{AT.Date:yyyy-MM-dd}'
                )
                BEGIN
                UPDATE Attendance
                SET
                Status = '{AT.Status.Replace("'", "''")}',
                Note = '{AT.Note.Replace("'", "''")}'
                WHERE StudentID = {AT.StudentID}
                AND ClassID = {AT.ClassID}
                AND Date = '{AT.Date:yyyy-MM-dd}'
                END
                ELSE
                BEGIN
                INSERT INTO Attendance (StudentID, ClassID, Date, Status, Note)
                VALUES (
                {AT.StudentID},
                {AT.ClassID},
                '{AT.Date:yyyy-MM-dd}',
                '{AT.Status.Replace("'", "''")}',
                '{AT.Note.Replace("'", "''")}'
                )
                END
                ";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
