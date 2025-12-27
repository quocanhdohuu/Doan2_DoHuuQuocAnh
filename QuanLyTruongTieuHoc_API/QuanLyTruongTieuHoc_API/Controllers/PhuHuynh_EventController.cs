using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/PhuHuynh_Event")]
    [ApiController]
    public class PhuHuynh_EventController : ControllerBase
    {
        private readonly PhuHuynh_Event_BLL _bll;

        public PhuHuynh_EventController(PhuHuynh_Event_BLL bll)
        {
            _bll = bll;
        }
        [Route("PhuHuynh_Event_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("PhuHuynh_Event_GetByID")]
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
    }
}
