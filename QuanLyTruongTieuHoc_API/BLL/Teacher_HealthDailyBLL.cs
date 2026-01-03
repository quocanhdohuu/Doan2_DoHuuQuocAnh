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
    public class Teacher_HealthDailyBLL
    {
        private readonly Teacher_HealthDailyDAL _dal;

        public Teacher_HealthDailyBLL(Teacher_HealthDailyDAL dal)
        {
            _dal = dal;
        }
        public List<HealthDaily> GetAll(out string error)
        {
            return _dal.GetAllHD(out error);
        }
        public bool UpdateHD(int id, HealthDaily HD, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid HD id";
                return false;
            }


            HD.HealthID = id;

            return _dal.UpdateHD(HD, out error);
        }
        public bool DeleteHD(int id, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid HD ID";
                return false;
            }

            return _dal.DeleteHD(id, out error);
        }
        public bool CreateHD(HealthDaily HD, out string error)
        {
            return _dal.InsertHD(HD, out error);
        }
    }
}
