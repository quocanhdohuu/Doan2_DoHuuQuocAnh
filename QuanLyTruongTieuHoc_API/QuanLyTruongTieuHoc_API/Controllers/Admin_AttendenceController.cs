using BLL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [ApiController]
    [Route("api/QLChuyenCan")]
    public class Admin_AttendanceController : Controller
    {
        private readonly Admin_AttendenceBLL _bll;

        public Admin_AttendanceController(Admin_AttendenceBLL bll)
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
    }

}
