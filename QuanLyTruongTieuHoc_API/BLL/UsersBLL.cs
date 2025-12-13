using System.Data;
using DAL;
using Models;
using System.Collections.Generic;

namespace BLL
{
    public class UsersBLL
    {
        private readonly UsersDAL _dal;

        public UsersBLL(UsersDAL dal)
        {
            _dal = dal;
        }

        public List<Users> GetAll(out string error)
        {
            return _dal.GetAllUsers(out error);
        }

        public Users GetById(int id, out string error)
        {
            return _dal.GetUserById(id, out error);
        }

        public bool CreateUser(Users user, out string error)
        {
            if (string.IsNullOrWhiteSpace(user.Username))
            {
                error = "Username is required";
                return false;
            }

            return _dal.InsertUser(user, out error);
        }
        public bool UpdateUser(int id, Users user, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid user id";
                return false;
            }

            if (string.IsNullOrWhiteSpace(user.Username))
            {
                error = "Username is required";
                return false;
            }

            user.UserID = id;

            return _dal.UpdateUser(user, out error);
        }
    }
}
