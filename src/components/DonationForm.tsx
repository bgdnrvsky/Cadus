import {useState} from "react";
import Button from "./Button";


export default function DonationForm() {
    const [likeColor, setLikeColor] = useState('grey');

    const onLikeClicked = () => {
        likeColor !== 'red' ? setLikeColor('red') : setLikeColor('grey');
    }

    const amounts: number[] = [1, 2, 5, 10, 20];

    return (
        <div className="group flex rounded-md shadow-lg overflow-hidden bg-white">
            <div className="flex-none w-48 relative">
                <img src={require("../assets/patient.jpg")} alt="patient" className="absolute rounded-l-md inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
            </div>
            <form className="flex-auto p-6">
                <div className="flex justify-between mt-4 mb-6 pb-6 border-b border-slate-200 text-sm">
                    {
                        amounts.map((amount) => <AmountRadioButton amount={amount}/>)
                    }
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">

                    <Button>Aider une victime</Button>
                    <Button className="px-0 flex-none"
                        onClick={onLikeClicked}>
                        <svg width="20" height="20" fill={likeColor} aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                        </svg>
                    </Button>
                </div>
                <p className="text-sm text-slate-700">
                    Une question ? <a href="#" className="text-blue-600 hover:underline">Contactez nous</a>
                </p>
            </form>
        </div>
    );
}

function AmountRadioButton(props : {amount: number}) {
    const { amount } = props;
    return (
        <label key={amount}>
            <input className="sr-only peer" name="size" type="radio" value={amount.toString()}/>
            <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-cadus-green peer-checked:text-white">
                {amount} €
            </div>
        </label>
    );
}