using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/QLHocSinh")]
    [ApiController]
    public class Admin_StudentsController : ControllerBase
    {
        private readonly Admin_StudentsBLL _bll;

        public Admin_StudentsController(Admin_StudentsBLL bll)
        {
            _bll = bll;
        }

        [HttpPost]
        [Route("Student_Create")]
        public IActionResult Create([FromBody] Manage_Student student)
        {
            if (student == null)
                return BadRequest("Invalid request body");

            bool ok = _bll.CreateStudent(student, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Student created successfully" });
        }
        [HttpPost]
        [Route("Student_Update")]
        public IActionResult Update([FromBody] Manage_Student student)
        {
            if (student == null)
                return BadRequest("Invalid request body");

            bool ok = _bll.UpdateStudent(student, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Student updated successfully" });
        }

    }

}
