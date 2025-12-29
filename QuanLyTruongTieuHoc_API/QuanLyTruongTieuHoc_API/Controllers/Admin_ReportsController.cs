using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [ApiController]
    [Route("api/BaoCao")]
    public class Admin_ReportsController : Controller
    {
        private readonly Admin_ReportsBLL _bll;

        public Admin_ReportsController(Admin_ReportsBLL bll)
        {
            _bll = bll;
        }

        [HttpGet]
        [Route("GetTodaySummary")]
        public IActionResult GetTodaySummary()
        {
            var result = _bll.GetTodayAttendanceSummary(out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            if (result == null)
                return Ok(new { TotalAttendance = 0, PresentPercent = 0 });

            return Ok(result);
        }
        [HttpGet]
        [Route("GetAttendanceByClassName")]
        public IActionResult GetAttendanceByClassName(string className)
        {
            var result = _bll.GetAttendanceByClassName(className, out string error);

            if (!string.IsNullOrEmpty(error))
                return BadRequest(error);

            if (result == null)
                return NotFound("Không có dữ liệu chuyên cần");

            return Ok(result);
        }

    }

}
