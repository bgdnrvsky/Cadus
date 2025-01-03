import React from "react";

interface CardAvatarProps {
    /* Path to quoted person's avatar */
    avatar: string;

    /* Quoted person's name */
    name: string;

    /* Quoted person's status */
    status: string;
}

export function CardAvatar(props: CardAvatarProps) {
    const {avatar, name, status} = props;

    return (
        <figcaption className="flex items-center space-x-4 mt-6">
            <img className="flex-none size-10 rounded-full object-cover" src={avatar} alt=""/>
            <div className="flex-auto">
                <p className="text-slate-600 font-semibold">{name}</p>
                <p className="text-slate-400">{status}</p>
            </div>
        </figcaption>
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
