using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace DAL
{
    public class Admin_SchedulesDAL
    {
        private readonly DatabaseHelper _db;

        public Admin_SchedulesDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public bool AddSchedule(Manage_Schedule model, out string error)
        {
            string sql = @"
                EXEC sp_AddSchedule
                @ClassName = N'{0}',
                @DayOfWeek = {1},
                @Period = {2},
                @SubjectName = N'{3}',
                @TeacherName = N'{4}',
                @Room = N'{5}'";

            sql = string.Format(
                sql,
                model.ClassName.Replace("'", "''"),
                model.DayOfWeek,
                model.Period,
                model.SubjectName.Replace("'", "''"),
                model.TeacherName.Replace("'", "''"),
                model.Room.Replace("'", "''")
            );

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool UpdateSchedule(Manage_Schedule model, out string error)
        {
            string sql = @"
                EXEC sp_UpdateSchedule
                @ScheduleID = {0},
                @ClassName = N'{1}',
                @DayOfWeek = {2},
                @Period = {3},
                @SubjectName = N'{4}',
                @TeacherName = N'{5}',
                @Room = N'{6}'";

            sql = string.Format(
                sql,
                model.ScheduleID,
                model.ClassName.Replace("'", "''"),
                model.DayOfWeek,
                model.Period,
                model.SubjectName.Replace("'", "''"),
                model.TeacherName.Replace("'", "''"),
                model.Room.Replace("'", "''")
            );

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public bool DeleteSchedule(int scheduleID, out string error)
        {
            string sql = $@"
                EXEC sp_DeleteSchedule
                @ScheduleID = {scheduleID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public int GetTotalScheduleByClassName(string className, out string error)
        {
            error = "";

            string sql = @"
                EXEC sp_GetTotalScheduleByClassName
                @ClassName = N'{0}'";

            sql = string.Format(sql, className.Replace("'", "''"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return 0;

            return Convert.ToInt32(dt.Rows[0]["TotalSchedule"]);
        }
        public List<Manage_Schedule> GetSchedulesByClassName(string className, out string error)
        {
            error = "";
            var list = new List<Manage_Schedule>();

            string sql = @"
                EXEC sp_GetSchedulesByClassName
                @ClassName = N'{0}'";

            sql = string.Format(sql, className.Replace("'", "''"));

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Manage_Schedule
                {
                    ScheduleID = Convert.ToInt32(row["ScheduleID"]),
                    ClassName = row["ClassName"].ToString(),
                    DayOfWeek = Convert.ToInt32(row["DayOfWeek"]),
                    Period = Convert.ToInt32(row["Period"]),
                    SubjectName = row["SubjectName"].ToString(),
                    TeacherName = row["TeacherName"].ToString(),
                    Room = row["Room"].ToString()
                });
            }

            return list;
        }

    }
}
