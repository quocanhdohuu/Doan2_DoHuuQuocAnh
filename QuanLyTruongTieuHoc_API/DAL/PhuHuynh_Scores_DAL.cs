using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class PhuHuynh_Scores_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Scores_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Scores> GetAllScores(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Scores", out error);

            var list = new List<Scores>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Scores
                {
                    ScoreID = (int)row["ScoreID"],
                    StudentID = (int)row["StudentID"],
                    Subject = row["Subject"].ToString(),
                    ScoreValue = (Double)row["ScoreValue"],
                    Term = row["Term"].ToString(),
                    Date = (DateTime)row["Date"],
                    TeacherID = (int)row["TeacherID"],
                });
            }

            return list;
        }

        public Scores GetScoresById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Scores WHERE ScoreID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Scores
            {
                ScoreID = (int)row["ScoreID"],
                StudentID = (int)row["StudentID"],
                Subject = row["Subject"].ToString(),
                ScoreValue = (Double)row["ScoreValue"],
                Term = row["Term"].ToString(),
                Date = (DateTime)row["Date"],
                TeacherID = (int)row["TeacherID"],
            };
        }
    }
}
