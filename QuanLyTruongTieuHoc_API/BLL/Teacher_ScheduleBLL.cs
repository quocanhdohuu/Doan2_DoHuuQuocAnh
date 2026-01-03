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
    public class Teacher_ScheduleBLL
    {
        private readonly Teacher_ScheduleDAL _dal;

        public Teacher_ScheduleBLL(Teacher_ScheduleDAL dal)
        {
            _dal = dal;
        }
        public List<Schedule> GetAll(out string error)
        {
            return _dal.GetAllSD(out error);
        }
        public Schedule GetById(int id, out string error)
        {
            return _dal.GetSDById(id, out error);
        }
    }
}
