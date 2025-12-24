using DAL.Helper;
using System;
using Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }

}
