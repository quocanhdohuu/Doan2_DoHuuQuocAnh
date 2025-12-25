using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [ApiController]
    [Route("api/QLGiaoVien")]
    public class Admin_TeachersController : Controller
    {
        private readonly Admin_TeachersBLL _bll;

        public Admin_TeachersController(Admin_TeachersBLL bll)
        {
            _bll = bll;
        }
        [HttpPost]
        [Route("Teacher_Add")]
        public IActionResult AddTeacher([FromBody] Manage_Teacher model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Dữ liệu không hợp lệ");

            bool result = _bll.AddTeacher(model, out string error);

            if (!result)
                return BadRequest(error);

            return Ok("Thêm giáo viên thành công");
        }
        [HttpPost]
        [Route("Teacher_Update")]
        public IActionResult UpdateTeacher([FromBody] Manage_Teacher model)
        {
            var result = _bll.UpdateTeacher(model, out string error);

            if (!result)
                return BadRequest(error);

            return Ok("Cập nhật giáo viên thành công");
        }

        [HttpPost]
        [Route("Teacher_Delete")]
        public IActionResult DeleteTeacher(int id)
        {
            bool result = _bll.DeleteTeacher(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            if (!result)
                return NotFound("Không thể xoá giáo viên");

            return Ok("Xoá giáo viên thành công");
        }

    }
}
