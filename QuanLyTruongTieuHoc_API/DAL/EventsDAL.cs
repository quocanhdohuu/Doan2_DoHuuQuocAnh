using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;

namespace DAL
{
    public class EventsDAL
    {
        private readonly DatabaseHelper _db;

        public EventsDAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Events> GetAllEvents(out string error)
        {
            error = "";
            var list = new List<Events>();

            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Events", out error);

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                var ev = new Events();

                ev.EventID = Convert.ToInt32(row["EventID"]);
                ev.Title = row["Title"]?.ToString();
                ev.Description = row["Description"] == DBNull.Value ? null : row["Description"].ToString();
                ev.EventDate = Convert.ToDateTime(row["EventDate"]);

                ev.EventTime = row["EventTime"] == DBNull.Value
                                    ? (TimeSpan?)null
                                    : (TimeSpan)row["EventTime"];

                ev.EventType = row["EventType"]?.ToString();

                list.Add(ev);
            }

            return list;
        }


        public Events GetEventById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable(
                $"SELECT * FROM Events WHERE EventID = {id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            var ev = new Events();

            ev.EventID = Convert.ToInt32(row["EventID"]);
            ev.Title = row["Title"]?.ToString();

            ev.Description = row["Description"] == DBNull.Value ? null : row["Description"].ToString();

            ev.EventDate = Convert.ToDateTime(row["EventDate"]);

            ev.EventTime = row["EventTime"] == DBNull.Value
                                ? (TimeSpan?)null
                                : (TimeSpan)row["EventTime"];

            ev.EventType = row["EventType"]?.ToString();

            return ev;
        }


        public bool InsertEvent(Events ev, out string error)
        {
            string eventTimeSql = ev.EventTime.HasValue
                ? $"'{ev.EventTime.Value:hh\\:mm\\:ss}'"
                : "NULL";

            string sql =
                "INSERT INTO Events (Title, Description, EventDate, EventTime, EventType) VALUES (" +
                $"N'{ev.Title.Replace("'", "''")}', " +
                $"N'{ev.Description?.Replace("'", "''")}', " +
                $"'{ev.EventDate:yyyy-MM-dd}', " +
                $"{eventTimeSql}, " +
                $"N'{ev.EventType.Replace("'", "''")}'" +
                ")";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }


        public bool UpdateEvent(Events ev, out string error)
        {
            if (ev.EventID <= 0)
            {
                error = "Invalid EventID";
                return false;
            }

            string eventTimeSql = ev.EventTime.HasValue
                ? $"'{ev.EventTime.Value:hh\\:mm\\:ss}'"
                : "NULL";

            string sql =
                "UPDATE Events SET " +
                $"Title = N'{ev.Title.Replace("'", "''")}', " +
                $"Description = N'{ev.Description?.Replace("'", "''")}', " +
                $"EventDate = '{ev.EventDate:yyyy-MM-dd}', " +
                $"EventTime = {eventTimeSql}, " +
                $"EventType = N'{ev.EventType.Replace("'", "''")}' " +
                $"WHERE EventID = {ev.EventID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }

        public bool DeleteEvent(int id, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid EventID";
                return false;
            }

            string sql = $"DELETE FROM Events WHERE EventID = {id}";
            error = _db.ExecuteNoneQuery(sql);

            return string.IsNullOrEmpty(error);
        }
    }
}