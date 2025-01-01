import {useState} from "react";
import Button from "./Button";


interface SubmitOnceButtonProps {
    onSubmit: () => Promise<boolean>;

    submitted: boolean;
}

export default function SubmitOnceButton(props: SubmitOnceButtonProps) {
    const { onSubmit, submitted  } = props;
    const [isSubmitted, setSubmitted] = useState(submitted);

    const handleClick = async () => {
        if (!isSubmitted) {
            const success: boolean = await onSubmit();

            if (success)
                setSubmitted(true);
        }
    };

    return (
        <div title={isSubmitted ? "Vous avez déjà répondu à cette question" : ""}>
            <Button onClick={handleClick}
                    disabled={isSubmitted}
                    className={`flex justify-center items-center ${isSubmitted ? "" : "bg-cadus-green-hover"}`}>
                {
                    isSubmitted ?
                        <img src={require("../assets/submitted.png")} alt="submitted" className="w-11 h-11"/> :
                        <img src={require("../assets/submit.png")} alt="submit" className="w-11 h-11"/>
                }
            </Button>
        </div>
    );
};