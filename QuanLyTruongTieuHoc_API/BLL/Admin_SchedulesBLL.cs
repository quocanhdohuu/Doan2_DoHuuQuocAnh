using DAL;
using Models;
using System.Collections.Generic;

namespace BLL
{
    public class Admin_SchedulesBLL
    {
        private readonly Admin_SchedulesDAL _dal;

        public Admin_SchedulesBLL(Admin_SchedulesDAL dal)
        {
            _dal = dal;
        }
        public bool AddSchedule(Manage_Schedule model, out string error)
        {
            error = "";

            if (string.IsNullOrWhiteSpace(model.ClassName)
                || string.IsNullOrWhiteSpace(model.SubjectName)
                || string.IsNullOrWhiteSpace(model.TeacherName))
            {
                error = "Dữ liệu không hợp lệ";
                return false;
            }

            return _dal.AddSchedule(model, out error);
        }

        public bool UpdateSchedule(Manage_Schedule model, out string error)
        {
            if (model.ScheduleID <= 0)
            {
                error = "ScheduleID không hợp lệ";
                return false;
            }

            return _dal.UpdateSchedule(model, out error);
        }
        public bool DeleteSchedule(int scheduleID, out string error)
        {
            if (scheduleID <= 0)
            {
                error = "ScheduleID không hợp lệ";
                return false;
            }

            return _dal.DeleteSchedule(scheduleID, out error);
        }
        public int GetTotalScheduleByClassName(string className, out string error)
        {
            if (string.IsNullOrWhiteSpace(className))
            {
                error = "Tên lớp không hợp lệ";
                return 0;
            }

            return _dal.GetTotalScheduleByClassName(className, out error);
        }
        public List<Manage_Schedule> GetSchedulesByClassName(string className, out string error)
        {
            if (string.IsNullOrWhiteSpace(className))
            {
                error = "Tên lớp không hợp lệ";
                return new List<Manage_Schedule>();
            }

            return _dal.GetSchedulesByClassName(className, out error);
        }

    }
}
