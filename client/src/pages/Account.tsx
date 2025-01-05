import {useAccount} from "../hooks/useAccount";
import {useAuth} from "../hooks/useAuth";

export default function Account() {
    const { accountDelete } = useAccount();
    const {logout} = useAuth();

    const onDisconnectClicked = () => {
        logout().then(() => window.location.href = "/login");
    }

    const onDeleteAccountClicked = () => {
        const confirmed = window.confirm("Êtes-vous sur de vouloir supprimer votre compte ? La suppression sera définitive.")

        if (confirmed) {
            accountDelete().then(() => window.location.href = "/login");
        }
    }

    return (
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
    );
}