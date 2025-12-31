using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Formats.Asn1.AsnWriter;

namespace BLL
{
    public class Teacher_AttendanceBLL
    {
        private readonly Teacher_AttendanceDAL _dal;

        public Teacher_AttendanceBLL(Teacher_AttendanceDAL dal)
        {
            _dal = dal;
        }
        public List<Attendance> GetAll(out string error)
        {
            return _dal.GetAllATen(out error);
        }
        public Attendance GetById(int id, out string error)
        {
            return _dal.GetATenById(id, out error);
        }
        public bool UpdateAten(int id, Attendance AT, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid aten id";
                return false;
            }


            AT.AttendanceID = id;

            return _dal.UpdateAten(AT, out error);
        }
        public bool DeleteAT(int id, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid AT ID";
                return false;
            }

            return _dal.DeleteAT(id, out error);
        }
        public bool CreateAT(Attendance AT, out string error)
        {
            return _dal.InsertATen(AT, out error);
        }
    }
}
