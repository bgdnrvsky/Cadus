import React from "react";

interface CardStatusProps {
    /* Quoted person's name */
    name: string;

    /* Quoted person's status */
    status: string;
}

export function CardStatus(props: CardStatusProps) {
    const {name, status} = props;

    return (
        <div className="flex-auto">
            <p className="text-slate-600 font-semibold">{name}</p>
            <p className="text-slate-400">{status}</p>
        </div>
    );
}

interface CardFigureProps {
    children: React.ReactNode;
}

export function CardFigure(props: CardFigureProps) {
    const {children} = props;

    return (
        <figcaption className="flex items-center space-x-4 mt-6">
            {children}
        </figcaption>
    );
}

interface CardPhotoProps {
    /* Path to quoted person's avatar */
    avatar: string;
}

export function CardPhoto(props: CardPhotoProps) {
    const {avatar} = props;

    return (
        <img className="flex-none size-10 rounded-full object-cover" src={avatar} alt="Avatar"/>
    );
}

interface CardQuoteProps {
    children: React.ReactNode;
}

export function CardQuote(props: CardQuoteProps) {
    const {children} = props;

    return (
        <blockquote className="text-center text-base md:text-3xl font-semibold">
            <p>{children}</p>
        </blockquote>
    );
}

interface CardProps {
    children: React.ReactNode;
}

export function Card(props: CardProps) {
    const {children} = props;

    return (
        <figure className="h-fit rounded-[30px] border bg-cadus-card shadow-md p-5">
            {children}
        </figure>
    );
}