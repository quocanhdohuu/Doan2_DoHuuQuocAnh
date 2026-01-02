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
    public class PhuHuynh_Schedules_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Schedules_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Schedule> GetAllSchedules(out string error)
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
                    DayOfWeek = (int)row["DayOfWeek"],
                    Period = (int)row["Period"],
                    SubjectID = (int)row["SubjectID"],
                    TeacherID = (int)row["TeacherID"],
                    Room = row["Room"].ToString(),
                });
            }

            return list;
        }

        public Schedule GetSchedulesById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Schedule WHERE ScheduleID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Schedule
            {
                ScheduleID = (int)row["ScheduleID"],
                ClassID = (int)row["ClassID"],
                DayOfWeek = (int)row["DayOfWeek"],
                Period = (int)row["Period"],
                SubjectID = (int)row["SubjectID"],
                TeacherID = (int)row["TeacherID"],
                Room = row["Room"].ToString(),
            };
        }
    }
}
