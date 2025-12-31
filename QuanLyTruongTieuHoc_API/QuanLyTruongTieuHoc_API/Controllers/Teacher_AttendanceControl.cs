using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{ 
    [Route("api/GiaoVien")]
    [ApiController]
    public class Teacher_AttendanceControl:ControllerBase
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
        [Route("AT_Create")]
        [HttpPost]
        public IActionResult Create([FromBody] Attendance AT)
        {
            bool ok = _bll.CreateAT(AT, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }

        [Route("AT_Update")]
        [HttpPost]
        public IActionResult Update(int id, [FromBody] Attendance AT)
        {
            bool ok = _bll.UpdateAten(id, AT, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
        [Route("AT_Delete")]
        [HttpPost]
        public IActionResult Delete(int id)
        {
            bool ok = _bll.DeleteAT(id, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Delete successfully" });
        }
    }
}
