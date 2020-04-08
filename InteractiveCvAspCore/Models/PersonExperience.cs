using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InteractiveCvAspCore.Models
{
    public class PersonExperience
    {
        public int PersonExperienceID { get; set; }
        public int PersonID { get; set; }

        public string CompanyName { get; set; }
        public string Function { get; set; }
        public string Location { get; set; }
        public string WebsiteUrl { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public Person Person { get; set; }
    }
}
