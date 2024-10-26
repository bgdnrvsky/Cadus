import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Button from "../components/Button";
import TextInput, {InputType} from "../components/TextInput";
import ComboBox, {ComboBoxOption} from "../components/ComboBox";
import DonationForm from "../components/DonationForm";
import ScrollIndicator from "../components/ScrollIndicator";
import NavBar from "../components/NavBar";

export default function Help() {

    const images = [
        'https://via.placeholder.com/2000x400/ff5733/fff',
        'https://via.placeholder.com/2000x400/33ff57/fff',
        'https://via.placeholder.com/2000x400/5733ff/fff',
    ];

    const onAskFormationClick = () => console.log("User asked for a formation")
    const onOfferHelpClick = () => console.log("User offered help");

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <div className="snap-start h-screen w-full">
                <NavBar/>
                <Carousel images={images} infinite={true}/>

                { /* <ScrollIndicator targetId="volunteer-section"/> */ }
            </div>

            <div id="volunteer-section" className="snap-start h-screen w-full flex flex-col justify-center">
                <div className="flex flex-grow items-center">
                    <div className="space-y-20">
                        <div className="font-display text-center">
                            <p className="mt-4 text-cadus-black font-bold text-5xl">Devenir bénévole</p>
                            <p className="pt-4 text-wrap text-cadus-grey text-1xl">
                                Vous avez envie de changer les choses et d'apporter votre soutien à ceux qui en ont besoin ?
                                En devenant bénévole, vous contribuerez à améliorer la vie de nombreux bénéficiaires.
                            </p>
                        </div>

                        <div className="flex m-10 space-x-4">
                            <Card quote={"Je ne me sentais plus seule et sans défense grâce à Cadus"}/>
                            <Card quote={"Soutenir un bénéficiaire était une expérience très enrichissante"}/>
                            <Card quote={"Je n'aurais pas réussi à obtenir justice sans Cadus"}/>
                        </div>
                        <Button text="Demander une formation" onClick={onAskFormationClick} className="m-auto block"/>
                    </div>
                </div>

                <ScrollIndicator targetId="promote-section"/>
            </div>

            <div id="promote-section" className="snap-start h-screen w-full flex flex-col justify-center">
                <div className="flex flex-grow items-center">
                    <div className="font-display w-1/2">
                        <p className="ml-32 font-bold mt-4 text-cadus-black text-5xl">Parler de nous</p>
                        <p className="ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Êtes-vous artiste,
                            designer ou imprimeur ? Souhaitez-vous mettre votre talent au service d’une cause qui a du
                            sens ? Nous vous invitons à rejoindre Cadus, une initiative qui soutient les personnes
                            confrontées à des injustices médicales.</p>
                        <p className="ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Votre créativité et votre
                            expertise pourraient faire une réelle différence. Que vous souhaitiez collaborer directement
                            ou que vous ayez des idées pour promouvoir notre mission, chaque contribution compte. Que ce
                            soit par le biais de vos réseaux, de vos créations ou d'autres initiatives, votre aide
                            serait précieuse.</p>
                        <p className="ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Si vous êtes intéressé(e)
                            à offrir votre soutien pour la promotion de Cadus d’une manière ou d’une autre, n’hésitez
                            pas à nous contacter dès maintenant. Ensemble, nous pouvons créer un impact positif et faire
                            avancer cette cause importante !
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <form action="" method="POST" className="w-1/2 space-y-6 rounded-md shadow-lg p-6">
                            <ComboBox id={"cbx-help-type"} label="Type d'aide">
                                <ComboBoxOption value="printing">Impression</ComboBoxOption>
                                <ComboBoxOption value="design">Design</ComboBoxOption>
                                <ComboBoxOption value="ads">Publicité</ComboBoxOption>
                                <ComboBoxOption value="partnership">Partenariat</ComboBoxOption>
                                <ComboBoxOption value="other">Autre</ComboBoxOption>
                            </ComboBox>

                            <TextInput type={InputType.Email} id="promote-email" label="Email address"/>
                            <TextInput type={InputType.Text} id="promote-other" label="Autre"/>

                            <Button text="Proposer mon aide" onClick={onOfferHelpClick}/>
                        </form>
                    </div>
                </div>

                <ScrollIndicator targetId={"donate-section"}/>
            </div>

            <div id="donate-section" className="snap-start h-screen w-full flex">
                <div className="flex items-center flex-row-reverse">
                    <div className="font-display w-1/2">
                        <p className="mr-32 font-bold mt-4 text-cadus-black text-5xl">Donner</p>
                        <p className="mr-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Chez Cadus, nous nous
                            engageons à soutenir les victimes d'injustice médicale, qui souffrent souvent en silence.
                            Grâce à votre don, nous pouvons offrir des consultations juridiques, un soutien
                            psychologique et des campagnes de sensibilisation pour faire entendre leur voix. Chaque euro
                            compte et peut transformer des vies.</p>
                        <p className="mr-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Votre contribution permet
                            également de plaider pour des changements essentiels dans le système de santé. En nous
                            aidant, vous participez à la défense des droits des victimes et à l’amélioration des
                            pratiques médicales. Ensemble, nous pouvons apporter une aide concrète à ceux qui en ont
                            besoin.</p>
                        <p className="mr-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Faites un don aujourd'hui
                            pour faire la différence. Votre générosité montre que chaque vie mérite d’être protégée et
                            respectée. Merci de votre soutien dans cette lutte pour la justice et l’espoir.</p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <DonationForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}
