using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_HealthyDaily_BLL
    {
        private readonly PhuHuynh_HealthyDaily_DAL _dal;

        public PhuHuynh_HealthyDaily_BLL(PhuHuynh_HealthyDaily_DAL dal)
        {
            _dal = dal;
        }

        public List<HealthDaily> GetAll(out string error)
        {
            return _dal.GetAllHealthDaily(out error);
        }

        public HealthDaily GetById(int id, out string error)
        {
            return _dal.GetHealthDailyById(id, out error);
        }
    }
}
