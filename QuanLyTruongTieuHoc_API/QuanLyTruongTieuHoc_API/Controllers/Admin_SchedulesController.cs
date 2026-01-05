using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [ApiController]
    [Route("api/QLLichHoc")]
    public class Admin_SchedulesController : Controller
    {
        private readonly Admin_SchedulesBLL _bll;

        public Admin_SchedulesController(Admin_SchedulesBLL bll)
        {
            _bll = bll;
        }
        [HttpPost]
        [Route("Add")]
        public IActionResult AddSchedule([FromBody] Manage_Schedule model)
        {
            bool result = _bll.AddSchedule(model, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            if (!result)
                return BadRequest("Thêm tiết học thất bại");

            return Ok("Thêm tiết học thành công");
        }

        [HttpPost]
        [Route("Update")]
        public IActionResult UpdateSchedule([FromBody] Manage_Schedule model)
        {
            bool result = _bll.UpdateSchedule(model, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            if (!result)
                return BadRequest("Cập nhật tiết học thất bại");

            return Ok("Cập nhật tiết học thành công");
        }
        [HttpPost]
        [Route("Delete")]
        public IActionResult DeleteSchedule(int id)
        {
            bool result = _bll.DeleteSchedule(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            if (!result)
                return NotFound("Xoá tiết học thất bại");

            return Ok("Xoá tiết học thành công");
        }
        [HttpGet]
        [Route("GetTotalByClassName")]
        public IActionResult GetTotalScheduleByClassName(string className)
        {
            int total = _bll.GetTotalScheduleByClassName(className, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            return Ok(new
            {
                ClassName = className,
                TotalSchedule = total
            });
        }
        [HttpGet]
        [Route("GetByClassName")]
        public IActionResult GetSchedulesByClassName(string className)
        {
            var schedules = _bll.GetSchedulesByClassName(className, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            return Ok(schedules);
        }

    }
}
