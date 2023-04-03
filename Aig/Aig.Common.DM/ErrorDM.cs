using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aig.Common.DM
{
    public interface IErrorDM
    {
        public int Error { get; set; }
        public string ErrorMsg { get; set; }
    }
    public class ErrorDM:IErrorDM
    {
        public  int Error { get; set; }
        public string ErrorMsg { get; set; }
    }
}
