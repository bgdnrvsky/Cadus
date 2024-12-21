export default function Form () {
    const regions = [
        "Auvergne Rhône-Alpes",
        "Bourgogne Franche-Comté",
        "Bretagne",
        "Centre-Val de Loire",
        "Corse",
        "Grand-Est",
        "Hauts-de-France",
        "Île-de-France",
        "Normandie",
        "Nouvelle-Aquitaine",
        "Occitanie",
        "Pays de la Loire",
        "Provence-Alpes-Côte d'Azur",
        "Guadeloupe",
        "Martinique",
        "Mayotte",
        "La Réunion",
        "Corse",
        "Grand-Est",
        "Hauts-de-France",
        "Île-de-France"
    ];
    const activities = [
      "Scolarité en milieu ordinaire",
      "Scolarité en dispositif spécialisé de l'Éducation Nationale",
      "Instruction en Famille",
      "Scolarité dans un établissement médico-social (IME, IMPRO...)",
      "Formation professionnelle",
      "Etudes supérieures",
      "Activité professionnelle en milieu ordinaire",
      "Activité professionnelle en milieu protégé (ESAT, Entreprise adaptée)",
      "Sans aucune activité scolaire ou professionnelle",
      "Autre"
    ];
    const socialStats = [
        "Dans la famille en permanence",
        "Dans la famille avec une solution d'accueil ou des activités en journée",
        "Dans la famille principalement mais avec un accueil temporaire ou séquentiel en établissement",
        "Dans un logement indépendant",
        "Dans un habitat inclusif", "Dans un foyer d'accueil médicalisé (FAM)",
        "Dans une maison d'accueil spécialisée (MAS)", "Dans un foyer de vie ou un hébergement",
        "En IME avec internet", "Hospitalisation en psychiatrie"
    ];
    const helpTypes = [
      "La personne est totalement autonome",
      "Un soutien à l'autonomie pour le logement, l'accès à la santé, les loisirs, les démarches administratives",
      "Une aide pour tous les actes de la vie quotidienne et la présence d'une tierce personne 24 heures sur 24",
      "Des interventions et stimulations ponctuelles mais quotidiennes (toilette, sorties, repas, communication...)"
    ];

    return (
        <form>
            {/* First two questions */}
            <div className="flex flex-wrap">
                <div className="flex flex-col">
                    <label>Region</label>
                    <select className="w-20">
                        <option selected disabled>Choose</option>
                        {
                            regions.map((regionName) => (
                                <option>{regionName}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="flex flex-col ml-5">
                    <label>Social status</label>
                    <select className="w-20">
                      <option selected disabled>Choose</option>
                      {
                          socialStats.map((stat) => (
                              <option>{stat}</option>
                          ))
                      }
                    </select>
                </div>

                <div className="ml-5 mt-5">
                    <label>Are you satisfied with it ?</label>
                    <input className="ml-2" type="checkbox"/>
                </div>
            </div>

            {/* Second row */}
            <div className="flex flex-wrap">
                <div className="flex flex-col">
                    <label>Professional activity</label>
                    <select className="w-20">
                        <option selected disabled>Choose</option>
                        {
                            activities.map((activity) => (
                                <option>{activity}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="flex flex-col ml-5">
                  <label>Help type</label>
                  <select className="w-20">
                    <option selected disabled>Choose</option>
                    {
                      helpTypes.map((type) => (
                        <option>{type}</option>
                      ))
                    }
                  </select>
                </div>
            </div>
        </form>
    );
};
