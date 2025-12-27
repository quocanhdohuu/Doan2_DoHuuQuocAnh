using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/PhuHuynh_Student")]
    [ApiController]
    public class PhuHuynh_StudentController : ControllerBase
    {
        private readonly PhuHuynh_Student_BLL _bll;

        public PhuHuynh_StudentController(PhuHuynh_Student_BLL bll)
        {
            _bll = bll;
        }
        [Route("PhuHuynh_Student_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("PhuHuynh_Student_GetByID")]
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
        [Route("PhuHuynh_Student_Update")]
        [HttpPost]
        public IActionResult Update(int id, [FromBody] Students students)
        {
            bool ok = _bll.UpdateStudent(id, students, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
    }
}

