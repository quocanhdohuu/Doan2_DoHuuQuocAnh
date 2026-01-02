using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Attendance_BLL
    {
        private readonly PhuHuynh_Attendance_DAL _dal;

        public PhuHuynh_Attendance_BLL(PhuHuynh_Attendance_DAL dal)
        {
            _dal = dal;
        }

        public List<Attendance> GetAll(out string error)
        {
            return _dal.GetAllAttendance(out error);
        }

        public Attendance GetById(int id, out string error)
        {
            return _dal.GetAttendanceById(id, out error);
        }
    }
}
