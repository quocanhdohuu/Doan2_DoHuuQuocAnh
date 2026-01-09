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
    public class Teacher_MessagesBLL
    {
        private readonly Teacher_MessagesDAL _dal;

        public Teacher_MessagesBLL(Teacher_MessagesDAL dal)
        {
            _dal = dal;
        }
        public List<Messages> GetRe(int id,out string error)
        {
            return _dal.GetbyRevi(id,out error);
        }
        public List<Messages> GetSen(int id, out string error)
        {
            return _dal.GetprBysen(id, out error);
        }
        public bool CreateMse(Messages AT, out string error)
        {
            return _dal.InsertMse(AT, out error);
        }
    }
}
