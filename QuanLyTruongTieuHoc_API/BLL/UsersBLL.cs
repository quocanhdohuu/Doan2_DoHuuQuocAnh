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

        public bool ChangePassword(int userId, string oldPass, string newPass, out string error)
        {
            error = "";

            var user = _dal.GetUserById(userId,out error); // Lấy user thật
            if (user == null)
            {
                error = "Tài khoản không tồn tại";
                return false;
            }

            if (user.Password != oldPass) // So sánh mật khẩu cũ
            {
                error = "Mật khẩu cũ không đúng";
                return false;
            }

            return _dal.UpdatePassword(userId, newPass, out error); // Cập nhật mật khẩu mới
        }
    }
}
