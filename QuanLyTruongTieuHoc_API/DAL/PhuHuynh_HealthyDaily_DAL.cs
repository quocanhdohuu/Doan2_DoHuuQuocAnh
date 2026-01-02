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
    public class PhuHuynh_HealthyDaily_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_HealthyDaily_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<HealthDaily> GetAllHealthDaily(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM HealthDaily", out error);

            var list = new List<HealthDaily>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new HealthDaily
                {
                    HealthID = (int)row["HealthID"],
                    StudentID = (int)row["StudentID"],                 
                    Date = (DateTime)row["Date"],
                    MealStatus = row["MealStatus"].ToString(),
                    HealthStatus = row["HealthStatus"].ToString(),
                    TeacherNote = row["TeacherNote"].ToString(),
                });
            }

            return list;
        }

        public HealthDaily GetHealthDailyById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM HealthDaily WHERE HealthID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new HealthDaily
            {
                HealthID = (int)row["HealthID"],
                StudentID = (int)row["StudentID"],
                Date = (DateTime)row["Date"],
                MealStatus = row["MealStatus"].ToString(),
                HealthStatus = row["HealthStatus"].ToString(),
                TeacherNote = row["TeacherNote"].ToString(),
            };
        }
    }
}
