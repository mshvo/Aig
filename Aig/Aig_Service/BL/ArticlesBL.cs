using Aig.Common.DM;
using Aig_Service.Data;

namespace Aig_Service.BL
{
    public class ArticlesBL
    {
        public static List<Article> GetArticlesByCategoryID(ApplicationDbContext db,int categoryId)
        {
            
                return  db.Articles.Where(a => a.CategoryID == categoryId && !a.IsFavorite).ToList();

           

        }

        public static List<Article> GetFavoriteArticles(ApplicationDbContext db)
        {
           
             return db.Articles.Where(a => a.IsFavorite == true).ToList();

            

        }


        public static Article AddArticleToFavorites(ApplicationDbContext db,int articleId)
        {
            
              return db.Articles.FirstOrDefault(a => a.ArticleID == articleId);

           
        }


        public static Article DeleteArticleFromFavorites(ApplicationDbContext db, int articleId)
        {

            return db.Articles.FirstOrDefault(a => a.ArticleID == articleId);


        }
        



    }
}
