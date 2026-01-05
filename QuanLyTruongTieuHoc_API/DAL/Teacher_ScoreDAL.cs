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
    public class Teacher_ScoreDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_ScoreDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Scores> GetAllScore(out string error)
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
                    Score = (double)row["Score"],
                    Term = row["Term"].ToString(),
                    Date = (DateTime)row["Date"],
                    TeacherID = (int)row["TeacherID"]
                });
            }

            return list;
        }
        public Scores GetScoreById(int id, out string error)
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
                Score = (double)row["Score"],
                Term = row["Term"].ToString(),
                Date = (DateTime)row["Date"],
                TeacherID = (int)row["TeacherID"]
            };
        }
        public bool InsertScore(Scores score, out string error)
        {
            string sql =
            $"INSERT INTO Scores (StudentID, Subject, Score, Term, Date, TeacherID) " +
            $"VALUES ({score.StudentID}, " +
            $"N'{score.Subject.Replace("'", "''")}', " +
            $"{score.Score}, " +
            $"N'{score.Term.Replace("'", "''")}', " +
            $"'{score.Date:yyyy-MM-dd}', " +
            $"{score.TeacherID})";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool UpdateScore(Scores score, out string error)
        {
            if (score.ScoreID <= 0)
            {
                error = "Invalid UserID";
                return false;
            }

            string sql =
                $"UPDATE Scores SET " +
                $"StudentID = {score.StudentID}, " +
                $"Subject = '{score.Subject.Replace("'", "''")}', " +
                $"Score = {score.Score}, " +
                $"Term = '{score.Term.Replace("'", "''")}', " +
                $"Date = '{score.Date:yyyy-MM-dd}', " +
                $"TeacherID = {score.TeacherID} " +
                $"WHERE ScoreID = {score.ScoreID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool DeleteScore(int scoreId, out string error)
        {
            if (scoreId <= 0)
            {
                error = "Invalid ScoreID";
                return false;
            }

            string sql =
                $"DELETE FROM Scores WHERE ScoreID = {scoreId}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
