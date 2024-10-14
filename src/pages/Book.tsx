import Heading from "../components/Heading";
import Card from "../components/Card";

export default function Book() {
    return (
        <>
            <Heading title="Livre d'or"></Heading>

            <div className="mx-4 mt-1.5 grid grid-flow-dense grid-cols-3 gap-x-4 gap-y-6">
                <Card quote="Mme H., je tiens à vous remercier du fond du coeur de votre soutien, de votre patience, de votre persévérance et de votre écoute durant ces longues années de combat."></Card>
                <Card quote="Je tiens à vous remercier très chaleureusement pour tous les conseils que vous m’avez apportés depuis le début de cette affaire et je ne manquerai pas de faire à nouveau appel à votre association en cas de besoin"></Card>
                <Card quote="Sans vos conseils nous serions peut-être pas arrivés à cette indemnisation"></Card>
                <Card quote="L’Association et vous même vous avez su nous entendre, et nous aider à faire reconnaître l’erreur médicale c’est pour la mémoire de mon papa que nous avons fait appel à vous"></Card>
                <Card quote="Merci mille fois de votre gentillesse et de votre dévouement à chacun de mes contacts"></Card>
                <Card quote="Merci également à toute votre équipe pour son dévouement au service de personnes comme moi"></Card>
            </div>
        </>
    );
}
