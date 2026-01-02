using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Schedules_BLL
    {
        private readonly PhuHuynh_Schedules_DAL _dal;

        public PhuHuynh_Schedules_BLL(PhuHuynh_Schedules_DAL dal)
        {
            _dal = dal;
        }

        public List<Schedule> GetAll(out string error)
        {
            return _dal.GetAllSchedules(out error);
        }

        public Schedule GetById(int id, out string error)
        {
            return _dal.GetSchedulesById(id, out error);
        }
    }
}
