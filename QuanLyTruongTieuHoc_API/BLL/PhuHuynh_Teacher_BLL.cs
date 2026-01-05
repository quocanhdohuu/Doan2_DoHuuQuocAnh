using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Teacher_BLL
    {
        private readonly PhuHuynh_Teacher_DAL _dal;

        public PhuHuynh_Teacher_BLL(PhuHuynh_Teacher_DAL dal)
        {
            _dal = dal;
        }

        public List<Teachers> GetAll(out string error)
        {
            return _dal.GetAllTeacher(out error);
        }

        public Teachers GetById(int id, out string error)
        {
            return _dal.GetTeacherById(id, out error);
        }
    }
}
