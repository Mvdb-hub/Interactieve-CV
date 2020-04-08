using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InteractiveCvAspCore.Models
{
    public class PersonAbility
    {
        public int PersonAbilityID { get; set; }
        public int PersonID { get; set; }
        public int AbilityCategoryID { get; set; }

        public string Description { get; set; }
        public int Score { get; set; }

        public Person Person { get; set; }
        public AbilityCategory Category { get; set; }
    }
}
