
interface CardProps {
    /* Quote displayed in the card */
    quote: string;
}


export default function Card(props: CardProps) {

    const { quote } = props;

    return (
        <figure className="h-fit rounded-[30px] border bg-white shadow-md p-4">
            <blockquote className="text-center text-2xl sm:text-3xl italic font-semibold">
                <p>"{quote}"</p>
            </blockquote>

            <figcaption className="flex items-center space-x-4 mt-4">
                <img className="flex-none size-10 rounded-full object-cover"
                     src={require('../assets/profile_pictures/avatar1.jpg')} alt=""/>

                <div className="flex-auto">
                    <p className="text-slate-600 font-semibold">Huguette - 74 ans</p>
                    <p className="text-slate-400">Bénéficiaire</p>
                </div>
            </figcaption>
        </figure>
    );
}