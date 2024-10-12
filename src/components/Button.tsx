
/**
 * Properties given to the Button component
 */
interface ButtonProps {
    /* Text displayed on the button */
    text: string;

    /* Callback function when the button is clicked */
    onClick: () => void;

    /* Additional css class' to apply on the button */
    className?: string;
}


export default function Button(props: ButtonProps) {
    const { text, onClick, className} = props;

    const styles = className ?? '';

    return (
        <button
            onClick={onClick}
            className={`bg-cadus-green hover:bg-cadus-green-hover hover:shadow-2xl px-6 h-14 text-white font-semibold rounded-full ${styles}`}
        >
            {text}
        </button>
    );
}