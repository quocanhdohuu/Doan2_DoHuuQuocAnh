using System;
using System.Collections.Generic;
using System.Linq;
using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace DAL
{
    public class Admin_ReportsDAL
    {
        private readonly DatabaseHelper _db;

        public Admin_ReportsDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public Manage_Attendence GetTodayAttendanceSummary(out string error)
        {
            error = "";
            string sql = "EXEC sp_GetTodayAttendanceSummary";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Manage_Attendence
            {
                TotalAttendance = Convert.ToInt32(row["TotalAttendance"]),
                PresentCount = Convert.ToInt32(row["PresentCount"]),
                PresentPercent = Convert.ToDecimal(row["PresentPercent"])
            };
        }
        public Manage_AttendanceByClass GetAttendanceByClassName(string className, out string error)
        {
            error = "";

            string sql = @"
                EXEC sp_GetAttendanceByClassName
                @ClassName = N'{0}'";

            sql = string.Format(sql, className.Replace("'", "''"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Manage_AttendanceByClass
            {
                ClassName = row["ClassName"].ToString(),
                TotalStudents = Convert.ToInt32(row["TotalStudents"]),
                PresentCount = Convert.ToInt32(row["PresentCount"]),
                AbsentCount = Convert.ToInt32(row["AbsentCount"]),
                LateCount = Convert.ToInt32(row["LateCount"]),
                PresentPercent = Convert.ToDecimal(row["PresentPercent"])
            };
        }

    }
}
