import React, {ReactElement, useEffect, useState} from "react";


interface CarouselSlideProps {
    image: string;
    children: React.ReactNode;
}

export function CarouselSlide(props: CarouselSlideProps) {
    const { image, children } = props;

    return (
        <div className="relative flex-shrink-0 flex items-center justify-center w-full h-full bg-cover bg-center" style={{backgroundImage: `linear-gradient(360deg, #222, rgba(34, 34, 34, 0)), url(${image})`, backgroundPosition: "0px 0px 50% 50%"}}>
            {children}
        </div>
    )
}


/**
 * Parameters for the Carousel component
 */
interface CarouselProps {
    /* Should clicking prev/next button get you back to last/first image correspondingly ? */
    infinite: boolean;

    children: ReactElement<typeof CarouselSlide>[];
}

/**
 *
 * @constructor
 */
export default function Carousel(props: CarouselProps) {
    const { infinite, children } = props;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    /**
     * Go to previous image in the slide
     */
    const imageSlidePrev = () => {
        let newIndex: number = currentSlideIndex - 1;

        if (newIndex < 0) {
            newIndex = infinite ? children.length - 1 : 0;
        }

        setCurrentSlideIndex(newIndex);
    }

    /**
     * Go the next image in the slide
     */
    const imageSlideNext = () => {
        let newIndex: number = currentSlideIndex + 1;

        if (newIndex >= children.length) {
            newIndex = infinite ? 0 : children.length - 1;
        }

        setCurrentSlideIndex(newIndex);
    }

    /**
     * without useEffect, the interval would be created on every render
     * and never cleaned up, resulting in multiple interval stacking up
     */
    useEffect(() => {
        /* Called when the component is added to the DOM */
        const interval = setInterval(imageSlideNext, 5000);

        /* Cleanup callback when it is removed */
        return () => clearInterval(interval);
    });

    /**
     * Renders the carousel
     */
    return (
        <div className="overflow-hidden relative h-2/3">
            <div
                className="flex transition ease-out duration-1000 w-full h-full"
                style={{
                    transform: `translateX(-${currentSlideIndex * 100}%)`,
                }}
            >
                {children}
            </div>

            <button type="button" className="text-white absolute top-0 start-0 flex items-center justify-center h-full px-4 group focus:outline-none">
                <svg onClick={imageSlidePrev} className="w-4 h-4 rtl:rotate-180 hover:text-black transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>
                <span className="sr-only">Previous</span>
            </button>

            <button type="button" className="text-white absolute top-0 end-0 flex items-center justify-center h-full px-4 group focus:outline-none">
                <svg onClick={imageSlideNext} className="w-4 h-4 rtl:rotate-180 hover:text-black transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>
                <span className="sr-only">Next</span>
            </button>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {
                    children.map((_, slideIndex) => {
                            return (
                                <div
                                    onClick={() => setCurrentSlideIndex(slideIndex)}
                                    key={"circle" + slideIndex}
                                    className={`rounded-full w-3 h-3 cursor-pointer  ${
                                        slideIndex === currentSlideIndex ? "bg-white" : "bg-gray-500"
                                    }`}
                                ></div>
                            );
                        }
                    )}
            </div>
        </div>
    );
}








