import NavBar from "../components/NavBar";
import {useAccount} from "../hooks/useAccount";
import {useState} from "react";
import Survey from "./Survey";
import Account from "./Account";
import SurveyResults from "./SurveyResults";


export default function DashBoard() {
    const { email, isAdministrator } = useAccount();
    const [activeTab, setActiveTab] = useState<"Compte" | "Sondage" | "Résultats">("Compte");

    return (
        <div className="h-screen overflow-y-hidden">

        <NavBar/>

        <div className="flex h-screen">
            <aside className="w-64 bg-gray-800 text-white">
                <div className="p-4 text-lg font-bold">Bonjour, {email}</div>

                <nav className="mt-4">
                    <button
                        onClick={() => setActiveTab("Compte")}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${
                            activeTab === "Compte" ? "bg-gray-700" : ""
                        }`}
                    >
                        Compte
                    </button>

                    <button
                        onClick={() => setActiveTab("Comments")}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${
                            activeTab === "Comments" ? "bg-gray-700" : ""
                        }`}
                    >
                        Commentaires
                    </button>

                    {
                        isAdministrator ? (
                            <button
                                onClick={() => setActiveTab("Résultats")}
                                className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${
                                    activeTab === "Résultats" ? "bg-gray-700" : ""
                                }`}
                            >
                                Résulats
                            </button>
                        ) : (
                            <button
                                onClick={() => setActiveTab("Sondage")}
                                className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${
                                    activeTab === "Sondage" ? "bg-gray-700" : ""
                                }`}
                            >
                                Sondage
                            </button>
                        )
                    }

                </nav>
            </aside>

            <main className="flex-1 bg-white">
                {activeTab === "Compte" && <Account/>}
                {activeTab === "Sondage" && <Survey/>}
                {activeTab === "Résultats" && <SurveyResults/>}
            </main>
        </div>
        </div>
    );
}