import {NavLink} from "react-router-dom";
import cadusLogo from "../assets/cadus.svg"

function NavLinkItem({path, name}: { path: string; name: string }) {
    return (
        <NavLink to={path}
                 style={({isActive}) => ({textDecoration: isActive ? "underline" : "",})}
                 className="font-medium p-4 text-white hover:underline underline-offset-8">
            {name}
        </NavLink>
    );
}

export default function NavBar() {
    const navLinkItems = (
        <>
            <NavLinkItem path="/" name="L'association"/>
            <NavLinkItem path="/nousaider" name="Nous aider"/>
            <NavLinkItem path="/livredor" name="Livre d'or"/>
            <NavLinkItem path="/remerciements" name="Remerciements"/>
        </>
    );

    const svgColor = "white"

    return (
        <nav className="bg-cadus-green p-4">
            <div className="flex justify-between">
                <img src={cadusLogo} className="rounded-full h-14 bg-white" alt="Logo Cadus"/>

                <ul className="flex justify-between max-sm:hidden">
                    {
                        navLinkItems
                    }
                </ul>

                <div className="flex items-center justify-center sm:hidden">
                    <svg className="sm:hidden w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <g stroke-width="0"></g>
                        <g stroke-linecap="round" stroke-linejoin="round"></g>
                        <g>
                            <path d="M4 18L20 18" stroke={svgColor} stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 12L20 12" stroke={svgColor} stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 6L20 6" stroke={svgColor} stroke-width="2" stroke-linecap="round"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </nav>
    );
}
