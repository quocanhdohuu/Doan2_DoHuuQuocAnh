using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Teacher_TeachersDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_TeachersDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Teachers> GetAllTea(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Teachers", out error);

            var list = new List<Teachers>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Teachers
                {
                    TeacherID = (int)row["TeacherID"],
                    FullName = row["FullName"].ToString(),
                    Phone = row["Phone"].ToString(),
                    Email = row["Email"].ToString(),
                    Specialization = row["Specialization"].ToString(),
                    UserID = (int)row["UserID"],
                    IsCN = row["IsCN"].ToString(),
                    Status = row["Status"].ToString(),

                });
            }

            return list;
        }
        public Teachers GetTeaById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Teachers WHERE TeacherID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Teachers
            {
                TeacherID = (int)row["TeacherID"],
                FullName = row["FullName"].ToString(),
                Phone = row["Phone"].ToString(),
                Email = row["Email"].ToString(),
                Specialization = row["Specialization"].ToString(),
                UserID = (int)row["UserID"],
                IsCN = row["IsCN"].ToString(),
                Status = row["Status"].ToString(),

            };
        }
        public bool UpdateTea(Teachers teacher, out string error)
        {
            if (teacher.TeacherID <= 0)
            {
                error = "Invalid TeaID";
                return false;
            }

            string sql =
                $"UPDATE Teachers SET " +
                $"FullName = '{teacher.FullName.Replace("'", "''")}', " +
                $"Phone = '{teacher.Phone.Replace("'", "''")}', " +
                $"Email = '{teacher.Email.Replace("'", "''")}', " +
                $"Specialization = '{teacher.Specialization.Replace("'", "''")}', " +
                $"UserID = {teacher.UserID} " +
                $"IsCN = '{teacher.IsCN.Replace("'", "''")}', " +
                $"Status = '{teacher.Status.Replace("'", "''")}' " +
                $"WHERE TeacherID = {teacher.TeacherID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
