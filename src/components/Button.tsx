import React from "react";


/**
 * Properties given to the Button component
 */
interface ButtonProps {
    /* Callback function when the button is clicked */
    onClick: () => void;

    /* Additional css class' to apply on the button */
    className?: string;

    /* Children HTML elements */
    children: React.ReactNode;
}


export default function Button(props: ButtonProps) {
    const { onClick, className, children } = props;

    const styles = className ?? '';

    return (
        <button
            onClick={onClick}
            className={`text-white bg-transparent border-2 border-cadus-green hover:text-white hover:bg-cadus-green transition hover:shadow-2xl px-6 h-14 font-semibold rounded-full ${styles}`}
        >
            {children}
        </button>
    );
}