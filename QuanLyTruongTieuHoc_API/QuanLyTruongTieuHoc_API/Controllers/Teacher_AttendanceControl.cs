using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [ApiController]
    [Route("api/GiaoVien_Attendance")]
    public class Teacher_AttendanceControl : ControllerBase
    {
        private readonly Teacher_AttendanceBLL _bll;
        public Teacher_AttendanceControl(Teacher_AttendanceBLL bll)
        {
            _bll = bll;
        }
        [Route("AT_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("AT_GetByID")]
        [HttpGet]
        public IActionResult GetById(int id)
        {
            var user = _bll.GetById(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
      
        [Route("AT_SaveAten")]
        [HttpPost]
        public IActionResult SaveAT([FromBody] Attendance AT)
        {
            bool ok = _bll.saveAT(AT, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Save successfully" });
        }
    }
}
