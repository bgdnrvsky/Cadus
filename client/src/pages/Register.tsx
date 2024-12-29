import NavBar from "../components/NavBar";
import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import cadusLogo from "../assets/cadus.svg";
import CheckBox from "../components/CheckBox";
import {FormEvent, useState} from "react";
import {isEmailValid} from "../utils/Email";
import Banner, {BannerType} from "../components/Banner";
import {useFormStatus} from "react-dom";


export default function Register() {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [repassw, setRepassw] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [registerResponse, setRegisterResponse] = useState<{status: string, message: string}>();

    const { pending } = useFormStatus();

    const submitRegistration = async (e: FormEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: { "Content-Type": "text/plain" }, // use text/plain to prevent CORS protocol sending OPTIONS requests
            body: JSON.stringify({
                "register-email": email,
                "register-password": passw,
                "register-password-confirm": repassw,
                "accept-terms": acceptedTerms
            })
        });

        response.json().then((json) => {
            setRegisterResponse({status: json['status'], message: json['message']});
        });
    }

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>
            <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-[url('assets/login-background.jpg')] bg-center bg-cover">
                <div className="max-w-md w-full mx-auto border text-center bg-white border-gray-300 rounded-2xl p-8">
                    <img src={cadusLogo} className="mb-12 rounded-full h-40 w-40 inline-block bg-white"
                         alt="Logo Cadus"/>

                    {
                        registerResponse &&
                        <Banner type={registerResponse.status === 'success' ? BannerType.Success : BannerType.Error}>
                            {registerResponse.message}
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