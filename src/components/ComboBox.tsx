import React from "react";


/**
 * Properties for the selectable options of the ComboBox component
 */
interface ComboBoxOptionProps {
    /* HTML value attribute for the "option" tag */
    value: string;

    /* Children HTML elements */
    children: React.ReactNode;
}

export function ComboBoxOption(props: ComboBoxOptionProps) {
    const { value, children } = props;

    // TODO: style
    return <option value={value}>{children}</option>;
}

/**
 * Properties for the ComboBox component
 */
interface ComboBoxProps {
    /* Id of the "select" tag: use as the "for" attribute to link the label to the combo-box */
    id: string;

    /* Label that will be displayed on top of the combo-box */
    label: string;

    /* Children HTML elements */
    children: React.ReactNode;
}

export default function ComboBox(props: ComboBoxProps) {
    const { id, label, children } = props;

    return (
        <div>
            <label htmlFor={id} className="text-gray-600 text-sm">{label}</label>

            <select id={id} className="block py-1 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cadus-green peer">
                    {
                        React.Children.map(children, (child) =>
                            (React.isValidElement(child) ? React.cloneElement(child, {}) : null)
                        )
                    }
            </select>
        </div>
)
}
