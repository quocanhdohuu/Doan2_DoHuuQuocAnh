using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;
using DAL;
namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/GiaoVien_Sco")]
    [ApiController]
    public class Teacher_ScoreControler : ControllerBase
    {
        private readonly Teacher_ScoreBLL _bll;
        public Teacher_ScoreControler(Teacher_ScoreBLL bll)
        {
            _bll = bll;
        }

        [Route("Score_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("Score_GetByID")]
        [HttpGet]
        public IActionResult GetById(int stuid,int id,string term)
        {
            var user = _bll.GetById(stuid,id,term, out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
        [Route("Score_Create")]
        [HttpPost]
        public IActionResult Create([FromBody] Scores score)
        {
            bool ok = _bll.CreateScore(score, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }

        [Route("Score_Update")]
        [HttpPut]
        public IActionResult Update(int id, [FromBody] Scores score)
        {
            bool ok = _bll.UpdateScore(id, score, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
        
    }
}
