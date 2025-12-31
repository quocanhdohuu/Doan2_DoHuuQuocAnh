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
    public class Teacher_ParentsBLL
    {
        private readonly Teacher_ParentsDAL _dal;

        public Teacher_ParentsBLL(Teacher_ParentsDAL dal)
        {
            _dal = dal;
        }
        public List<Parents> GetAll(out string error)
        {
            return _dal.GetAllpr(out error);
        }
        public Parents GetById(int id, out string error)
        {
            return _dal.GetprById(id, out error);
        }
    }
}
