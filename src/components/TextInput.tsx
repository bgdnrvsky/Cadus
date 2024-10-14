/**
 * Properties for the TextInput component
 */
interface TextInputProps {
    /* id for the input HTML element, used to link the corresponding label */
    id: string;

    /* input label */
    label: string;

    /* input type, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
    type: string;
}


export default function TextInput(props: TextInputProps) {
    const {id, label, type} = props;

    return (
        <div className="relative mt-3.5">
            <input id={id} type={type}
                   className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cadus-green"
                   placeholder="placeholder"/>
            <label htmlFor={id}
                   className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                {label}
            </label>
        </div>
    )
}