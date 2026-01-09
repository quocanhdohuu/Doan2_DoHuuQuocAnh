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
    public class Teacher_ScoreBLL
    {
        private readonly Teacher_ScoreDAL _dal;

        public Teacher_ScoreBLL(Teacher_ScoreDAL dal)
        {
            _dal = dal;
        }

        public List<Scores> GetAll(out string error)
        {
            return _dal.GetAllScore(out error);
        }
        public Scores GetById(int stuid, int id,string term, out string error)
        {
            return _dal.GetScoreById(stuid,id,term, out error);
        }
        public bool UpdateScore(int id, Scores score, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid Score id";
                return false;
            }

            if (score.Score < 0 || score.Score > 10)
            {
                error = "Score must be between 0 and 10";
                return false;
            }

            score.ScoreID = id;

            return _dal.UpdateScore(score, out error);
        }
        public bool DeleteScore(int id, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid Score ID";
                return false;
            }

            return _dal.DeleteScore(id, out error);
        }
        public bool CreateScore(Scores score, out string error)
        {
            if (score.Score < 0 || score.Score > 10)
            {
                error = "Score must be between 0 and 10";
                return false;
            }

            return _dal.InsertScore(score, out error);
        }
    }
}
