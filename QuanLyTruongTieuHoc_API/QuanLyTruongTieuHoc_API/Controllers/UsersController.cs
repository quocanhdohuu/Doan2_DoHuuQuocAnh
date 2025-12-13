using Microsoft.AspNetCore.Mvc;
using BLL;
using System.Data;
using Models;

namespace QuanLyTruongTieuHoc_API.Controllers
{
    [Route("api/QLUser")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersBLL _bll;

        public UsersController(UsersBLL bll)
        {
            _bll = bll;
        }
        [Route("User_GetAll")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _bll.GetAll(out string error);

            if (!string.IsNullOrEmpty(error))
                return StatusCode(500, error);

            return Ok(list);
        }
        [Route("User_GetByID")]
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
        [Route("User_Create")]
        [HttpPost]
        public IActionResult Create([FromBody] Users user)
        {
            bool ok = _bll.CreateUser(user, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Created" });
        }

        [Route("User_Update")]
        [HttpPost]
        public IActionResult Update(int id, [FromBody] Users user)
        {
            bool ok = _bll.UpdateUser(id, user, out string error);

            if (!ok)
                return BadRequest(error);

            return Ok(new { message = "Updated successfully" });
        }
    }
}