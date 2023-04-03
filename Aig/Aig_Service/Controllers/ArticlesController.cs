using Aig.Common.DM;
using Aig_Service.BL;
using Aig_Service.Data;
using Aig_Service.Models;
using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Aig_Service.Controllers
{
    [Route("api/articles/[action]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {

        private readonly ApplicationDbContext _db;
        public  readonly ILogger<ArticlesController> _logger;
        private readonly IErrorDM _err;


        public ArticlesController(ApplicationDbContext db, ILogger<ArticlesController> logger, IErrorDM err)
        {
            _db = db;
            _logger = logger;
            _err = err;
        }


        [HttpGet("{categoryId:int}", Name = "GetArticlesByCatId")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public ActionResult<IEnumerable<Article>> GetArticlesByCategoryID(int categoryId)
        {
            try
            {
                _logger.LogInformation("start getting all articles by categoryId");

                var res = new ArticleResponseDM();

                if (categoryId < 0)
                {
                    _err.Error = (int)ErrorCodes.BadRequest;
                    res.Err = (ErrorDM)_err;
                    return BadRequest(res);
                }

                var articles = ArticlesBL.GetArticlesByCategoryID(_db, categoryId);

                if (articles == null)
                {
                    _err.Error = (int)ErrorCodes.NotFound;
                    res.Err = (ErrorDM)_err;
                    return NotFound(res);
                }

                _err.Error = (int)ErrorCodes.OK;
                res.Err = (ErrorDM)_err;
                res.Articles = articles;
                return Ok(res);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting articles by categoryId");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet(Name = "GetFavoriteArticles")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<IEnumerable<Article>> GetFavoriteArticles()
        {
            try
            {
                _logger.LogInformation("start getting all favorite articles");
                var res = new ArticleResponseDM();
                var articles = ArticlesBL.GetFavoriteArticles(_db); 

                if (articles == null)
                {
                    _err.Error = (int)ErrorCodes.NotFound;
                    res.Err = (ErrorDM)_err;
                    return NotFound();
                }

                _err.Error = (int)ErrorCodes.OK;

                res.Articles = articles;
                res.Err = (ErrorDM)_err;
                return Ok(res);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting favorite articles");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPatch("{articleId:int}", Name = "UpdateArticleFavorite")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult AddArticleToFavorites(int articleId)
        {
            try
            {
                _logger.LogInformation("start getting all articles by categoryId");
                var res = new ArticleResponseDM();

                if (articleId <= 0)
                {
                    _err.Error = (int)ErrorCodes.BadRequest;
                    res.Err = (ErrorDM)_err;
                    return BadRequest(res);
                }

                var article = ArticlesBL.AddArticleToFavorites(_db, articleId);

                if (article == null)
                {
                    _err.Error = (int)ErrorCodes.NotFound;
                    res.Err = (ErrorDM)_err;
                    return BadRequest(res);
                }

                article.IsFavorite = true;

                _db.Articles.Update(article);
                _db.SaveChanges();

                _err.Error = (int)ErrorCodes.OK;
                res.Err = (ErrorDM)_err;

                return Ok(res);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while adding an article to favorites.");
                return StatusCode(500, "An error occurred while adding an article to favorites.");
            }
        }




        [HttpPatch("{articleId:int}", Name = "DeleteArticleFromFavorites")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public IActionResult DeleteArticleFromFavorites(int articleId)
        {

            try
            {
                _logger.LogInformation("start delete article from favorites");
                var res = new ArticleResponseDM();

                if (articleId <= 0)
                {
                    _err.Error = (int)ErrorCodes.BadRequest;
                    res.Err = (ErrorDM)_err;
                    return BadRequest(res);
                }

                var article = ArticlesBL.AddArticleToFavorites(_db, articleId);

                if (article == null)
                {
                    _err.Error = (int)ErrorCodes.NotFound;
                    res.Err = (ErrorDM)_err;
                    return BadRequest(res);
                }

                article.IsFavorite = false;

                _db.Articles.Update(article);
                _db.SaveChanges();

                _err.Error = (int)ErrorCodes.OK;
                res.Err = (ErrorDM)_err;

                return Ok(res);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while deleting an article to favorites.");
                return StatusCode(500, "An error occurred while deleting an article to favorites.");
            }
        }
    }
}
