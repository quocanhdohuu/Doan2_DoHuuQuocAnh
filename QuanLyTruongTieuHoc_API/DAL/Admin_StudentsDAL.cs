using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Admin_StudentsDAL
    {
        private readonly DatabaseHelper _db;

        public Admin_StudentsDAL(DatabaseHelper db)
        {
            _db = db;
        }

        public bool InsertStudent(Manage_Student student, out string error)
        {
            string sql = $@"
                EXEC sp_AddStudent
                @StudentName = N'{student.StudentName.Replace("'", "''")}',
                @BirthDate = '{student.BirthDate:yyyy-MM-dd}',
                @ClassName = N'{student.ClassName.Replace("'", "''")}',
                @ParentName = N'{student.ParentName.Replace("'", "''")}',
                @ParentPhone = '{student.ParentPhone}',
                @ParentAddress = N'{student.ParentAddress.Replace("'", "''")}'";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool UpdateStudent(Manage_Student student, out string error)
        {
            string sql = $@"
                EXEC sp_UpdateStudent
                @StudentID = {student.StudentID},
                @StudentName = N'{student.StudentName.Replace("'", "''")}',
                @BirthDate = '{student.BirthDate:yyyy-MM-dd}',
                @ClassName = N'{student.ClassName.Replace("'", "''")}',
                @ParentName = N'{student.ParentName.Replace("'", "''")}',
                @ParentPhone = '{student.ParentPhone}',
                @ParentAddress = N'{student.ParentAddress.Replace("'", "''")}'";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }





    }

}
