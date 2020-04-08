using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InteractiveCvAspCore.Models
{
    public class Person
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string Location { get; set; }
        public string AboutMe { get; set; }
        public string ImageUrl { get; set; }
        public string EmailAddress { get; set; }
        public string TwitterUrl { get; set; }
        public string LinkedInUrl { get; set; }

        public ICollection<PersonExperience> Experiences { get; set; }
        public ICollection<PersonAbility> Abilities { get; set; }
        public ICollection<PersonEducation> Educations { get; set; }
        public ICollection<AbilityCategory> AbilityCategories { get; set; }
    }
 
}

