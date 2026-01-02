using BLL;
using Microsoft.AspNetCore.Mvc;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/PhuHuynh_HealthyDaily")]
    [ApiController]
    public class PhuHuynh_HealthyDailyController : ControllerBase
    {
        private readonly PhuHuynh_HealthyDaily_BLL _bll;

        public PhuHuynh_HealthyDailyController(PhuHuynh_HealthyDaily_BLL bll)
        {
            _bll = bll;
        }
        [Route("PhuHuynh_HealthyDaily_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("PhuHuynh_HealthyDaily_GetByID")]
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
