import React from "react";

interface CheckBoxProps {
    id: string;

    checked: boolean

    onChange?: (checked: boolean) => void;

    children: React.ReactNode;
}


export default function CheckBox(props: CheckBoxProps) {
    let { id, checked, onChange, children} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.checked);
        }
    }

    return (
        <div className="flex items-center">
            <input id={id}
                   name={id}
                   type="checkbox"
                   checked={checked}
                   onChange={handleChange}
                   className="h-4 w-4 shrink-0 accent-cadus-green-hover border-gray-300 rounded"/>
            <label htmlFor={id} className="text-gray-800 ml-3 block text-sm">{children}</label>
        </div>
    );
}