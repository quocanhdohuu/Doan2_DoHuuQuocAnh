using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/Messager")]
    [ApiController]
    public class PhuHuynh_MessagarController : ControllerBase
    { 
        private readonly PhuHuynh_Messager_BLL _bll;

        public PhuHuynh_MessagarController(PhuHuynh_Messager_BLL bll)
        {
            _bll = bll;
        }
        [Route("PhuHuynh_Messager_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("PhuHuynh_Messager_GetByID")]
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
        [Route("PhuHuynh_Messager_Create")]
        [HttpPost]
        public IActionResult Create([FromBody] Messages messages)
        {
            bool ok = _bll.CreateMessages(messages, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }

        [Route("PhuHuynh_Messager_Update")]
        [HttpPost]
        public IActionResult Update(int id, [FromBody] Messages messages)
        {
            bool ok = _bll.UpdateMessages(id, messages, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
    }
}
