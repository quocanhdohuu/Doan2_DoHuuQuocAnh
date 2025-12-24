using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [ApiController]
    [Route("api/QLLopHoc")]
    public class Admin_ClassesController : ControllerBase
    {
        private readonly Admin_ClassesBLL _bll;

        public Admin_ClassesController(Admin_ClassesBLL bll)
        {
            _bll = bll;
        }

        [HttpPost("add")]
        public IActionResult AddClass([FromBody] Classes model)
        {
            if (model == null)
                return BadRequest("Dữ liệu không hợp lệ");

            bool ok = _bll.CreateClass(model, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Thêm lớp học thành công" });
        }

        [HttpPost("update")]
        public IActionResult UpdateClass([FromBody] Classes model)
        {
            if (model == null)
                return BadRequest("Dữ liệu không hợp lệ");

            bool ok = _bll.EditClass(model, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Cập nhật lớp học thành công" });
        }
    }

}
