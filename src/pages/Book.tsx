import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Book() {
    return (
        <>
            <NavBar/>

            <div className="font-display">
                <p className="mt-4 text-center text-cadus-black font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Livre d'or</p>
            </div>

            <div className="mx-8 mb-10 mt-10 grid grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                <Card avatar={require("../assets/profile_pictures/avatar1.jpg")}
                      name="Huguette"
                      status="Bénéficiaire"
                      quote="Mme H., je tiens à vous remercier du fond du coeur de votre soutien, de votre patience, de votre persévérance et de votre écoute durant ces longues années de combat."/>
                <Card avatar={require("../assets/profile_pictures/avatar2.jpg")}
                      name="Jane"
                      status="Petite fille d'une des patientes"
                      quote="Je tiens à vous remercier très chaleureusement pour tous les conseils que vous m’avez apportés depuis le début de cette affaire et je ne manquerai pas de faire à nouveau appel à votre association en cas de besoin"/>
                <Card avatar={require("../assets/profile_pictures/avatar3.jpg")}
                      name="Jacqueline"
                      status="La soeur d'une des patientes"
                      quote="L’Association et vous même vous avez su nous entendre, et nous aider à faire reconnaître l’erreur médicale c’est pour la mémoire de mon papa que nous avons fait appel à vous"/>
                <Card avatar={require("../assets/profile_pictures/avatar4.jpg")}
                      name="Marco"
                      status="Le fils d'un des patients"
                      quote="Sans vos conseils nous serions peut-être pas arrivés à cette indemnisation"/>
                <Card avatar={require("../assets/profile_pictures/avatar5.jpg")}
                      name="Elea"
                      status="Bénéficiaire"
                      quote="Merci mille fois de votre gentillesse et de votre dévouement à chacun de mes contacts"/>
                <Card avatar={require("../assets/profile_pictures/avatar6.jpg")}
                      name="Justine"
                      status="Patiente"
                      quote="Merci également à toute votre équipe pour son dévouement au service de personnes comme moi"/>
            </div>
        </>
    );
}
