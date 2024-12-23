import {useState} from "react";
import Button from "./Button";


interface SubmitOnceButtonProps {
    onSubmit: () => void;
}

export default function SubmitOnceButton(props: SubmitOnceButtonProps) {
    const [isClicked, setIsClicked] = useState(false);

    const { onSubmit  } = props;

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
            onSubmit();
        }
    };

    return (
        <div title={isClicked ? "Vous avez déjà répondu à cette question" : ""}>
            <Button onClick={handleClick}
                    disabled={isClicked}
                    className={`flex justify-center items-center ${isClicked ? "" : "bg-cadus-green-hover"}`}>
                {
                    isClicked ?
                        <img src={require("../assets/submitted.png")} alt="submitted" className="w-11 h-11"/> :
                        <img src={require("../assets/submit.png")} alt="submit" className="w-11 h-11"/>
                }
            </Button>
        </div>
    );
};