import NavBar from "../components/NavBar";
import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import {FormEvent, useState} from "react";
import {isEmailValid} from "../utils/Email";
import Banner, {BannerType} from "../components/Banner";
import {useFormStatus} from "react-dom";
import IApiResponse from "../api/dto/responses/IApiResponse";
import ISignupData from "../api/dto/responses/ISignupData";
import ISignupCredentials from "../api/dto/sent/ISignupCredentials";
import {requests} from "../api/requests/auth";


export default function Register() {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [repassw, setRepassw] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [signupResponse, setSignupResponse] = useState<IApiResponse<ISignupData>>();

    const { pending } = useFormStatus();

    const submitRegistration = async (e: FormEvent) => {
        e.preventDefault();

        const creds: ISignupCredentials = {
            email,
            passw,
            repassw,
            acceptedTerms
        };

        requests.auth.signup(creds)
            .then(setSignupResponse)
            .catch(setSignupResponse);
    }

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>
            <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-[url('assets/login-background.jpg')] bg-center bg-cover">
                <div className="max-w-md w-full mx-auto border text-center bg-white border-gray-300 rounded-2xl p-8">
                    <img src={"cadus.svg"} className="mb-12 rounded-full h-40 w-40 inline-block bg-white"
                         alt="Logo Cadus"/>

                    {
                        signupResponse &&
                        <Banner type={signupResponse.status === 'success' ? BannerType.Success : BannerType.Error}>
                            {signupResponse.message}
                        </Banner>
                    }

                    <form onSubmit={submitRegistration}>
                        <div className="space-y-10">
                            <TextInput type={InputType.Email} id={"register-email"} label={"Adresse e-mail"} onChange={setEmail}/>
                            <TextInput type={InputType.Password} id={"register-password"} label={"Mot de passe"} onChange={setPassw}/>
                            <TextInput type={InputType.Password} id={"register-password-confirm"} label={"Confirmer mot de passe"} onChange={setRepassw}/>

                            <CheckBox id="accept-terms"
                                      checked={acceptedTerms}
                                      onChange={setAcceptedTerms}
                            >
                                J'ai lu et j'accepte les <a className="text-blue-600 font-semibold hover:underline ml-1">conditions d'utilisation</a>.
                            </CheckBox>
                        </div>

                        <Button disabled={!isEmailValid(email) || passw !== repassw || !acceptedTerms || pending}
                                submit={true}
                                className="w-full mt-12 py-3 px-4 text-sm tracking-wider font-semibold">
                            Créer compte
                        </Button>

                        <p className="text-gray-800 text-sm mt-6 text-center">Vous êtes déjà adhérent ?<a
                            href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Connectez-vous</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}