import NavBar from "../components/NavBar";
import ComboBox, {ComboBoxOption} from "../components/ComboBox";
import CheckBox from "../components/CheckBox";
import SubmitOnceButton from "../components/SubmitOnceButton";


export default function Survey() {

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

    const status = [
        "Dans la famille en permanence",
        "Dans la famille avec une solution d'accueil ou des activités en journée",
        "Dans la famille principalement mais avec un accueil temporaire ou séquentiel en établissement",
        "Dans un logement indépendant",
        "Dans un habitat inclusif",
        "Dans un foyer d'accueil médicalisé (FAM)",
        "Dans une maison d'accueil spécialisée (MAS)",
        "Dans un foyer de vie ou un hébergement",
        "En IME avec internet",
        "Hospitalisation en psychiatrie"
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

    const helpTypes = [
        "La personne est totalement autonome",
        "Un soutien à l'autonomie pour le logement, l'accès à la santé, les loisirs, les démarches administratives",
        "Une aide pour tous les actes de la vie quotidienne et la présence d'une tierce personne 24 heures sur 24",
        "Des interventions et stimulations ponctuelles mais quotidiennes (toilette, sorties, repas, communication...)"
    ];

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>

            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col items-center w-1/2 space-y-10">
                    <div className="flex items-center justify-between w-full space-x-4">
                        <ComboBox id="regions" label="Votre région">
                            {regions.map((region, index) => (
                                <ComboBoxOption key={index} value={"region-" + index.toString()}>
                                    {region}
                                </ComboBoxOption>
                            ))}
                        </ComboBox>
                        <SubmitOnceButton onSubmit={() => {
                        }}/>
                    </div>

                    <div className="flex items-center justify-between w-full space-x-4">
                        <ComboBox id="status-social" label="Votre status social">
                            {status.map((status, index) => (
                                <ComboBoxOption key={index} value={"status-" + index.toString()}>
                                    {status}
                                </ComboBoxOption>
                            ))}
                        </ComboBox>
                        <SubmitOnceButton onSubmit={() => {
                        }}/>
                    </div>

                    <div className="flex items-center justify-between w-full space-x-4">
                        <CheckBox id="cb-status">
                            Êtes-vous satisfait de votre status social ?
                        </CheckBox>
                        <SubmitOnceButton onSubmit={() => {
                        }}/>
                    </div>

                    <div className="flex items-center justify-between w-full space-x-4">
                        <ComboBox id="activities" label="Quelles sont vos activités ?">
                            {activities.map((activity, index) => (
                                <ComboBoxOption key={index} value={"activity-" + index.toString()}>
                                    {activity}
                                </ComboBoxOption>
                            ))}
                        </ComboBox>
                        <SubmitOnceButton onSubmit={() => {
                        }}/>
                    </div>

                    <div className="flex items-center justify-between w-full space-x-4">
                        <ComboBox id="help-types" label="Quelles sont vos aides ?">
                            {helpTypes.map((help, index) => (
                                <ComboBoxOption key={index} value={"help-" + index.toString()}>
                                    {help}
                                </ComboBoxOption>
                            ))}
                        </ComboBox>
                        <SubmitOnceButton onSubmit={() => {
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}