using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_HD")]
    [ApiController]
    public class Teacher_HealthDailyControl:ControllerBase
    {
        private readonly Teacher_HealthDailyBLL _bll;
        public Teacher_HealthDailyControl(Teacher_HealthDailyBLL bll)
        {
            _bll = bll;
        }
        [Route("HT_GetAll")]
        [HttpGet]
        public IActionResult GetAll(string date,int classid)
        {
            var list = _bll.GetAll(date,classid,out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("HD_Create")]
        [HttpPost]
        public IActionResult Create([FromBody] HealthDaily HD)
        {
            bool ok = _bll.CreateHD(HD, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }

        [Route("HD_Update")]
        [HttpPut]
        public IActionResult Update(int id, [FromBody] HealthDaily HD)
        {
            bool ok = _bll.UpdateHD(id, HD, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
     
    }
}
