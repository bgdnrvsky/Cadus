/**
 *
 */
interface HeadingProps {
    /* */
    title: string;

    /* */
    descriptionLines: string[];

    /* */
    descriptionUnderline?: string;
}


export default function Heading(props: HeadingProps) {
    const { title, descriptionLines, descriptionUnderline } = props;


    const getUnderlinedDescription = (line: string) => {
        if (!descriptionUnderline) {
            return line;
        }

        const parts = line.split(new RegExp(`(${descriptionUnderline})`));

        return parts.map((part, index) =>
            part === descriptionUnderline ? (<span key={index} className="underline underline-offset-4">{part}</span>) : (part)
        );
    };

    return (
        <div>
            <p className="mt-4 text-6xl text-center text-cadus-black font-extrabold">{title}</p>

            <div className="pt-4 text-4xl text-center text-wrap text-cadus-grey">
                {
                    descriptionLines.map((line, index) =>
                        <p key={index}>{getUnderlinedDescription(line)}</p>
                    )
                }
            </div>
        </div>
    );
}