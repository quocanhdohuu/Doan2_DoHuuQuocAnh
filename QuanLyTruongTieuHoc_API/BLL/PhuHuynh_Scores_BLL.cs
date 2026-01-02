using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Scores_BLL
    {
        private readonly PhuHuynh_Scores_DAL _dal;

        public PhuHuynh_Scores_BLL(PhuHuynh_Scores_DAL dal)
        {
            _dal = dal;
        }

        public List<Scores> GetAll(out string error)
        {
            return _dal.GetAllScores(out error);
        }

        public Scores GetById(int id, out string error)
        {
            return _dal.GetScoresById(id, out error);
        }
    }
}
