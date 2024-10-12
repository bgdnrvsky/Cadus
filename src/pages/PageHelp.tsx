import Carousel from "../components/Carousel";

export default function PageHelp() {

    const images = [
        'https://via.placeholder.com/2000x400/ff5733/fff',
        'https://via.placeholder.com/2000x400/33ff57/fff',
        'https://via.placeholder.com/2000x400/5733ff/fff',
    ];

    return (
        <>
            <Carousel images={images} infinite={true}></Carousel>
            <h1>Nous aider</h1>
        </>
    );
}
