using InteractiveCvAspCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InteractiveCvAspCore.Data
{
    public class InteractiveCvContext: DbContext
    {
        /* Deze constructor ontvangt een object van het type DbContextOptions<T> en geeft deze door aan de basisklasse,
         * namelijk DbContext, die er verder wel raad mee weet. */
        public InteractiveCvContext(DbContextOptions<InteractiveCvContext> options):base (options)
        {

        }

        /* Via deze DbSet<T> properties verkrijg je toegang tot de effectieve gegevens in de databank. Alle functionaliteit die je
         * nodig hebt zit reeds ingebakken in de DbContext klasse waarvan je overerft. */
        public DbSet<Person> Person { get; set; }
        public DbSet<PersonEducation> PersonEducation { get; set; }
        public DbSet<PersonExperience> PersonExperience { get; set; }
        public DbSet<PersonAbility> PersonAbility { get; set; }
        public DbSet<AbilityCategory> AbilityCategory { get; set; }
    }
}
