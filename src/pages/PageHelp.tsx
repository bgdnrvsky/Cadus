import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import Card from "../components/Card";


export default function PageHelp() {

    const images = [
        'https://via.placeholder.com/2000x400/ff5733/fff',
        'https://via.placeholder.com/2000x400/33ff57/fff',
        'https://via.placeholder.com/2000x400/5733ff/fff',
    ];

    const descriptionVolunteer = [
        "Envie de consacrer quelques heures à l'écoute des bénéficiaires ?",
        "N'attendez pas, ils ont besoin de vous !"
    ];

    const descriptionPromote = [
        "Vous êtes artiste, designer, ou imprimeur ?",
        "Cadus a besoin de vos talents de communication afin d'accroître sa visibilité"
    ];

    const descriptionDonate = [
        "Votre soutien fera la différence.",
        "Aidez une victime à obtenir l'indemnisation qu'elle mérite"
    ];

    return (
        <>
            <Carousel images={images} infinite={true}/>

            <div className="space-y-96">
                <div>
                    <Heading
                        title="Devenir bénévole"
                        descriptionLines={descriptionVolunteer}
                        descriptionUnderline="vous"
                    />

                    <div className="flex justify-evenly m-16 space-x-24">
                        <Card quote={"Je ne me sentais plus seule et sans défense grâce à Cadus"}/>
                        <Card quote={"Soutenir un bénéficiaire était une expérience très enrichissante"}/>
                        <Card quote={"Je n'aurais pas réussi à obtenir justice sans Cadus"}/>
                    </div>
                </div>

                <div>
                    <Heading
                        title="Parler de nous"
                        descriptionLines={descriptionPromote}
                        descriptionUnderline="vos"
                    />
                </div>

                <div>
                    <Heading
                        title="Donner"
                        descriptionLines={descriptionDonate}
                        descriptionUnderline="Votre"
                    />
                </div>
            </div>
        </>
    );
}
