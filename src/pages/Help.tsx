import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Button from "../components/Button";
import TextInput, {InputType} from "../components/TextInput";
import ComboBox, {ComboBoxOption} from "../components/ComboBox";

export default function Help() {

    const images = [
        'https://via.placeholder.com/2000x400/ff5733/fff',
        'https://via.placeholder.com/2000x400/33ff57/fff',
        'https://via.placeholder.com/2000x400/5733ff/fff',
    ];

    const onAskFormationClick = () => console.log("User asked for a formation")
    const onOfferHelpClick = () => console.log("User offered help");

    return (
        <div className="h-screen overflow-y-scroll">
            <div className="w-full">
                <Carousel images={images} infinite={true}/>
            </div>

           <div className="h-screen w-full">
               <div className="font-display text-center">
                   <p className="mt-4 text-cadus-black font-bold text-5xl">Devenir bénévole</p>
                   <p className="pt-4 text-wrap text-cadus-grey text-1xl">
                       Vous avez envie de changer les choses et d'apporter votre soutien à ceu qui en ont besoin ?
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

           <div className="h-screen w-full">
               <div className="flex items-center">
                   <div className="font-display w-1/2">
                       <p className="ml-32 font-bold mt-4 text-cadus-black text-5xl">Parler de nous</p>
                       <p className="ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Êtes-vous artiste, designer ou imprimeur ? Souhaitez-vous mettre votre talent au service d’une cause qui a du sens ? Nous vous invitons à rejoindre Cadus, une initiative qui soutient les personnes confrontées à des injustices médicales.</p>
                       <p className="ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Votre créativité et votre expertise pourraient faire une réelle différence. Que vous souhaitiez collaborer directement ou que vous ayez des idées pour promouvoir notre mission, chaque contribution compte. Que ce soit par le biais de vos réseaux, de vos créations ou d'autres initiatives, votre aide serait précieuse.</p>
                       <p className="ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Si vous êtes intéressé(e) à offrir votre soutien pour la promotion de Cadus d’une manière ou d’une autre, n’hésitez pas à nous contacter dès maintenant. Ensemble, nous pouvons créer un impact positif et faire avancer cette cause importante !
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
                           <TextInput type={InputType.Text}  id="promote-other" label="Autre"/>

                           <Button text="Proposer mon aide" onClick={onOfferHelpClick}/>
                       </form>
                   </div>
               </div>
           </div>

           <div className="h-screen w-full">

           </div>
        </div>
    );
}
