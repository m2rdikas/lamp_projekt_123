using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace rest
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "RestServiceImpl" in code, svc and config file together.
    public class RestServiceImpl : IRestServiceImpl
    {
        #region
        public string JSONData(string id)
        {
            return "Teie soovitud andmed" + id;
        }

        #endregion
    }
}
