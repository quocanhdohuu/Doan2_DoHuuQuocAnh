using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Admin_StudentsBLL
    {
        private readonly Admin_StudentsDAL _dal;

        public Admin_StudentsBLL(Admin_StudentsDAL dal)
        {
            _dal = dal;
        }

        public bool CreateStudent(StudentCreate student, out string error)
        {
            if (string.IsNullOrWhiteSpace(student.StudentName))
            {
                error = "Student name is required";
                return false;
            }

            if (string.IsNullOrWhiteSpace(student.ClassName))
            {
                error = "Class name is required";
                return false;
            }

            if (string.IsNullOrWhiteSpace(student.ParentPhone))
            {
                error = "Parent phone is required";
                return false;
            }

            return _dal.InsertStudent(student, out error);
        }

       
    }

}
