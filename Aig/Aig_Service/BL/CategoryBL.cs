

using Aig.Common.DM;
using Aig_Service.Data;

namespace Aig_Service.BL
{
    public class CategoryBL
    {
        public static List<Category> GetAllCategories(ApplicationDbContext db)
        {
            try
            {
                return db.Categories.ToList();

            }
            catch (Exception ex)
            {
                throw ex;

            }

        }



    }
}
