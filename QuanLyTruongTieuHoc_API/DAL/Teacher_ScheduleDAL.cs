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
    public class Teacher_ScheduleDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_ScheduleDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Schedule> GetAllSD(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Schedule", out error);

            var list = new List<Schedule>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Schedule
                {
                    ScheduleID = (int)row["ScheduleID"],
                    ClassID = (int)row["ClassID"],
                    SubjectID = (int)row["SubjectID"],
                    TeacherID = (int)row["TeacherID"],
                    DayOfWeek = (int)row["DayOfWeek"],
                    Period = (int)row["Period"],
                    Room = row["Room"].ToString()

                });
            }

            return list;
        }
        public Classes GetSDById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Classes WHERE ClassID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Classes
            {
                ClassName = row["ClassName"].ToString()
                
            };
        }
    }
}
