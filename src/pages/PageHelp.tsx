import Carousel from "../components/Carousel";
import Heading from "../components/Heading";


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

            <div className="mt-40">
                <Heading
                    title="Devenir bénévole"
                    descriptionLines={descriptionVolunteer}
                    descriptionUnderline="vous"
                />
            </div>

            <div className="mt-96">
                <Heading
                    title="Parler de nous"
                    descriptionLines={descriptionPromote}
                    descriptionUnderline="vos"
                />
            </div>

            <div className="mt-96">
                <Heading
                    title="Donner"
                    descriptionLines={descriptionDonate}
                    descriptionUnderline="Votre"
                />
            </div>
        </>
    );
}
