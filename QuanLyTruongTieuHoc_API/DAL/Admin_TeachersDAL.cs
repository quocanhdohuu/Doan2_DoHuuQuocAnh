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
        public List<Manage_Teacher> GetAllTeachers(out string error)
        {
            error = "";
            var list = new List<Manage_Teacher>();

            string sql = @"
                SELECT 
                t.TeacherID,
                t.FullName,
                t.Phone,
                t.Email,
                t.Specialization,
                t.IsCN,
                c.ClassName
                FROM Teachers t
                LEFT JOIN TeacherClass tc 
                ON t.TeacherID = tc.TeacherID AND tc.ToDate IS NULL
                LEFT JOIN Classes c 
                ON tc.ClassID = c.ClassID
                WHERE t.Status <> N'Nghỉ'
                ORDER BY t.FullName";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            var dict = new Dictionary<int, Manage_Teacher>();

            foreach (DataRow row in dt.Rows)
            {
                int teacherId = Convert.ToInt32(row["TeacherID"]);

                if (!dict.ContainsKey(teacherId))
                {
                    dict[teacherId] = new Manage_Teacher
                    {
                        TeacherID = teacherId,
                        FullName = row["FullName"].ToString(),
                        Phone = row["Phone"].ToString(),
                        Email = row["Email"].ToString(),
                        Specialization = row["Specialization"].ToString(),
                        IsCN = row["IsCN"].ToString() == "Có",
                        ClassNames = new List<string>()
                    };
                }

                if (row["ClassName"] != DBNull.Value)
                {
                    dict[teacherId].ClassNames.Add(row["ClassName"].ToString());
                }
            }

            return dict.Values.ToList();
        }
        public Manage_Teacher GetTeacherByID(int teacherID, out string error)
        {
            error = "";

            string sql = @"
                SELECT 
                t.TeacherID,
                t.FullName,
                t.Phone,
                t.Email,
                t.Specialization,
                t.IsCN,
                c.ClassName
                FROM Teachers t
                LEFT JOIN TeacherClass tc 
                ON t.TeacherID = tc.TeacherID AND tc.ToDate IS NULL
                LEFT JOIN Classes c 
                ON tc.ClassID = c.ClassID
                WHERE t.TeacherID = " + teacherID + @"
                AND t.Status <> N'Nghỉ'";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var teacher = new Manage_Teacher
            {
                TeacherID = teacherID,
                FullName = dt.Rows[0]["FullName"].ToString(),
                Phone = dt.Rows[0]["Phone"].ToString(),
                Email = dt.Rows[0]["Email"].ToString(),
                Specialization = dt.Rows[0]["Specialization"].ToString(),
                IsCN = dt.Rows[0]["IsCN"].ToString() == "Có",
                ClassNames = new List<string>()
            };

            foreach (DataRow row in dt.Rows)
            {
                if (row["ClassName"] != DBNull.Value)
                {
                    teacher.ClassNames.Add(row["ClassName"].ToString());
                }
            }

            return teacher;
        }
        public int GetTotalTeachers(out string error)
        {
            error = "";

            string sql = @"
                SELECT COUNT(*) 
                FROM Teachers
                WHERE Status <> N'Nghỉ'";

            object result = _db.ExecuteScalar(sql, out error);

            if (!string.IsNullOrEmpty(error) || result == null)
                return 0;

            return Convert.ToInt32(result);
        }

    }
}
