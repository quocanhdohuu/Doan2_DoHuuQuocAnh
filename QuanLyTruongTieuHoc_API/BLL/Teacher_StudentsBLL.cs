using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Teacher_StudentsBLL
    {
        private readonly Teacher_StudentsDAL _dal;

        public Teacher_StudentsBLL(Teacher_StudentsDAL dal)
        {
            _dal = dal;
        }

        public List<Students> GetAll(int id,out string error)
        {
            return _dal.GetAllStu(id,out error);
        }
        public Students GetById(int id, out string error)
        {
            return _dal.GetStuById(id, out error);
        }
        public bool UpdateStu(int id, Students Stu, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid Student id";
                return false;
            }

            if (string.IsNullOrWhiteSpace(Stu.FullName))
            {
                error = "Studen is required";
                return false;
            }

            Stu.StudentID = id;

            return _dal.UpdateStu(Stu, out error);
        }
    }
}
