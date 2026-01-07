using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace BLL
{
    public class Teacher_TeachersBLL
    {
        private readonly Teacher_TeachersDAL _dal;

        public Teacher_TeachersBLL(Teacher_TeachersDAL dal)
        {
            _dal = dal;
        }

        public List<Teachers> GetAll(out string error)
        {
            return _dal.GetAllTea(out error);
        }
        public Teachers GetById(int id, out string error)
        {
            return _dal.GetTeaById(id, out error);
        }
        public bool UpdateStu(Teachers tea, out string error)
        {

            return _dal.UpdateTea(tea, out error);
        }
    }
}
