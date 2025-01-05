import {NavLink} from "react-router-dom";
import {useState} from 'react';
import {useAuth} from "../hooks/useAuth";
import cadusLogo from "../assets/cadus.svg"

function NavLinkItem({path, children}: { path: string; children: React.ReactNode }) {
    return (
        <NavLink to={path} style={({isActive}) => ({textDecoration: isActive ? "underline" : "",})}
                 className="font-medium p-4 text-white hover:underline underline-offset-8">
            {children}
        </NavLink>
    );
}

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {isLoggedIn} = useAuth();

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinkItems = (
        <>
            <NavLinkItem path="/">L'association</NavLinkItem>
            <NavLinkItem path="/nousaider">Nous aider</NavLinkItem>
            <NavLinkItem path="/livredor">Livre d'or</NavLinkItem>
            <NavLinkItem path="/remerciements">Remerciements</NavLinkItem>
            {
                isLoggedIn ? (
                    <NavLinkItem path="/dashboard">Dashboard</NavLinkItem>
                ) : (
                    <NavLinkItem path="/login">Connexion</NavLinkItem>
                )
            }
        </>
    );

    const svgColor = "white";


    return (
        <nav className="bg-cadus-green p-4">
            <div className="flex justify-between">
                {/* Logo */}
                <NavLink to="/"><img src={cadusLogo} className="rounded-full h-14 bg-white" alt="Logo Cadus"/></NavLink>

                <ul className="flex justify-between max-sm:hidden">
                    {/* Navigation Links (Desktop) */}
                    {navLinkItems}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <button aria-expanded={isMenuOpen} onClick={toggleMenu}
                        className="flex items-center justify-center sm:hidden">
                    {/* Menu icon (hamburger) */}
                    <svg className="sm:hidden w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                            <path d="M4 18L20 18" stroke={svgColor} strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M4 12L20 12" stroke={svgColor} strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M4 6L20 6" stroke={svgColor} strokeWidth="2" strokeLinecap="round"></path>
                        </g>
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Links (Hidden by default) */}
            <ul aria-hidden={!isMenuOpen}
                className={`flex flex-col sm:hidden mt-4 ${isMenuOpen ? '' : 'hidden'} ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                {navLinkItems}
            </ul>
        </nav>
    );
}
