import Carousel from "../components/Carousel";
import Heading from "../components/Heading";


export default function PageHelp() {

    const images = [
        'https://via.placeholder.com/2000x400/ff5733/fff',
        'https://via.placeholder.com/2000x400/33ff57/fff',
        'https://via.placeholder.com/2000x400/5733ff/fff',
    ];

    return (
        <>
            <Carousel images={images} infinite={true}/>

            <div>
                <Heading
                    title="Devenir bénévole"
                    description="Envie de consacrer quelques heures à l'écoute des bénéficiaires ? Ils ont besoin de vous."
                    descriptionUnderline="vous"
                />
            </div>
        </>
    );
}
