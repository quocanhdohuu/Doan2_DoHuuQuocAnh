using BLL;
using Microsoft.AspNetCore.Mvc;

namespace QuanLyTruongTieuHoc_API.Controllers
{
   [Route("api/PhuHuynh_Attendance")]
   [ApiController]
   public class PhuHuynh_AttendanceController : ControllerBase
   {
       private readonly PhuHuynh_Attendance_BLL _bll;

       public PhuHuynh_AttendanceController(PhuHuynh_Attendance_BLL bll)
       {
           _bll = bll;
       }
       [Route("PhuHuynh_Attendance_GetAll")]
       [HttpGet]
       public IActionResult GetAll()
       {
           var list = _bll.GetAll(out string error);

           if (!string.IsNullOrEmpty(error))
               return StatusCode(500, error);

           return Ok(list);
       }
       [Route("PhuHuynh_Attendance_GetByID")]
       [HttpGet]
       public IActionResult GetById(int id)
       {
           var chitiet = _bll.GetById(id, out string error);

           if (!string.IsNullOrEmpty(error))
               return StatusCode(500, error);

           if (chitiet == null)
               return NotFound();

           return Ok(chitiet);
       }
   }
}
