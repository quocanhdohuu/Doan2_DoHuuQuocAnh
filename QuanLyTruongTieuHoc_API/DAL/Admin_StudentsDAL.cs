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
        public bool DeleteStudent(int studentId, out string error)
        {
            if (studentId <= 0)
            {
                error = "Invalid StudentID";
                return false;
            }

            string sql = $"EXEC sp_DeleteStudent @StudentID = {studentId}";
            error = _db.ExecuteNoneQuery(sql);

            return string.IsNullOrEmpty(error);
        }
        public List<Manage_Student> GetAllStudents(out string error)
        {
            error = "";
            var list = new List<Manage_Student>();

            string sql = @"
                     SELECT
                     s.StudentID,
                     s.FullName AS StudentName,
                     s.BirthDate,
                     c.ClassName,
                     p.FullName AS ParentName,
                     p.Phone AS ParentPhone,
                     p.Address AS ParentAddress,
                     s.Status
                     FROM Students s
                     INNER JOIN Parents p ON s.ParentID = p.ParentID
                     INNER JOIN StudentClass sc ON s.StudentID = sc.StudentID AND sc.ToDate IS NULL
                     INNER JOIN Classes c ON sc.ClassID = c.ClassID
                     WHERE s.Status = 1
                     ORDER BY c.ClassName, s.FullName";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_Student
                {
                    StudentID = Convert.ToInt32(row["StudentID"]),
                    StudentName = row["StudentName"].ToString(),
                    BirthDate = Convert.ToDateTime(row["BirthDate"]),
                    ClassName = row["ClassName"].ToString(),
                    ParentName = row["ParentName"].ToString(),
                    ParentPhone = row["ParentPhone"].ToString(),
                    ParentAddress = row["ParentAddress"].ToString(),
                    Status = Convert.ToInt32(row["Status"])
                });
            }

            return list;
        }
        public List<Manage_Student> GetStudentsByClassName(string className, out string error)
        {
            error = "";
            var list = new List<Manage_Student>();

            if (string.IsNullOrWhiteSpace(className))
                return list;

            string sql = @"
                    SELECT
                    s.StudentID,
                    s.FullName AS StudentName,
                    s.BirthDate,
                    c.ClassName,
                    p.FullName AS ParentName,
                    p.Phone AS ParentPhone,
                    p.Address AS ParentAddress,
                    s.Status
                    FROM Students s
                    INNER JOIN Parents p ON s.ParentID = p.ParentID
                    INNER JOIN StudentClass sc ON s.StudentID = sc.StudentID AND sc.ToDate IS NULL
                    INNER JOIN Classes c ON sc.ClassID = c.ClassID
                    WHERE s.Status = 1
                      AND c.ClassName = N'" + className.Replace("'", "''") + @"'
                    ORDER BY s.FullName";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_Student
                {
                    StudentID = Convert.ToInt32(row["StudentID"]),
                    StudentName = row["StudentName"].ToString(),
                    BirthDate = Convert.ToDateTime(row["BirthDate"]),
                    ClassName = row["ClassName"].ToString(),
                    ParentName = row["ParentName"].ToString(),
                    ParentPhone = row["ParentPhone"].ToString(),
                    ParentAddress = row["ParentAddress"].ToString(),
                    Status = Convert.ToInt32(row["Status"])
                });
            }

            return list;
        }
        public List<Manage_Student> GetStudentsByNameOrParent(string keyword, out string error)
        {
            error = "";
            var list = new List<Manage_Student>();

            if (string.IsNullOrWhiteSpace(keyword))
                return list;

            string safeKeyword = keyword.Replace("'", "''");

            string sql = @"
                    SELECT
                    s.StudentID,
                    s.FullName AS StudentName,
                    s.BirthDate,
                    c.ClassName,
                    p.FullName AS ParentName,
                    p.Phone AS ParentPhone,
                    p.Address AS ParentAddress,
                    s.Status
                    FROM Students s
                    INNER JOIN Parents p ON s.ParentID = p.ParentID
                    INNER JOIN StudentClass sc ON s.StudentID = sc.StudentID AND sc.ToDate IS NULL
                    INNER JOIN Classes c ON sc.ClassID = c.ClassID
                    WHERE s.Status = 1
                      AND (
                            s.FullName LIKE N'%" + safeKeyword + @"%'
                            OR p.FullName LIKE N'%" + safeKeyword + @"%'
                          )
                    ORDER BY c.ClassName, s.FullName";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_Student
                {
                    StudentID = Convert.ToInt32(row["StudentID"]),
                    StudentName = row["StudentName"].ToString(),
                    BirthDate = Convert.ToDateTime(row["BirthDate"]),
                    ClassName = row["ClassName"].ToString(),
                    ParentName = row["ParentName"].ToString(),
                    ParentPhone = row["ParentPhone"].ToString(),
                    ParentAddress = row["ParentAddress"].ToString(),
                    Status = Convert.ToInt32(row["Status"])
                });
            }

            return list;
        }

        public Manage_Student GetStudentsByID(int studentID, out string error)
        {
            error = "";

            string sql = @"
                SELECT
                s.StudentID,
                s.FullName AS StudentName,
                s.BirthDate,
                c.ClassName,
                p.FullName AS ParentName,
                p.Phone AS ParentPhone,
                p.Address AS ParentAddress,
                s.Status
                FROM Students s
                INNER JOIN Parents p ON s.ParentID = p.ParentID
                INNER JOIN StudentClass sc 
                ON s.StudentID = sc.StudentID AND sc.ToDate IS NULL
                INNER JOIN Classes c 
                ON sc.ClassID = c.ClassID
                WHERE s.StudentID = " + studentID + @"
                AND s.Status = 1";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            DataRow row = dt.Rows[0];

            return new Manage_Student
            {
                StudentID = Convert.ToInt32(row["StudentID"]),
                StudentName = row["StudentName"].ToString(),
                BirthDate = Convert.ToDateTime(row["BirthDate"]),
                ClassName = row["ClassName"].ToString(),
                ParentName = row["ParentName"].ToString(),
                ParentPhone = row["ParentPhone"].ToString(),
                ParentAddress = row["ParentAddress"].ToString(),
                Status = Convert.ToInt32(row["Status"])
            };
        }
        public int GetTotalStudents(out string error)
        {
            error = "";

            string sql = @"
                SELECT COUNT(*) AS Total
                FROM Students
                WHERE Status = 1";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return 0;

            return Convert.ToInt32(dt.Rows[0]["Total"]);
        }

    }

}
