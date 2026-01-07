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
    public class Teacher_MessagesDAL
    {
        private readonly DatabaseHelper _db;

        public Teacher_MessagesDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Messages> GetAllMse(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Messages", out error);

            var list = new List<Messages>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Messages
                {
                    MessageID = (int)row["MessageID"],
                    SenderID = (int)row["SenderID"],
                    ReceiverID = (int)row["ReceiverID"],
                    SentTime = (DateTime)row["SentTime"],
                    Content = row["Content"].ToString(),
                    IsRead = (bool)row["IsRead"]

                });
            }

            return list;
        }
   
        public bool InsertMse(Messages AT, out string error)
        {
            string sql =
                $"INSERT INTO Messages (SenderID, ReceiverID, SentTime, Content,IsRead) VALUES (" +
                    $"{AT.SenderID}, " +
                    $"{AT.ReceiverID}, " +
                    $"'{AT.SentTime:yyyy-MM-dd}', " +
                    $"N'{AT.Content.Replace("'", "''")}', " +
                    $"'{AT.IsRead}')";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
