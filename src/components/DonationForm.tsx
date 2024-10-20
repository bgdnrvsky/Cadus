import {useState} from "react";


export default function DonationForm() {
    const [likeColor, setLikeColor] = useState('grey');

    const onLikeClicked = () => {
        likeColor !== 'red' ? setLikeColor('red') : setLikeColor('grey');
    }

    return (
        <div className="flex rounded-[30px] shadow-lg">
            <div className="flex-none w-48 relative">
                <img src={require("../assets/patient.jpg")} alt="patient" className="absolute rounded-l-[30px] inset-0 w-full h-full object-cover"
                     loading="lazy"/>
            </div>
            <form className="flex-auto p-6">
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm">
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="1"/>
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-cadus-green peer-checked:text-white">
                                1 €
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="2"/>
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-cadus-green peer-checked:text-white">
                                2 €
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="5"/>
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-cadus-green peer-checked:text-white">
                                5 €
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="10"/>
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-cadus-green peer-checked:text-white">
                                10 €
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="20"/>
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-cadus-green peer-checked:text-white">
                                20 €
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <button className="px-6 font-semibold rounded-md bg-cadus-green hover:bg-cadus-green-hover hover:shadow-md text-white" type="submit">
                        Aider une victime
                    </button>
                    <button
                        className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                        type="button" aria-label="Like" onClick={onLikeClicked}>
                        <svg width="20" height="20" fill={likeColor} aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-slate-700">
                    Une question ? <a href="#" className="text-blue-600 hover:underline">Contactez nous</a>
                </p>
            </form>
        </div>
    );
}