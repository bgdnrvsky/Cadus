import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button";


/**
 * Properties given to the Button component
 */
interface LinkButtonProps {
    /* Where does the button link to */
    to: string;

    /* Additional css class' to apply on the button */
    className?: string;

    /* Children HTML elements */
    children: React.ReactNode;
}


export default function LinkButton(props: LinkButtonProps) {
    const { to, className, children } = props;

    return (
        <Link to={to}><Button className={className}>{children}</Button></Link>
    );
}