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
        <div className="font-display">
            <p className="mt-4 text-center text-cadus-black font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{title}</p>

            <div className="pt-4 text-center text-wrap text-cadus-grey text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {
                    descriptionLines.map((line, index) =>
                        <p key={index}>{getUnderlinedDescription(line)}</p>
                    )
                }
            </div>
        </div>
    );
}