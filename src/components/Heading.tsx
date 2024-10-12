/**
 *
 */
interface HeadingProps {
    /* */
    title: string;

    /* */
    description: string;

    /* */
    descriptionUnderline?: string;
}


export default function Heading(props: HeadingProps) {
    const { title, description, descriptionUnderline } = props;


    const getUnderlinedDescription = () => {
        if (!descriptionUnderline) {
            return description;
        }

        const parts = description.split(new RegExp(`(${descriptionUnderline})`));

        return parts.map((part, index) =>
            part === descriptionUnderline ? (<span key={index} className="underline underline-offset-4">{part}</span>) : (part)
        );
    };

    return (
        <div>
            <p className="mt-4 text-6xl text-center text-[#1E1E1E] font-extrabold">{title}</p>
            <p className="text-4xl text-center text-[#757575]">{getUnderlinedDescription()}</p>
        </div>
    );
}