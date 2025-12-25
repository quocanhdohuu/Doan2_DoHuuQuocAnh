using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Admin_ClassesBLL
    {
        private readonly Admin_ClassesDAL _dal;

        public Admin_ClassesBLL(Admin_ClassesDAL dal)
        {
            _dal = dal;
        }

        public bool CreateClass(Classes model, out string error)
        {
            if (string.IsNullOrWhiteSpace(model.ClassName))
            {
                error = "Tên lớp không được để trống";
                return false;
            }

            if (string.IsNullOrWhiteSpace(model.Grade))
            {
                error = "Khối không được để trống";
                return false;
            }

            if (model.NumberOfStudents < 0)
            {
                error = "Sĩ số không hợp lệ";
                return false;
            }

            return _dal.AddClass(model, out error);
        }

        public bool EditClass(Classes model, out string error)
        {
            if (model.ClassID <= 0)
            {
                error = "ClassID không hợp lệ";
                return false;
            }

            if (string.IsNullOrWhiteSpace(model.ClassName))
            {
                error = "Tên lớp không được để trống";
                return false;
            }

            if (string.IsNullOrWhiteSpace(model.Grade))
            {
                error = "Khối không được để trống";
                return false;
            }

            return _dal.UpdateClass(model, out error);
        }
        public List<Classes> GetAllClasses(out string error)
        {
            return _dal.GetAllClasses(out error);
        }
        public Classes GetClassByID(int classID, out string error)
        {
            if (classID <= 0)
            {
                error = "ClassID không hợp lệ";
                return null;
            }

            return _dal.GetClassByID(classID, out error);
        }
        public int GetTotalClasses(out string error)
        {
            return _dal.GetTotalClasses(out error);
        }

    }

}
