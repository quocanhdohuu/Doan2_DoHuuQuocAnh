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
        public Manage_Attendence GetTodayAttendanceSummary(out string error)
        {
            return _dal.GetTodayAttendanceSummary(out error);
        }
        public Manage_AttendanceByClass GetAttendanceByClassName(string className, out string error)
        {
            if (string.IsNullOrWhiteSpace(className))
            {
                error = "Tên lớp không hợp lệ";
                return null;
            }

            return _dal.GetAttendanceByClassName(className, out error);
        }
    }
}
