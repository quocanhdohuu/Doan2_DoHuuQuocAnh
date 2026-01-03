using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien")]
    [ApiController]
    public class Teacher_MessagesControl: ControllerBase
    {
        private readonly Teacher_MessagesBLL _bll;
        public Teacher_MessagesControl(Teacher_MessagesBLL  bll)
        {
            _bll = bll;
        }
        [Route("Mse_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

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
