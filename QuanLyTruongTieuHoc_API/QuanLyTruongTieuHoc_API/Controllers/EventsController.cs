using Microsoft.AspNetCore.Mvc;
using BLL;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/QLEvent")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly EventsBLL _bll;

        public EventsController(EventsBLL bll)
        {
            _bll = bll;
        }

        [Route("Event_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }

        [Route("Event_GetByID")]
        [HttpGet]
        public IActionResult GetById(int id)
        {
            var ev = _bll.GetById(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (ev == null)
                return NotFound();

            return Ok(ev);
        }

        [HttpPost]
        [Route("Event_Create")]
        public IActionResult Create([FromBody] Events ev)
        {
            if (ev == null)
                return BadRequest("Invalid request body");

            bool ok = _bll.CreateEvent(ev, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }


        [Route("Event_Update")]
        [HttpPost]
        public IActionResult Update(int id, [FromBody] Events ev)
        {
            bool ok = _bll.UpdateEvent(id, ev, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
        [Route("Event_Delete")]
        [HttpPost]
        public IActionResult Delete(int id)
        {
            bool ok = _bll.DeleteEvent(id, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Deleted successfully" });
        }
    }
}
