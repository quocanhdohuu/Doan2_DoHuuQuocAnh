using DAL.Helper;
using System;
using Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace DAL
{
    public class Admin_ClassesDAL
    {
        private readonly DatabaseHelper _db;

        public Admin_ClassesDAL(DatabaseHelper db)
        {
            _db = db;
        }

        public bool AddClass(Classes model, out string error)
        {
            string sql = @"
                EXEC sp_AddClass
                @ClassName = N'{0}',
                @Grade = N'{1}',
                @NumberOfStudents = {2},
                @Classroom = '{3}',
                @Description = N'{4}',
                @GVCN = N'{5}'
                ";

            sql = string.Format(
                sql,
                model.ClassName.Replace("'", "''"),
                model.Grade.Replace("'", "''"),
                model.NumberOfStudents,
                model.Classroom.Replace("'", "''"),
                model.Description?.Replace("'", "''"),
                model.GVCN?.Replace("'", "''")
            );

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }

        public bool UpdateClass(Classes model, out string error)
        {
            string sql = @"
            EXEC sp_UpdateClass
                @ClassID = {0},
                @ClassName = N'{1}',
                @Grade = N'{2}',
                @NumberOfStudents = {3},
                @Classroom = '{4}',
                @Description = N'{5}',
                @GVCN = N'{6}'";

            sql = string.Format(
                sql,
                model.ClassID,
                model.ClassName.Replace("'", "''"),
                model.Grade.Replace("'", "''"),
                model.NumberOfStudents,
                model.Classroom.Replace("'", "''"),
                model.Description?.Replace("'", "''"),
                model.GVCN?.Replace("'", "''")
            );

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public List<Classes> GetAllClasses(out string error)
        {
            error = "";
            var list = new List<Classes>();

            string sql = @"
                SELECT 
                ClassID,
                ClassName,
                Grade,
                NumberOfStudents,
                Classroom,
                Description,
                GVCN
                FROM Classes
                ORDER BY Grade, ClassName";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Classes
                {
                    ClassID = Convert.ToInt32(row["ClassID"]),
                    ClassName = row["ClassName"].ToString(),
                    Grade = row["Grade"].ToString(),
                    NumberOfStudents = Convert.ToInt32(row["NumberOfStudents"]),
                    Classroom = row["Classroom"].ToString(),
                    Description = row["Description"] == DBNull.Value ? null : row["Description"].ToString(),
                    GVCN = row["GVCN"] == DBNull.Value ? null : row["GVCN"].ToString()
                });
            }

            return list;
        }
        public Classes GetClassByID(int classID, out string error)
        {
            error = "";

            string sql = @"
                SELECT 
                ClassID,
                ClassName,
                Grade,
                NumberOfStudents,
                Classroom,
                Description,
                GVCN
                FROM Classes
                WHERE ClassID = " + classID;

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Classes
            {
                ClassID = Convert.ToInt32(row["ClassID"]),
                ClassName = row["ClassName"].ToString(),
                Grade = row["Grade"].ToString(),
                NumberOfStudents = Convert.ToInt32(row["NumberOfStudents"]),
                Classroom = row["Classroom"].ToString(),
                Description = row["Description"] == DBNull.Value ? null : row["Description"].ToString(),
                GVCN = row["GVCN"] == DBNull.Value ? null : row["GVCN"].ToString()
            };
        }
        public int GetTotalClasses(out string error)
        {
            error = "";

            string sql = @"SELECT COUNT(*) AS Total FROM Classes";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return 0;

            return Convert.ToInt32(dt.Rows[0]["Total"]);
        }


    }

}
