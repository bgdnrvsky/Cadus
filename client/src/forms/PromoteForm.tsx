import ComboBox, {ComboBoxOption} from "../components/ComboBox";
import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import {ChangeEvent, useState} from "react";


export default function PromoteForm() {
    let [email, setEmail] = useState("");
    let [emailValid, setEmailValid] = useState(false);
    let [otherHelp, setOtherHelp] = useState(false);
    let [otherHelpValid, setOtherHelpValid] = useState(true);


    const onComboValueChanged = (value: string) => {
        const shown: boolean = value === 'other';
        setOtherHelp(shown);

        /*
         * By default, invalid when the "Aide autre" field is shown,
         *             valid when the "Aide autre" field is not shown
         */
        setOtherHelpValid(!shown);
    }

    const onOtherHelpChanged = (value: string) => {
        setOtherHelpValid(value.trim() !== '');
    }

    const onEmailChanged = (value: string) => {
        setEmail(value);
        setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    }

    return (
        <form action="" method="POST" className="bg-white space-y-6 rounded-md shadow-lg p-6">
            <ComboBox id={"cbx-help-type"} label="Type de promotion" onChange={onComboValueChanged}>
                <ComboBoxOption value="printing">Impression</ComboBoxOption>
                <ComboBoxOption value="design">Design</ComboBoxOption>
                <ComboBoxOption value="ads">Publicité</ComboBoxOption>
                <ComboBoxOption value="partnership">Partenariat</ComboBoxOption>
                <ComboBoxOption value="other">Autre</ComboBoxOption>
            </ComboBox>

            {
                otherHelp && <TextInput type={InputType.Text} id="promote-other" label="Aide autre" onChange={onOtherHelpChanged}/>
            }

            <TextInput type={InputType.Email} id="promote-email" label="Adresse e-mail" onChange={onEmailChanged}/>
            <TextInput type={InputType.Text} id="promote-message" label="Message"/>

            <Button disabled={!emailValid || !otherHelpValid} className="mx-auto block">Proposer mon aide</Button>
        </form>
    );
}