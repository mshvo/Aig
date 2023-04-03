using Aig.Common.DM;

namespace Aig_Service.Models
{
    public class ArticleResponseDM
    {
        public List<Article> Articles { get; set; }
        public ErrorDM Err { get; set; }
    }
}
