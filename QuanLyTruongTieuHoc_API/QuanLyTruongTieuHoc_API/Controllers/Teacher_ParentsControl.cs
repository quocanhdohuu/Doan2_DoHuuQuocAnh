using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_pa")]
    [ApiController]
    public class Teacher_ParentsControl:ControllerBase
    {
        private readonly Teacher_ParentsBLL _bll;
        public Teacher_ParentsControl(Teacher_ParentsBLL bll)
        {
            _bll = bll;
        }
        [Route("pr_GetAll")]
        [HttpGet]
        public IActionResult GetAll(int classid)
        {
            var list = _bll.GetAll(classid,out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("pr_GetByID")]
        [HttpGet]
        public IActionResult GetById(int id)
        {
            var user = _bll.GetById(id, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
    }
}
