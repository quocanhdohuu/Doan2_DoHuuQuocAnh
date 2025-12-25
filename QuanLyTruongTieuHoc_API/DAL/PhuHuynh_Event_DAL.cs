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
    public class PhuHuynh_Event_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Event_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Events> GetAllEvents(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Events", out error);

            var list = new List<Events>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Events
                {
                    EventID = (int)row["EventID"],
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString(),
                    EventDate = (DateTime)row["EventDate"],
                    EventTime = (TimeSpan)row["EventTime"],
                    EventType = row["EventType"].ToString(),
                });
            }

            return list;
        }

        public Events GetEventsById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Events WHERE EventID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Events
            {
                EventID = (int)row["EventID"],
                Title = row["Title"].ToString(),
                Description = row["Description"].ToString(),
                EventDate = (DateTime)row["EventDate"],
                EventTime = (TimeSpan)row["EventTime"],
                EventType = row["EventType"].ToString(),
            };
        }
    }
}
