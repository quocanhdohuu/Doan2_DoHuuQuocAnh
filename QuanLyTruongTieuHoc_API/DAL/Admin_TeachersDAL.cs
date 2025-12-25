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
    public class Admin_TeachersDAL
    {
        private readonly DatabaseHelper _db;

        public Admin_TeachersDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public bool AddTeacher(Manage_Teacher model, out string error)
        {
            error = "";

            string classNames = string.Join(",", model.ClassNames);

            string sql = $@"
                EXEC sp_AddTeacher
                @FullName = N'{model.FullName.Replace("'", "''")}',
                @Phone = '{model.Phone}',
                @Email = '{model.Email}',
                @Specialization = N'{model.Specialization}',
                @IsCN = N'{(model.IsCN ? "Có" : "Không")}',
                @ClassNames = N'{string.Join(",", model.ClassNames)}'";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool UpdateTeacher(Manage_Teacher model, out string error)
        {
            error = "";

            if (model == null || model.TeacherID <= 0)
            {
                error = "Dữ liệu không hợp lệ";
                return false;
            }

            string classNames = model.ClassNames != null && model.ClassNames.Any()
                ? string.Join(",", model.ClassNames)
                : "";

            string sql = $@"
                EXEC sp_UpdateTeacher
                @TeacherID = {model.TeacherID},
                @FullName = N'{model.FullName.Replace("'", "''")}',
                @Phone = '{model.Phone}',
                @Email = '{model.Email}',
                @Specialization = N'{model.Specialization}',
                @IsCN = N'{(model.IsCN ? "Có" : "Không")}',
                @ClassNames = N'{classNames}'";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }

        public bool DeleteTeacher(int teacherID, out string error)
        {
            error = "";

            string sql = $"EXEC sp_DeleteTeacher @TeacherID = {teacherID}";
            error = _db.ExecuteNoneQuery(sql);

            return string.IsNullOrEmpty(error);
        }

    }
}
