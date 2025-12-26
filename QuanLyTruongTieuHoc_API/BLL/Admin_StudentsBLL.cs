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

        public bool CreateStudent(Manage_Student student, out string error)
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
        public bool UpdateStudent(Manage_Student student, out string error)
        {
            if (student.StudentID <= 0)
            {
                error = "Invalid StudentID";
                return false;
            }

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

            return _dal.UpdateStudent(student, out error);
        }
        public bool DeleteStudent(int studentId, out string error)
        {
            if (studentId <= 0)
            {
                error = "Invalid StudentID";
                return false;
            }

            return _dal.DeleteStudent(studentId, out error);
        }
        public List<Manage_Student> GetAll(out string error)
        {
            return _dal.GetAllStudents(out error);
        }
        public List<Manage_Student> GetByClassName(string className, out string error)
        {
            if (string.IsNullOrWhiteSpace(className))
            {
                error = "ClassName is required";
                return new List<Manage_Student>();
            }

            return _dal.GetStudentsByClassName(className, out error);
        }
        public List<Manage_Student> SearchByStudentOrParent(string keyword, out string error)
        {
            if (string.IsNullOrWhiteSpace(keyword))
            {
                error = "Keyword is required";
                return new List<Manage_Student>();
            }

            return _dal.GetStudentsByNameOrParent(keyword, out error);
        }
        public Manage_Student GetStudentByID(int studentID, out string error)
        {
            if (studentID <= 0)
            {
                error = "StudentID không hợp lệ";
                return null;
            }

            return _dal.GetStudentsByID(studentID, out error);
        }
        public int GetTotalStudents(out string error)
        {
            return _dal.GetTotalStudents(out error);
        }
    }

}
