using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_Mess")]
    [ApiController]
    public class Teacher_MessagesControl: ControllerBase
    {
        private readonly Teacher_MessagesBLL _bll;
        public Teacher_MessagesControl(Teacher_MessagesBLL  bll)
        {
            _bll = bll;
        }
        [Route("Mse_GetRe")]
        [HttpGet]
        public IActionResult GetRe(int id)
        {
            var list = _bll.GetRe(id,out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("Mse_GetSen")]
        [HttpGet]
        public IActionResult GetSen(int id)
        {
            var list = _bll.GetSen(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("Mse_Create")]
        [HttpPost]
        public IActionResult Create([FromBody] Messages AT)
        {
            bool ok = _bll.CreateMse(AT, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }
    }
}
