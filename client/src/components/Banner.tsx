import {useState} from "react";

export enum BannerType {
    Error,
    Success,
    Info,
}

interface BannerProps {
    type: BannerType,
    
    children: React.ReactNode;
}


export default function Banner(props: BannerProps) {
    const {type, children} = props;

    let [isShown, setIsShown] = useState(true);

    const colorClasses = {
        [BannerType.Success]: {
            bg: "bg-green-100",
            border: "border-green-400",
            text: "text-green-700",
            icon: "text-green-500",
        },
        [BannerType.Error]: {
            bg: "bg-red-100",
            border: "border-red-400",
            text: "text-red-700",
            icon: "text-red-500",
        },
        [BannerType.Info]: {
            bg: "bg-indigo-100",
            border: "border-indigo-400",
            text: "text-indigo-700",
            icon: "text-indigo-500",
        },
    };

    const classes = colorClasses[type] || colorClasses[BannerType.Info];

    return (
        <>
        {
            isShown && (
                <div className={`${classes.bg} border ${classes.border} ${classes.text} px-4 py-3 rounded relative`} role="alert">
                    {children}
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg onClick={() => setIsShown(false)}
                         className={`fill-current h-6 w-6 ${classes.icon}`} role="button" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                    </span>
                </div>
            )}
        </>
    );
}