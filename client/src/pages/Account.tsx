import {useAccount} from "../hooks/useAccount";
import {useAuth} from "../hooks/useAuth";
import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import {useState} from "react";
import {isEmailValid} from "../utils/Email";
import IApiResponse from "../api/dto/responses/IApiResponse";
import IUpdatedData from "../api/dto/responses/IUpdatedData";
import Banner, {BannerType} from "../components/Banner";

export default function Account() {
    const { accountUpdate, accountDelete, email } = useAccount();
    const {logout} = useAuth();

    const [newEmail, setNewEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updateResponseData, setUpdateResponseData] = useState<IApiResponse<IUpdatedData>>();

    const onDisconnectClicked = () => {
        logout().then(() => {
            window.location.href = "/login";
        });
    }

    const onUpdateAccount = () => {
        accountUpdate({newEmail, newPassword, oldPassword})
            .then(r => setUpdateResponseData(r));
    }

    const onDeleteAccountClicked = () => {
        const confirmed = window.confirm("Êtes-vous sur de vouloir supprimer votre compte ? La suppression sera définitive.")

        if (confirmed) {
            accountDelete().then(() => window.location.href = "/login");
        }
    }

    return (
        <div className="space-y-20 max-w-4xl justify-center mx-auto">
        <div className="flex flex-col space-y-10 p-10">
            { updateResponseData && <Banner type={updateResponseData.status === 'success' ? BannerType.Success : BannerType.Error}>{updateResponseData.message}</Banner> }
            <TextInput id="new-mail" onChange={setNewEmail} type={InputType.Email} label="Nouvel email"/>
            <TextInput id="old-pass" onChange={setOldPassword} type={InputType.Password} label="Mot de passe actuel"/>
            <TextInput id="new-pass" onChange={setNewPassword} type={InputType.Password} label="Nouveau mot de passe"/>
            <Button
                disabled={!isEmailValid(newEmail) || (newEmail === email && newPassword === oldPassword) || newPassword.trim() === '' }
                onClick={onUpdateAccount}>Sauvegarder les changements</Button>
        </div>

        <div className="flex flex-col space-y-10 p-10">

            <button
                onClick={onDisconnectClicked}
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h6.75a2.25 2.25 0 002.25-2.25V15m-6-3h9m0 0l-3-3m3 3l-3 3"
                    />
                </svg>
                Me déconnecter
            </button>

            <button
                onClick={onDeleteAccountClicked}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 9L4.5 9m15 0l-.75 9.375A2.25 2.25 0 0116.515 20.25H7.485a2.25 2.25 0 01-2.235-1.875L4.5 9m15 0l.75-2.25A2.25 2.25 0 0017.625 4.5H6.375a2.25 2.25 0 00-2.625 2.25L4.5 9m4.5-6h6M9 4.5v-1.5m6 1.5v-1.5"
                    />
                </svg>
                Supprimer mon compte
            </button>
        </div>
        </div>
    );
}