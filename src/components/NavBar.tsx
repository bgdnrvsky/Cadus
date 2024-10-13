import { NavLink } from "react-router-dom";
import cadusLogo from "../assets/logo.jpg";


function NavLinkItem({ path, name }: {path: string; name: string } ) {
    return (
        <NavLink to={path}
                 style={({isActive}) => ({textDecoration: isActive ? "underline" : "",})}
                 className="font-medium p-4 text-white hover:underline underline-offset-8">
            {name}
        </NavLink>
    );
}

export default function NavBar() {
    // TODO: When NavBar wraps, put the logo in the center above the links
    return (
        <nav className="bg-cadus-green p-4">
            <div className="flex flex-wrap justify-between max-md:justify-center">
                <img src={cadusLogo} className="rounded-full h-14" alt="Logo Cadus"/>

                <div className="flex">
                    <NavLinkItem path="/" name="L'association"/>
                    <NavLinkItem path="/nousaider" name="Nous aider"/>
                    <NavLinkItem path="/livredor" name="Livre d'or"/>
                    <NavLinkItem path="/remerciements" name="Remerciements"/>
                </div>
            </div>
        </nav>
    );
}