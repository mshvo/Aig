using System.ComponentModel;

namespace Aig_Service.BL
{
    public enum ErrorCodes
    {
        [Description("OK")]
        OK = 0,
        [Description("BadRequest")]
        BadRequest = -1,
        [Description("NotFound")]
        NotFound = -2
       

    }
}
