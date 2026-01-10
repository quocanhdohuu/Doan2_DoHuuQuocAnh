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
        public Manage_AcademicSummary GetAcademicSummary(DateTime fromDate, DateTime toDate, out string error)
        {
            error = "";
            string sql = @"
                EXEC sp_Dashboard_AcademicSummary_Range
                @FromDate = '{0}',
                @ToDate   = '{1}'";

            sql = string.Format(sql, fromDate.ToString("yyyy-MM-dd"), toDate.ToString("yyyy-MM-dd"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);
            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0) return null;

            var row = dt.Rows[0];
            return new Manage_AcademicSummary
            {
                TotalStudents = Convert.ToInt32(row["TotalStudents"]),
                ExcellentCount = Convert.ToInt32(row["ExcellentCount"]),
                ExcellentPercent = Convert.ToDecimal(row["ExcellentPercent"]),
                NeedImproveCount = Convert.ToInt32(row["NeedImproveCount"]),
                NeedImprovePercent = Convert.ToDecimal(row["NeedImprovePercent"])
            };
        }

        public List<Manage_AcademicDistribution> GetAcademicDistribution(DateTime fromDate, DateTime toDate, out string error)
        {
            error = "";
            string sql = @"
                EXEC sp_Dashboard_AcademicDistribution_Range
                @FromDate = '{0}',
                @ToDate   = '{1}'";

            sql = string.Format(sql, fromDate.ToString("yyyy-MM-dd"), toDate.ToString("yyyy-MM-dd"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);
            if (!string.IsNullOrEmpty(error) || dt == null) return null;

            var list = new List<Manage_AcademicDistribution>();
            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_AcademicDistribution
                {
                    XepLoai = row["XepLoai"].ToString(),
                    SoLuong = Convert.ToInt32(row["SoLuong"]),
                    TiLe = Convert.ToDecimal(row["TiLe"])
                });
            }
            return list;
        }

        public List<Manage_AttendanceByClassRow> GetAttendanceByClass(DateTime fromDate, DateTime toDate, out string error)
        {
            error = "";
            string sql = @"
                EXEC sp_Dashboard_AttendanceByClass_Range
                @FromDate = '{0}',
                @ToDate   = '{1}'";

            sql = string.Format(sql, fromDate.ToString("yyyy-MM-dd"), toDate.ToString("yyyy-MM-dd"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);
            if (!string.IsNullOrEmpty(error) || dt == null) return null;

            var list = new List<Manage_AttendanceByClassRow>();
            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_AttendanceByClassRow
                {
                    ClassName = row["ClassName"].ToString(),
                    TotalStudents = Convert.ToInt32(row["TotalStudents"]),
                    PresentCount = Convert.ToInt32(row["PresentCount"]),
                    AbsentCount = Convert.ToInt32(row["AbsentCount"]),
                    LateCount = Convert.ToInt32(row["LateCount"]),
                    PresentPercent = Convert.ToDecimal(row["PresentPercent"])
                });
            }
            return list;
        }

        public List<Manage_MonthlyAttendanceTrend> GetMonthlyTrend(DateTime fromDate, DateTime toDate, out string error)
        {
            error = "";
            string sql = @"
                EXEC sp_Dashboard_AttendanceMonthlyTrend_Range
                @FromDate = '{0}',
                @ToDate   = '{1}'";

            sql = string.Format(sql, fromDate.ToString("yyyy-MM-dd"), toDate.ToString("yyyy-MM-dd"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);
            if (!string.IsNullOrEmpty(error) || dt == null) return null;

            var list = new List<Manage_MonthlyAttendanceTrend>();
            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_MonthlyAttendanceTrend
                {
                    Thang = row["Thang"].ToString(),
                    TiLeChuyenCan = Convert.ToDecimal(row["TiLeChuyenCan"])
                });
            }
            return list;
        }
    }
}
