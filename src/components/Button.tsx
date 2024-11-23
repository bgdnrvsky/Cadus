import React from "react";


/**
 * Properties given to the Button component
 */
interface ButtonProps {
    /* Callback function when the button is clicked */
    onClick?: () => void;

    /* Additional css class' to apply on the button */
    className?: string;

    /* Children HTML elements */
    children: React.ReactNode;

    disabled?: boolean;
}


export default function Button(props: ButtonProps) {
    const { onClick, className, children, disabled } = props;

    const styles = className ?? '';

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${
                disabled 
                    ? "cursor-not-allowed bg-gray-300"
                    : "bg-transparent hover:text-white hover:bg-cadus-green transition hover:shadow-2xl"
            } text-cadus-green border-2 border-cadus-green  px-6 h-14 font-semibold rounded-full ${styles}`}
        >
            {children}
        </button>
    );
}