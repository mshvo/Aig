using System.ComponentModel.DataAnnotations;

namespace Aig.Common.DM
{
    public class Category
    {
        [Key]
        public int CategoryID { get; set; }
        [Required]
        public string CategoryName { get; set; }
    }
}