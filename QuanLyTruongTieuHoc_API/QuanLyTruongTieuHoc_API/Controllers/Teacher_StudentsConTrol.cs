using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_Stu")]
    [ApiController]
    public class Teacher_StudentsConTrol: ControllerBase
    {
        private readonly Teacher_StudentsBLL _bll;
        public Teacher_StudentsConTrol(Teacher_StudentsBLL bll)
        {
            _bll = bll;
        }
        [Route("Stu_GetAll")]
        [HttpGet]
        public IActionResult GetAll(int id)
        {
            var list = _bll.GetAll(id,out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("Stu_GetByID")]
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
        [Route("Stu_Update")]
        [HttpPut]
        public IActionResult Update(int id, [FromBody] Students Stu)
        {
            bool ok = _bll.UpdateStu(id, Stu, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
    }
}
