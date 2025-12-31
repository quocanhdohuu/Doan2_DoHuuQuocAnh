using DAL.Helper;
using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Formats.Asn1.AsnWriter;

namespace DAL
{
    public class Teacher_ParentsDAL
    {

        private readonly DatabaseHelper _db;

        public Teacher_ParentsDAL(DatabaseHelper db)
        {
            _db = db;
        }
        public List<Parents> GetAllpr(out string error)
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
        public Parents GetprById(int id, out string error)
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
    }
}
