import NavBar from "../components/NavBar";
import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import cadusLogo from "../assets/cadus.svg";
import {useState} from "react";
import {isEmailValid} from "../utils/Email";


export default function Login() {
    const [email, setEmail] = useState("");

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>
            <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-[url('assets/login-background.jpg')] bg-center bg-cover">
                <div className="max-w-md w-full mx-auto border text-center bg-white border-gray-300 rounded-2xl p-8">
                    <img src={cadusLogo} className="mb-12 rounded-full h-40 w-40 inline-block bg-white"
                         alt="Logo Cadus"/>

                    <form action="http://localhost:8080/signin" method="POST">
                        <div className="space-y-10">
                            <TextInput type={InputType.Email} id={"login-email"} label={"Adresse e-mail"} onChange={setEmail}/>
                            <TextInput type={InputType.Password} id={"login-password"} label={"Mot de passe"}/>
                        </div>

                        <Button submit={true}
                                disabled={isEmailValid(email)}
                                className="w-full mt-12 py-3 px-4 text-sm tracking-wider font-semibold">
                            Connexion
                        </Button>

                        <p className="text-gray-800 text-sm mt-6 text-center">Vous n'êtes pas adhérent ?<a
                            href="/register" className="text-blue-600 font-semibold hover:underline ml-1">Créez un compte</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}