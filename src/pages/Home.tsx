import Footer from "../components/Footer";
import cadusLogo from "../assets/cadus.svg";
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.jpg";
import img3 from "../assets/home/img3.jpeg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import LinkButton from "../components/LinkButton";

export default function Home() {
  const assistanceList = [
    "Conseiller, aider et défendre des usagers de la santé sur le plan juridique et judiciaire.",
    "Aide à obtenir votre dossier médical.",
    "Aide à la constitution de votre demande d’indemnisation",
    "Conseils tout au long de votre parcours jusqu’à l’indemnisation.",
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
      <div className="flex items-center justify-around p-1">
        <img
          src={cadusLogo}
          className="h-64 w-64 bg-white home-logo"
          alt="Logo Cadus"
        />
        <div className="text-center w-1/2 ">
          <h3 className="text-2xl font-bold">
            Vous etes victime d'erreurs médicales ?
          </h3>
          <p className="text-lg mt-2">
            L'assistance de la C.A.D.U.S conseil les victime dans les actions
            contentieuses pour l'obtention de l'indemnisation des dommages
            subis.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-20">
          <LinkButton to="/nousaider" className="w-40">Nous aider</LinkButton>
          <LinkButton to="/livredor" className="w-40">Laisser un mot</LinkButton>
      </div>

      <div className="flex justify-around mt-24">
        <img src={img1} className="w-1/3 home-img" alt="Image 1" />
        <img src={img3} className="w-1/3 home-img" alt="Image 3" />
        <img src={img2} className="w-1/3 home-img" alt="Image 2" />
      </div>

      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mt-16 mb-4">Notre But</h2>

        {assistanceList.map((item, index) => (
          <p key={index} className="mb-2">
            {item}
          </p>
        ))}
      </div>

      <div className="text-center mt-14">
        <h2 className="text-2xl font-bold mb-4">L'aide apportée</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center mt-8 p-8">
        {aideList.map((item, index) => (
          <div
            key={index}
            className="cases w-96 h-32 bg-white shadow-md rounded-lg flex text-center items-center p-6"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
