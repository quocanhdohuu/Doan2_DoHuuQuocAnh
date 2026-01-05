using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_TC")]
    [ApiController]
    public class Teacher_TeachersControl:ControllerBase
    {
        private readonly Teacher_TeachersBLL _bll;
        public Teacher_TeachersControl(Teacher_TeachersBLL bll)
        {
            _bll = bll;
        }
        [Route("Tea_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [HttpGet("Tea_GetByID")]
        public IActionResult GetById([FromQuery] int id)
        {
            var user = _bll.GetById(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
        [Route("Tea_Update")]
        [HttpPut]
        public IActionResult Update(int id, [FromBody] Teachers tea)
        {
            bool ok = _bll.UpdateStu(id, tea, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
    }
}
