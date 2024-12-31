import { NavLink } from "react-router-dom";
import cadusLogo from "../assets/cadus.svg"
import {AuthStatus, useAuth} from "../hooks/useAuth";
import Button from "./Button";
import LogoutButton from "./LogoutButton";

function NavLinkItem({ path, children }: {path: string; children: React.ReactNode } ) {
    return (
        <NavLink to={path}
                 style={({isActive}) => ({textDecoration: isActive ? "underline" : "",})}
                 className="font-medium p-4 text-white hover:underline underline-offset-8">
            {children}
        </NavLink>
    );
}

export default function NavBar() {
    const { status } = useAuth();

    return (
        <nav className="bg-cadus-green p-4">
            <div className="flex flex-wrap justify-between max-sm:justify-center">
                <NavLink to="/"><img src={cadusLogo} className="rounded-full h-14 bg-white" alt="Logo Cadus"/></NavLink>

                <div className="flex">
                    <NavLinkItem path="/">L'association</NavLinkItem>
                    <NavLinkItem path="/nousaider">Nous aider</NavLinkItem>
                    <NavLinkItem path="/livredor">Livre d'or</NavLinkItem>
                    <NavLinkItem path="/remerciements">Remerciements</NavLinkItem>
                    <NavLinkItem path="/survey">Sondage</NavLinkItem>

                    { status === AuthStatus.AUTHENTICATED && <LogoutButton/> }
                </div>
            </div>
        </nav>
    );
}