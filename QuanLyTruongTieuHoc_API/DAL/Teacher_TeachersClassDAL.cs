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
    public class Teacher_TeachersClassDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_TeachersClassDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<TeacherClass> GetAllTC(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM TeacherClass", out error);

            var list = new List<TeacherClass>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new TeacherClass
                {
                    ID = (int)row["ID"],
                    TeacherID = (int)row["TeacherID"],
                    ClassID = (int)row["ClassID"],
                    FromDate = (DateTime)row["FromDate"],
                    ToDate = (DateTime)row["ToDate"],
                });
            }

            return list;
        }
        public List<Classes> GetClassNameByTeacherAndClass(int teacherId, out string error)
        {
            error = "";

            string sql = $@"
            SELECT DISTINCT c.ClassID, c.ClassName
            FROM TeacherClass tc
            JOIN Classes c ON tc.ClassID = c.ClassID
            WHERE tc.TeacherID = {teacherId}";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            var list = new List<Classes>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Classes
                {
                    ClassID = (int)row["ClassID"],
                    ClassName = row["ClassName"].ToString()
                });
            }

            return list;
        }
    }
}
