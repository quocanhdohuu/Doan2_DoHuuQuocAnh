using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_TCLass")]
    [ApiController]
    public class Teacher_TeachersClassControl:ControllerBase
    {
        private readonly Teacher_TeachersClassBLL _bll;
        public Teacher_TeachersClassControl(Teacher_TeachersClassBLL bll)
        {
            _bll = bll;
        }
        [Route("TC_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("TC_GetClass")]
        [HttpGet]
        public IActionResult GetClass(int teacherId)
        {
            var classes = _bll.GetClass(teacherId, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (classes == null || classes.Count == 0)
                return NotFound("Giáo viên chưa được phân lớp");

            return Ok(classes);
        }
    }
}
