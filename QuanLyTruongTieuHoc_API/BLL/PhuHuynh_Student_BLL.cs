using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Student_BLL
    {
            private readonly PhuHuynh_Student_DAL _dal;

            public PhuHuynh_Student_BLL(PhuHuynh_Student_DAL dal)
            {
                _dal = dal;
            }

            public List<Students> GetAll(out string error)
            {
                return _dal.GetAllStudents(out error);
            }

            public Students GetById(int id, out string error)
            {
                return _dal.GetStudentsById(id, out error);
            }
            public bool UpdateStudent(int id, Students students, out string error)
            {
                if (id <= 0)
                {
                    error = "Invalid student id";
                    return false;
                }

                if (string.IsNullOrWhiteSpace(students.FullName))
                {
                    error = "Username is required";
                    return false;
                }

                students.StudentID = id;

                return _dal.UpdateStudents(students, out error);
            }
    }
}
