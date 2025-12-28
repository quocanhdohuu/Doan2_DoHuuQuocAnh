using DAL;
using Models;
using System.Collections.Generic;

namespace BLL
{
    public class Admin_AttendenceBLL
    {
        private readonly Admin_AttendenceDAL _dal;

        public Admin_AttendenceBLL(Admin_AttendenceDAL dal)
        {
            _dal = dal;
        }
        public Manage_Attendence GetTodayAttendanceSummary(out string error)
        {
            return _dal.GetTodayAttendanceSummary(out error);
        }

    }
}
