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
    public class PhuHuynh_Messager_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Messager_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Messages> GetAllMessages(out string error)
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
                    Content = row["Content"].ToString(),
                    SentTime = (DateTime)row["SentTime"],
                    IsRead = (bool)row["IsRead"]
                });
            }

            return list;
        }

        public Messages GetMessagesById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Messages WHERE MessagesID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Messages
            {
                MessageID = (int)row["MessageID"],
                SenderID = (int)row["SenderID"],
                ReceiverID = (int)row["ReceiverID"],
                Content = row["Content"].ToString(),
                SentTime = (DateTime)row["SentTime"],
                IsRead = (bool)row["IsRead"]
            };
        }

        public bool InsertMessages(Messages messages, out string error)
        {
            string sql =
                $"INSERT INTO Messages (MessageID, SenderID, ReceiverID, Content, SentTime, IsRead) " +
                $"VALUES ('{messages.MessageID}', '{messages.SenderID}', '{messages.ReceiverID}', '{messages.Content}', '{messages.SentTime}',{(messages.IsRead ? 1 : 0)})";

            error = _db.ExecuteNoneQuery(sql);

            return string.IsNullOrEmpty(error);
        }
        public bool UpdateMessages(Messages messages, out string error)
        {
            if (messages.MessageID <= 0)
            {
                error = "Invalid MessageID";
                return false;
            }

            string sql =
                $"UPDATE Messages SET " +
                $"SenderID = '{messages.SenderID}', " +
                $"ReceiverID = '{messages.ReceiverID}', " +
                $"Content = '{messages.Content.Replace("'", "''")}', " +
                $"SentTime = '{messages.SentTime}', " +
                $"IsRead = {(messages.IsRead ? 1 : 0)} " +
                $"WHERE MessageID = {messages.MessageID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
