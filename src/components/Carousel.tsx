import {useEffect, useState} from "react";


/**
 * Parameters for the Carousel component
 */
interface CarouselProps {
    /* Paths of the images to be displayed */
    images: string[];

    /* Should clicking prev/next button get you back to last/first image correspondingly ? */
    infinite: boolean;
}

/**
 *
 * @constructor
 */
export default function Carousel(props: CarouselProps) {
    const { images, infinite } = props;
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    /**
     * Go to previous image in the slide
     */
    const imageSlidePrev = () => {
        let newIndex: number = currentImgIndex - 1;

        if (newIndex < 0) {
            newIndex = infinite ? images.length - 1 : 0;
        }

        setCurrentImgIndex(newIndex);
    }

    /**
     * Go the next image in the slide
     */
    const imageSlideNext = () => {
        let newIndex: number = currentImgIndex + 1;

        if (newIndex >= images.length) {
            newIndex = infinite ? 0 : images.length - 1;
        }

        setCurrentImgIndex(newIndex);
    }

    /**
     * without useEffect, the interval would be created on every render
     * and never cleaned up, resulting in multiple interval stacking up
     */
    useEffect(() => {
        /* Called when the component is added to the DOM */
        const interval = setInterval(imageSlideNext, 3000);

        /* Cleanup callback when it is removed */
        return () => clearInterval(interval);
    });

    /**
     * Renders the carousel
     */
    return (
        <div className="overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-1000`}
                style={{
                    transform: `translateX(-${currentImgIndex * 100}%)`,
                }}
            >
                {images.map((image) => <img src={image} alt=""/>)}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={imageSlidePrev}
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
                <button onClick={imageSlideNext}
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {
                    images.map((_, imageIndex) => {
                            return (
                                <div
                                    onClick={() => setCurrentImgIndex(imageIndex)}
                                    key={"circle" + imageIndex}
                                    className={`rounded-full w-3 h-3 cursor-pointer  ${
                                        imageIndex === currentImgIndex ? "bg-white" : "bg-gray-500"
                                    }`}
                                ></div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}








