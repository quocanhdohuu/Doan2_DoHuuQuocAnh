using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Event_BLL
    {
        private readonly PhuHuynh_Event_DAL _dal;

        public PhuHuynh_Event_BLL(PhuHuynh_Event_DAL dal)
        {
            _dal = dal;
        }

        public List<Events> GetAll(out string error)
        {
            return _dal.GetAllEvents(out error);
        }

        public Events GetById(int id, out string error)
        {
            return _dal.GetEventsById(id, out error);
        }
    }
}
