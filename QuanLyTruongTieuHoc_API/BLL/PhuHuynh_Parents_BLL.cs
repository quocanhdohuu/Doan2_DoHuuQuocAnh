using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Parents_BLL
    {
        private readonly PhuHuynh_Parents_DAL _dal;

        public PhuHuynh_Parents_BLL(PhuHuynh_Parents_DAL dal)
        {
            _dal = dal;
        }

        public List<Parents> GetAll(out string error)
        {
            return _dal.GetAllParents(out error);
        }

        public Parents GetById(int id, out string error)
        {
            return _dal.GetParentsById(id, out error);
        }
        public bool UpdateParents(int id, Parents parents, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid parents id";
                return false;
            }

            if (string.IsNullOrWhiteSpace(parents.FullName))
            {
                error = "Username is required";
                return false;
            }

            parents.ParentID = id;

            return _dal.UpdateParents(parents, out error);
        }
    }
}
