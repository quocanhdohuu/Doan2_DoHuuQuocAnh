using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Teacher_TeachersClassBLL
    {
        private readonly Teacher_TeachersClassDAL _dal;

        public Teacher_TeachersClassBLL(Teacher_TeachersClassDAL dal)
        {
            _dal = dal;
        }

        public List<TeacherClass> GetAll(out string error)
        {
            return _dal.GetAllTC(out error);
        }
        public List<Classes>GetClass(int id, out string error)
        {
            return _dal.GetClassNameByTeacherAndClass(id, out error);
        }
    }
}
