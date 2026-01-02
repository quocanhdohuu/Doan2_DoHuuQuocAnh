using BLL;
using Microsoft.AspNetCore.Mvc;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/PhuHuynh_Scores")]
    [ApiController]
    public class PhuHuynh_ScoresController : ControllerBase
    {
        private readonly PhuHuynh_Scores_BLL _bll;

        public PhuHuynh_ScoresController(PhuHuynh_Scores_BLL bll)
        {
            _bll = bll;
        }
        [Route("PhuHuynh_Scores_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("PhuHuynh_Scores_GetByID")]
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
