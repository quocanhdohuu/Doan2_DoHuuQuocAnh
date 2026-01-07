using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/QLUser")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersBLL _bll;

        public UsersController(UsersBLL bll)
        {
            _bll = bll;
        }
        [Route("User_ChangePassword")]
        [HttpPut]
        public IActionResult ChangePassword(int id, [FromBody] ChangePass dto)
        {
            bool ok = _bll.ChangePassword(id, dto.OldPassword, dto.NewPassword, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok("Đổi mật khẩu thành công");
        }
    }
}