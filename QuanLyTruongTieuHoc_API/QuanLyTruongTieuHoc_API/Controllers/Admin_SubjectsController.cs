using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/QLSubject")]
    [ApiController]
    public class Admin_SubjectsController : ControllerBase
    {
        private readonly Admin_SubjectsBLL _bll;

        public Admin_SubjectsController(Admin_SubjectsBLL bll)
        {
            _bll = bll;
        }

        [HttpGet("GetAllName")]
        public IActionResult GetAllName()
        {
            var data = _bll.GetAllName(out string error);
            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(data);
        }

        [HttpGet("GetNameByID")]
        public IActionResult GetNameByID(int id)
        {
            var data = _bll.GetNameByID(id, out string error);
            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (data == null)
                return NotFound();

            return Ok(data);
        }

        [HttpPost("Add")]
        public IActionResult Add([FromBody] Subjects s)
        {
            if (_bll.Create(s, out string error))
                return Ok(new { message = "Added successfully" });

            return BadRequest(error);
        }

        [HttpPost("Update")]
        public IActionResult Update([FromBody] Subjects s)
        {
            if (s.SubjectID <= 0)
                return BadRequest("Invalid SubjectID");

            if (_bll.Update(s.SubjectID, s, out string error))
                return Ok(new { message = "Updated successfully" });

            return BadRequest(error);
        }

        [HttpPost("Delete")]
        public IActionResult Delete(int id)
        {
            if (_bll.Delete(id, out string error))
                return Ok(new { message = "Deleted successfully" });

            return BadRequest(error);
        }
    }

}
