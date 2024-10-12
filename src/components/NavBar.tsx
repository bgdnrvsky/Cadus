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
    return (
        <nav className="bg-cadus-green p-4">
            <div className="flex flex-wrap items-center justify-between">
                <div className="text-white font-bold text-xl">
                    <img src={cadusLogo} className="rounded-full h-14" alt="Logo Cadus"/>
                </div>

                <div className="flex flex-row">
                    <NavLinkItem path="/" name="L'association"/>
                    <NavLinkItem path="/nousaider" name="Nous aider"/>
                    <NavLinkItem path="/livredor" name="Livre d'or"/>
                    <NavLinkItem path="/remerciements" name="Remerciements"/>
                </div>
            </div>
        </nav>
    );
}