using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/PhuHuynh_Parents")]
    [ApiController]
    public class PhuHuynh_ParentsController : ControllerBase
    {
        private readonly PhuHuynh_Parents_BLL _bll;

        public PhuHuynh_ParentsController(PhuHuynh_Parents_BLL bll)
        {
            _bll = bll;
        }
        [Route("PhuHuynh_Parents_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("PhuHuynh_Parents_GetByID")]
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
        [Route("PhuHuynh_Parents_Update")]
        [HttpPost]
        public IActionResult Update(int id, [FromBody] Parents parents)
        {
            bool ok = _bll.UpdateParents(id, parents, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
    }
}
