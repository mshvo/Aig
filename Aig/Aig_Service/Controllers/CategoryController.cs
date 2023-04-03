using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Aig.Common.DM;
using Aig_Service.BL;
using Aig_Service.Data;
using Aig_Service.Models;

namespace Aig_Service.Controllers
{
    [Route("api/category/[action]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        public readonly ILogger<CategoryController> _logger;
        private readonly ApplicationDbContext _db;
        private readonly IErrorDM _err;

        public CategoryController(ApplicationDbContext db, ILogger<CategoryController> logger, IErrorDM err)
        {
            _db         = db;
            _logger     = logger;
            _err        = err;
        }


        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Category>> GetCategories()
        {
            
            try
            {
                _logger.LogInformation("start getting all categories");

                var res = new CategoryResponseDM();
                res.Categories = CategoryBL.GetAllCategories(_db);

                _err.Error = 0;
                res.Err = (ErrorDM)_err;

                return Ok(res);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting categories statuscode ");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        

    }
}
