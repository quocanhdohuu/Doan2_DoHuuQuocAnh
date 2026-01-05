using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Admin_TeachersBLL
    {
        private readonly Admin_TeachersDAL _dal;

        public Admin_TeachersBLL(Admin_TeachersDAL dal)
        {
            _dal = dal;
        }
        public bool AddTeacher(Manage_Teacher model, out string error)
        {
            error = "";

            if (model.ClassNames == null || model.ClassNames.Count == 0)
            {
                error = "Phải chọn ít nhất một lớp dạy";
                return false;
            }

            return _dal.AddTeacher(model, out error);
        }
        public bool UpdateTeacher(Manage_Teacher model, out string error)
        {
            if (model.TeacherID <= 0)
            {
                error = "TeacherID không hợp lệ";
                return false;
            }

            return _dal.UpdateTeacher(model, out error);
        }

        public bool DeleteTeacher(int teacherID, out string error)
        {
            if (teacherID <= 0)
            {
                error = "TeacherID không hợp lệ";
                return false;
            }

            return _dal.DeleteTeacher(teacherID, out error);
        }
        public List<Manage_Teacher> GetAllTeachers(out string error)
        {
            return _dal.GetAllTeachers(out error);
        }
        public Manage_Teacher GetTeacherByID(int teacherID, out string error)
        {
            return _dal.GetTeacherByID(teacherID, out error);
        }
        public int GetTotalTeachers(out string error)
        {
            return _dal.GetTotalTeachers(out error);
        }
    }
}
