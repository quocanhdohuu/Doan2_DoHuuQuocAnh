using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace DAL
{
    public class Admin_SubjectsDAL
    {
        private readonly DatabaseHelper _db;

        public Admin_SubjectsDAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Subjects> GetAllName(out string error)
        {
            error = "";
            var list = new List<Subjects>();

            var dt = _db.ExecuteQueryToDataTable(
                "SELECT SubjectID, SubjectName FROM Subjects", out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow r in dt.Rows)
            {
                list.Add(new Subjects
                {
                    SubjectID = Convert.ToInt32(r["SubjectID"]),
                    SubjectName = r["SubjectName"].ToString()
                });
            }

            return list;
        }

        public Subjects GetNameByID(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable(
                $"SELECT SubjectID, SubjectName FROM Subjects WHERE SubjectID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt.Rows.Count == 0)
                return null;

            return new Subjects
            {
                SubjectID = Convert.ToInt32(dt.Rows[0]["SubjectID"]),
                SubjectName = dt.Rows[0]["SubjectName"].ToString()
            };
        }

        public bool Insert(Subjects s, out string error)
        {
            string sql = $@"
                INSERT INTO Subjects (SubjectName, Description)
                VALUES (N'{s.SubjectName}', N'{s.Description}')";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }

        public bool Update(Subjects s, out string error)
        {
            string sql = $@"
                UPDATE Subjects SET
                SubjectName = N'{s.SubjectName}',
                Description = N'{s.Description}'
                WHERE SubjectID = {s.SubjectID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }

        public bool Delete(int id, out string error)
        {
            error = _db.ExecuteNoneQuery(
                $"DELETE FROM Subjects WHERE SubjectID={id}");
            return string.IsNullOrEmpty(error);
        }
    }
}
