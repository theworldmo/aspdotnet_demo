using System.ComponentModel.DataAnnotations;

namespace Vega.Models
{
    public class Task
    {
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Desc { get; set; }
        [Required]
        public bool IsDone { get; set; }
    }
}