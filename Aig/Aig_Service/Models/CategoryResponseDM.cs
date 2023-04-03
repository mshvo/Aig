using Aig.Common.DM; 

namespace Aig_Service.Models
{
    public class CategoryResponseDM
    {

       public List<Category> Categories { get; set; }
       public ErrorDM Err { get; set; }
    }
}
