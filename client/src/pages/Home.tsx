import Footer from "../components/Footer";
import img1 from "../assets/home/img1.png";
import NavBar from "../components/NavBar";
import LinkButton from "../components/LinkButton";
import {Card, CardQuote} from "../components/Card";

export default function Home() {
    const assistanceList = [
        "Conseiller, aider et défendre des usagers de la santé sur le plan juridique et judiciaire.",
        "Aide à obtenir votre dossier médical.",
        "Aide à la constitution de votre demande d’indemnisation",
        "Conseille tout au long de votre parcours jusqu’à l’indemnisation.",
        "Participer à l’information des victimes des accidents médicaux et de leurs proches, et leur apporter de l'aide",
        "Participer directement ou indirectement à la défense judiciaire des patients infectés victimes d’un accident médical, d’une infection nosocomiale.",
        "Assurer la défense et les intérêts des usagers du système de santé d’une affection iatrogène ou d’un aléa thérapeutique.",
        "Représenter les usagers dans les différentes instances de santé publiques et privées, les instances administratives, sociales.",
    ];

    const aideList = [
        "Conseils et assistance pour l’obtention du dossier et l’élaboration de votre demande d’indemnisation.",
        "Nos conseillers vont étudier votre dossier médical pour déterminer l’existence des différents préjudices.",
        "Conseils pour obtenir une aide juridictionnelle et l’assistance juridique prévue dans les contrats d’assurance.",
        "Des informations sur vos droits en tant que victime.",
        "Aide à l’accès et l’obtention du dossier médical.",
        "Aide à l’élaboration de votre dossier de recours.",
    ];

    return (
        <div>
            <NavBar/>
            <div className="flex flex-col-reverse md:flex-row items-center justify-around p-4">
                <img src={"cadus.svg"} className="h-96 w-72 bg-white hidden md:block" alt="Logo Cadus"/>
                <div className="text-center w-1/2 ">
                    <h3 className="text-2xl font-bold">
                        Vous êtes victime d'erreurs médicales ?
                    </h3>
                    <p className="text-lg mt-2">
                        Cadus conseille les victimes dans les actions
                        contentieuses pour l'obtention de l'indemnisation des dommages
                        subis.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <LinkButton to="/nousaider" className="w-40">Nous aider</LinkButton>
                <LinkButton to="/livredor" className="w-40">Laisser un mot</LinkButton>
            </div>

            <div className="flex justify-around mt-24">
                <img src={img1} className="w-full h-[450px] object-cover" alt="Image 1"/>


            </div>

            <div className="text-center p-8">
                <h2 className="text-2xl font-bold mt-16 mb-4 inline-block brush-underline ">Notre But</h2>

                {assistanceList.map((item, index) => (
                    <p key={index} className="mb-2">
                        {item}
                    </p>
                ))}
            </div>

            <div className="text-center mt-14">
                <h2 className="text-2xl font-bold mb-4 inline-block brush-underline">L'aide apportée</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center mt-8 mb-14 p-8">
                {
                    aideList.map((item, index) => (
                        <Card key={index}>
                            <CardQuote>{item}</CardQuote>
                        </Card>
                    ))
                }
            </div>
            <Footer/>
        </div>
    );
}
