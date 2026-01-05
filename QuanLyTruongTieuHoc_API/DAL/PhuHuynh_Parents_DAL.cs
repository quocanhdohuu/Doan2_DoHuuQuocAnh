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
    public class PhuHuynh_Parents_DAL
    {
        private readonly DatabaseHelper _db;

        public PhuHuynh_Parents_DAL(DatabaseHelper db)
        {
            _db = db;
        }

        public List<Parents> GetAllParents(out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable("SELECT * FROM Parents", out error);

            var list = new List<Parents>();

            if (!string.IsNullOrEmpty(error) || dt == null)
                return list;

            foreach (DataRow row in dt.Rows)
            {
                list.Add(new Parents
                {
                    ParentID = (int)row["ParentID"],
                    FullName = row["FullName"].ToString(),
                    Phone = row["Phone"].ToString(),
                    Email = row["Email"].ToString(),
                    Address = row["Address"].ToString(),
                    UserID = (int)row["UserID"]
                });
            }

            return list;
        }

        public Parents GetParentsById(int id, out string error)
        {
            error = "";
            var dt = _db.ExecuteQueryToDataTable($"SELECT * FROM Parents WHERE ParentID={id}", out error);

            if (!string.IsNullOrEmpty(error) || dt == null || dt.Rows.Count == 0)
                return null;

            var row = dt.Rows[0];

            return new Parents
            {
                ParentID = (int)row["ParentID"],
                FullName = row["FullName"].ToString(),
                Phone = row["Phone"].ToString(),
                Email = row["Email"].ToString(),
                Address = row["Address"].ToString(),
                UserID = (int)row["UserID"]
            };
        }
        public bool UpdateParents(Parents parents, out string error)
        {
            if (parents.ParentID <= 0)
            {
                error = "Invalid ParentID";
                return false;
            }

            string sql =
                $"UPDATE Parents SET " +
                $"FullName = '{parents.FullName.Replace("'", "''")}', " +
                $"Phone = '{parents.Phone.Replace("'", "''")}', " +
                $"Email = '{parents.Email.Replace("'", "''")}', " +
                $"Address = '{parents.Address.Replace("'", "''")}', " +
                $"[UserID] = '{parents.UserID}' " +
                $"WHERE ParentID = {parents.ParentID}";



            error = _db.ExecuteNoneQuery(sql);
            return string.IsNullOrEmpty(error);
        }
    }
}
