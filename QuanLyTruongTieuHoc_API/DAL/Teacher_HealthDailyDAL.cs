using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Formats.Asn1.AsnWriter;
namespace DAL
{
    public class Teacher_HealthDailyDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_HealthDailyDAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<HealthDaily> GetAllHD(out string error)
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
                    MealStatus = row["MealStatus"].ToString(),
                    Date = (DateTime)row["Date"],
                    HealthStatus = row["HealthStatus"].ToString(),
                    TeacherNote = row["TeacherNote"].ToString()

                });
            }

            return list;
        }
        public bool InsertHD(HealthDaily HT, out string error)
        {
            string sql =
                 $"INSERT INTO HealthDaily (StudentID, MealStatus, Date, HealthStatus, TeacherNote) VALUES (" +
                    $"{HT.StudentID}, " +
                    $"N'{HT.MealStatus.Replace("'", "''")}', " +
                    $"'{HT.Date:yyyy-MM-dd}', " +
                    $"N'{HT.HealthStatus.Replace("'", "''")}', " +
                    $"N'{HT.TeacherNote.Replace("'", "''")}')";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool UpdateHD(HealthDaily HT, out string error)
        {
            if (HT.HealthID <= 0)
            {
                error = "Invalid HTID";
                return false;
            }

            string sql =
                    $"UPDATE HealthDaily SET " +
                    $"StudentID = {HT.StudentID}, " +
                    $"MealStatus = N'{HT.MealStatus.Replace("'", "''")}', " +
                    $"Date = '{HT.Date:yyyy-MM-dd}', " +
                    $"HealthStatus = N'{HT.HealthStatus.Replace("'", "''")}', " +
                    $"TeacherNote = N'{HT.TeacherNote.Replace("'", "''")}' " +
                $"WHERE HealthID = {HT.HealthID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool DeleteHD(int ATenId, out string error)
        {
            if (ATenId <= 0)
            {
                error = "Invalid HTID";
                return false;
            }

            string sql =
                $"DELETE FROM HealthDaily WHERE HealthID = {ATenId}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
