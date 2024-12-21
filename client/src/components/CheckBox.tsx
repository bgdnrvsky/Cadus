import React from "react";

interface CheckBoxProps {
    id: string;

    children: React.ReactNode;
}


export default function CheckBox(props: CheckBoxProps) {

    let { id, children} = props;

    return (
        <div className="flex items-center">
            <input id={id} name={id} type="checkbox"
                   className="h-4 w-4 shrink-0 accent-cadus-green-hover border-gray-300 rounded"/>
            <label htmlFor={id} className="text-gray-800 ml-3 block text-sm">{children}</label>
        </div>
    );
}