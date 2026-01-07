using DAL.Helper;
using Models;
using System.Collections.Generic;
using System.Data;

namespace DAL
{
    public class UsersDAL
    {
        private readonly DatabaseHelper _db;

        public UsersDAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Users> GetAllUsers(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Users", out error);

            var list = new List<Users>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Users
                {
                    UserID = (int)row["UserID"],
                    Username = row["Username"].ToString(),
                    Password = row["Password"].ToString(),
                    Role = row["Role"].ToString(),
                    Status = (bool)row["Status"]
                });
            }

            return list;
        }

        public Users GetUserById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Users WHERE UserID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Users
            {
                UserID = (int)row["UserID"],
                Username = row["Username"].ToString(),
                Password = row["Password"].ToString(),
                Role = row["Role"].ToString(),
                Status = (bool)row["Status"]
            };
        }

        public bool InsertUser(Users user, out string error)
        {
            string sql =
                $"INSERT INTO Users (Username, Password, Role, Status) " +
                $"VALUES ('{user.Username}', '{user.Password}', '{user.Role}', {(user.Status ? 1 : 0)})";

            error = _db.ExecuteNoneQuery(sql);

            return string.IsNullOrEmpty(error);
        }
        public bool UpdatePassword(int userId, string newPassword, out string error)
        {
            string sql = $@"
        UPDATE Users
        SET Password = '{newPassword.Replace("'", "''")}'
        WHERE UserID = {userId}
        ";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}