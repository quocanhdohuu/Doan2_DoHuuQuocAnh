using DAL.Helper;
using Models;
using System.Collections.Generic;
using System.Data;

namespace DAL
{
    public class PhuHuynh_Student_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Student_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Students> GetAllStudents(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Students", out error);

            var list = new List<Students>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Students
                {
                    StudentID = (int)row["StudentID"],
                    FullName = row["FullName"].ToString(),
                    BirthDate = (DateTime)row["BirthDate"],
                    Gender = row["Gender"].ToString(),
                    Address = row["Address"].ToString(),
                    HealthNote = row["Healthnote"].ToString(),
                    ParentID = (int)row["ParentID"]
                });
            }

            return list;
        }

        public Students GetStudentsById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Students WHERE StudentID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Students
            {
                StudentID = (int)row["StudentID"],
                FullName = row["FullName"].ToString(),
                BirthDate = (DateTime)row["BirthDate"],
                Gender = row["Gender"].ToString(),
                Address = row["Address"].ToString(),
                HealthNote = row["Healthnote"].ToString(),
                ParentID = (int)row["ParentID"]
            };
        }
        public bool UpdateStudents(Students students, out string error)
        {
            if (students.StudentID <= 0)
            {
                error = "Invalid StudentID";
                return false;
            }

            string sql =
                $"UPDATE Students SET " +
                $"Fullname = '{students.FullName.Replace("'", "''")}', " +
                $"BirthDate = '{students.BirthDate:dd-MM-yyyy}', " +
                $"Gender = '{students.Gender.Replace("'", "''")}', " +
                $"Address = '{students.Address.Replace("'", "''")}', " +
                $"HealthNote = '{students.HealthNote.Replace("'", "''")}', " +
                $"ParentID =  '{students.ParentID}', " +
                $"WHERE StudentID = {students.StudentID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}

