/**
 * Properties for the Heading component
 */
interface HeadingProps {
    /* Title of the section */
    title: string;

    /* Lets the user choose how lines are separated in the description for line breaks */
    descriptionLines: string[];

    /* Lets the user choose what words to apply underline effect on */
    underlineSelectors?: Set<string>;
}


export default function Heading(props: HeadingProps) {
    const { title, descriptionLines, underlineSelectors } = props;

    return (
        <div className="font-display">
            <p className="mt-4 text-center text-cadus-black font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{title}</p>

            <div className="pt-4 text-center text-wrap text-cadus-grey text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {
                    descriptionLines.map((line, index) => <p key={index}>{getUnderlinedDescription(line, underlineSelectors)}</p>)
                }
            </div>
        </div>
    );
}

/**
 * Applies an underlined style to words that match one of the underline selectors
 *
 * @param line The line to be modified
 * @param underlineSelectors Collection of sequences to underline
 */
const getUnderlinedDescription = (line: string, underlineSelectors: Set<string> | undefined) => {
    if (!underlineSelectors) {
        return line;
    }

    const parts = splitMulti(line, underlineSelectors);

    return parts.map((part, index) =>
        underlineSelectors.has(part) ? (<span key={index} className="underline underline-offset-4">{part}</span>) : (part)
    );
};


/**
 * Separates text into an array based on multiple separators,
 * keeping the separator in the resulting array.
 *
 * Example:
 * splitMulti("Aren't you a little short for a Stormtrooper ?", ["you", "short", "?"])
 * => ["Aren't ", "you", "a little ", "short", " for a ", "Stormtrooper", "?" ]
 *
 * 
 * @param text Text to be split
 * @param separators A collection of separators to split on
 * @return An array of string containing each separator split from the rest of the string (in the same order as the original string)
 */
function splitMulti(text: string, separators: Set<string>): string[] {
    let result = [];
    let currentWord = "";
    let i = 0;

    while (i < text.length) {
        let matched = false;

        // Check each separator to see if it matches the current part of the string
        for (const sep of separators) {
            if (text.startsWith(sep, i)) {
                if (currentWord) {
                    result.push(currentWord);
                    currentWord = "";
                }
                result.push(sep);
                i += sep.length;
                matched = true;
                break;
            }
        }

        if (!matched) {
            currentWord += text[i];
            i++;
        }
    }

    // Possible leftover
    if (currentWord) {
        result.push(currentWord);
    }

    return result;
}