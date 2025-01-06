import React from 'react';
import mail from "../assets/home/mail.png";
import localisation from "../assets/home/localisation.png";

export default function Footer() {
    const mailAdress = "Association@cadus.fr";

    return (
        <footer className="p-8 bg-cadus-green">
            <div className="flex flex-row flex-wrap">
                <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>

                <div className="flex flex-row flex-wrap mt-2">
                    <div className="flex ml-5">
                        <img src={mail} alt="Icone mail" className="h-6 w-6 mr-2"/>
                        <a href={"mailto:" + mailAdress} className="text-lg">{mailAdress}</a>
                    </div>

                    <div className="flex ml-5">
                        <img src={localisation} alt="Icone localisation" className="h-6 w-6 mr-2"/>
                        <p className="text-lg whitespace-nowrap">
                            8 Rue Jean GIONO, 49100 ANGERS
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-sm max-sm:mt-3">
                Adressez-nous un message et nous vous fixerons un RDV téléphonique, merci
            </p>
        </footer>
    );
}
