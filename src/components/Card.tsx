
interface CardProps {
    /* Quote displayed in the card */
    quote: string;

		/* Filepath to the image */
		path: string;

		/* Paragraph text */
		text: string;

		/* Underparagraph text */
		subtext: string;
}


export default function Card(props: CardProps) {

    const { quote, path, text, subtext } = props;

    return (
        <figure className="h-fit rounded-[30px] border bg-cadus-card shadow-md p-5">
            <blockquote className="text-center text-3xl font-semibold">
                <p>«{quote}»</p>
            </blockquote>

            <figcaption className="flex items-center space-x-4 mt-6">
                <img className="flex-none size-10 rounded-full object-cover" src={path} alt=""/>
                <div className="flex-auto">
                    <p className="text-slate-600 font-semibold">{text}</p>
                    <p className="text-slate-400">{subtext}</p>
                </div>
            </figcaption>
        </figure>
    );
}