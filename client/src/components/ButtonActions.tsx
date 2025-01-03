
/**
 * Properties given to the Button component
 */
interface ButtonActionsProps {
    /* Text displayed on the button */
    text: string;

    /* Callback function when the button is clicked */
    onClick: () => void;

    /* Additional css class' to apply on the button */
    className?: string;
}


export default function ButtonActions(props: ButtonActionsProps) {
    const { text, onClick, className} = props;

    const styles = className ?? '';

    return (
        <button
            onClick={onClick}
        >
            {text}
        </button>
    );
}