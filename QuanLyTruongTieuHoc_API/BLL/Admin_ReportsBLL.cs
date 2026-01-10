using DAL;
using Models;
using System.Collections.Generic;

namespace BLL
{
    public class Admin_ReportsBLL
    {
        private readonly Admin_ReportsDAL _dal;

        public Admin_ReportsBLL(Admin_ReportsDAL dal)
        {
            _dal = dal;
        }
        private bool ValidateRange(DateTime fromDate, DateTime toDate, out string error)
        {
            error = "";
            if (fromDate == default || toDate == default)
            {
                error = "Vui lòng chọn đầy đủ Từ ngày và Đến ngày";
                return false;
            }
            if (fromDate.Date > toDate.Date)
            {
                error = "Từ ngày phải nhỏ hơn hoặc bằng Đến ngày";
                return false;
            }
            return true;
        }

        public Manage_AcademicSummary GetAcademicSummary(DateTime fromDate, DateTime toDate, out string error)
        {
            if (!ValidateRange(fromDate, toDate, out error)) return null;
            return _dal.GetAcademicSummary(fromDate, toDate, out error);
        }

        public List<Manage_AcademicDistribution> GetAcademicDistribution(DateTime fromDate, DateTime toDate, out string error)
        {
            if (!ValidateRange(fromDate, toDate, out error)) return null;
            return _dal.GetAcademicDistribution(fromDate, toDate, out error);
        }

        public List<Manage_AttendanceByClassRow> GetAttendanceByClass(DateTime fromDate, DateTime toDate, out string error)
        {
            if (!ValidateRange(fromDate, toDate, out error)) return null;
            return _dal.GetAttendanceByClass(fromDate, toDate, out error);
        }

        public List<Manage_MonthlyAttendanceTrend> GetMonthlyTrend(DateTime fromDate, DateTime toDate, out string error)
        {
            if (!ValidateRange(fromDate, toDate, out error)) return null;
            return _dal.GetMonthlyTrend(fromDate, toDate, out error);
        }
    }
}
