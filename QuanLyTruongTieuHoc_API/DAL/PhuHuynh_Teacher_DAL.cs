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
    public class PhuHuynh_Teacher_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Teacher_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Teachers> GetAllTeacher(out string error)
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
                    Specialization = row["Specialization"].ToString()
                });
            }

            return list;
        }

        public Teachers GetTeacherById(int id, out string error)
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
                Specialization = row["Specialization"].ToString()
            };
        }
    }
}
