import ComboBox, {ComboBoxOption} from "./ComboBox";
import TextInput, {InputType} from "./TextInput";
import Button from "./Button";
import {ChangeEvent, useState} from "react";


export default function PromoteForm() {
    let [canSend, setCanSend] = useState(false);
    let [email, setEmail] = useState("");


    const handleEmailChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setCanSend(isEmailValid(email));
    }

    const isEmailValid = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <form action="" method="POST" className="w-1/2 bg-white space-y-6 rounded-md shadow-lg p-6">
            <ComboBox id={"cbx-help-type"} label="Type d'aide">
                <ComboBoxOption value="printing">Impression</ComboBoxOption>
                <ComboBoxOption value="design">Design</ComboBoxOption>
                <ComboBoxOption value="ads">Publicité</ComboBoxOption>
                <ComboBoxOption value="partnership">Partenariat</ComboBoxOption>
                <ComboBoxOption value="other">Autre</ComboBoxOption>
            </ComboBox>

            <TextInput type={InputType.Email} id="promote-email" label="Adresse e-mail" onChange={handleEmailChanged}/>
            <TextInput type={InputType.Text} id="promote-message" label="Message"/>

            <Button disabled={!canSend} className="mx-auto block">Proposer mon aide</Button>
        </form>
    );
}