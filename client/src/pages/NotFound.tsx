import LinkButton from "../components/LinkButton";
import notFoundImage from "../assets/notfound.png";

export default function NotFound() {

    return (
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p
                        className="text-2xl md:text-3xl font-light leading-normal"
                    >Oups, nous n'avons pas pu trouver ce que vous recherchez.</p>
                    <p className="mb-8">Vous trouverez peut-être sur la page d'accueil ?</p>

                    <LinkButton to="/">Retour à la page d'acceuil</LinkButton>
                </div>

                <div className="max-w-lg">
                    <img src={notFoundImage} alt={"oops"}></img>
                </div>
            </div>
        </div>
    );
}