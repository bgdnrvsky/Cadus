import React from 'react';
import mail from "../assets/home/mail.png";
import localisation from "../assets/home/localisation.png";

export default function Footer() {
    return (
        <footer className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>

            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <img src={mail} alt="Icone mail" className="h-6 w-6"/>
                    <p className="text-lg">Association@cadus.fr</p>
                </div>

                <div className="flex items-center space-x-2">
                    <img src={localisation} alt="Icone localisation" className="h-6 w-6"/>
                    <p className="text-lg whitespace-nowrap">
                        8 Rue Jean GIONO, 49100 ANGERS
                    </p>
                </div>
            </div>

            <p className="mt-8 text-sm">
                Pour nous contacter, adressez-nous un message, nous vous fixerons un RDV téléphonique. Merci.
            </p>
        </footer>
    );
}
