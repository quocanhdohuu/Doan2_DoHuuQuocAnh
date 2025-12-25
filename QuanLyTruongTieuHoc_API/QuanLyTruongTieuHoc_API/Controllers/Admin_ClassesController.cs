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
        [HttpGet]
        [Route("Class_GetAll")]
        public IActionResult GetAll()
        {
            var list = _bll.GetAllClasses(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [HttpGet]
        [Route("Class_GetByID")]
        public IActionResult GetByID(int id)
        {
            var cls = _bll.GetClassByID(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (cls == null)
                return NotFound("Không tìm thấy lớp học");

            return Ok(cls);
        }
        [HttpGet]
        [Route("Class_GetTotal")]
        public IActionResult GetTotalClasses()
        {
            int total = _bll.GetTotalClasses(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(new
            {
                totalClasses = total
            });
        }


    }

}
