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
    public class Teacher_StudentsDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_StudentsDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Students> GetAllStu(out string error)
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
                    ParentID = (int)row["ParentID"],
                    HealthNote = row["HealthNote"].ToString(),
                    Status = (int)row["HealthNote"],
                });
            }

            return list;
        }
        public Students GetStuById(int id, out string error)
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
                ParentID = (int)row["ParentID"],
                HealthNote = row["HealthNote"].ToString(),
                Status= (int)row["HealthNote"],
            };
        }
        public bool UpdateStu(Students student, out string error)
        {
            if (student.StudentID <= 0)
            {
                error = "Invalid StuID";
                return false;
            }

            string sql =
                 $"UPDATE Students SET " +
                $"FullName = '{student.FullName.Replace("'", "''")}', " +
                $"BirthDate = '{student.BirthDate:yyyy-MM-dd}', " +
                $"Gender = '{student.Gender.Replace("'", "''")}', " +
                $"Address = '{student.Address.Replace("'", "''")}', " +
                $"ParentID = {student.ParentID}, " +
                $"HealthNote = '{student.HealthNote.Replace("'", "''")}' " +
                $"Status = {student.Status} " +
                $"WHERE StudentID = {student.StudentID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
