

using Aig.Common.DM;
using System.ComponentModel.DataAnnotations;

namespace Aig_Service.Models
{
    public class ArticleRequestDM
    {
        public int ArticleID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int CategoryID { get; set; }
        public bool IsFavorite { get; set; }

    }
}
