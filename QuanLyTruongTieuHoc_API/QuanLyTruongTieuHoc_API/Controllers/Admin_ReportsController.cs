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
        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll(DateTime fromDate, DateTime toDate)
        {
            var summary = _bll.GetAcademicSummary(fromDate, toDate, out string error1);
            if (!string.IsNullOrEmpty(error1)) return BadRequest(error1);

            var dist = _bll.GetAcademicDistribution(fromDate, toDate, out string error2);
            if (!string.IsNullOrEmpty(error2)) return BadRequest(error2);

            var attByClass = _bll.GetAttendanceByClass(fromDate, toDate, out string error3);
            if (!string.IsNullOrEmpty(error3)) return BadRequest(error3);

            var trend = _bll.GetMonthlyTrend(fromDate, toDate, out string error4);
            if (!string.IsNullOrEmpty(error4)) return BadRequest(error4);

            return Ok(new
            {
                AcademicSummary = summary ?? new Manage_AcademicSummary(),
                AcademicDistribution = dist ?? new List<Manage_AcademicDistribution>(),
                AttendanceByClass = attByClass ?? new List<Manage_AttendanceByClassRow>(),
                MonthlyTrend = trend ?? new List<Manage_MonthlyAttendanceTrend>(),
                ClassDetail = attByClass ?? new List<Manage_AttendanceByClassRow>()
            });
        }
    }

}
