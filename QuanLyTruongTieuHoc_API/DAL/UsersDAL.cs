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
        public string GetRoleById(int id, out string error)
        {
            error = "";

            var dt = _db.ExecuteQueryToDataTable(
                $"SELECT Role FROM Users WHERE UserID = {id}",
                out error
            );

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            return dt.Rows[0]["Role"].ToString();
        }

        public bool InsertUser(Users user, out string error)
        {
            string sql =
                $"INSERT INTO Users (Username, Password, Role, Status) " +
                $"VALUES ('{user.Username}', '{user.Password}', '{user.Role}', {(user.Status ? 1 : 0)})";

            error = _db.ExecuteNoneQuery(sql);

            return string.IsNullOrEmpty(error);
        }
        public bool UpdateUser(Users user, out string error)
        {
            if (user.UserID <= 0)
            {
                error = "Invalid UserID";
                return false;
            }

            string sql =
                $"UPDATE Users SET " +
                $"Username = '{user.Username.Replace("'", "''")}', " +
                $"Password = '{user.Password.Replace("'", "''")}', " +
                $"Role = '{user.Role.Replace("'", "''")}', " +
                $"Status = {(user.Status ? 1 : 0)} " +
                $"WHERE UserID = {user.UserID}";

            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
        public Users CheckLogin(string username, string password, out string error)
        {
            error = "";

            string sql =
                $"SELECT * FROM Users " +
                $"WHERE Username = '{username.Replace("'", "''")}' " +
                $"AND Password = '{password.Replace("'", "''")}' " +
                $"AND Status = 1";

            var dt = _db.ExecuteQueryToDataTable(sql, out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Users
            {
                UserID = (int)row["UserID"],
                Username = row["Username"].ToString(),
                Role = row["Role"].ToString(),
                Status = (bool)row["Status"]
            };
        }

    }
}