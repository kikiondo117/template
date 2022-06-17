import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm ">
            <Link to="/" className="pl-8">
                <img src="" alt="" />
                <h3>BIOCOMM</h3>
            </Link>

            <div className="px-4 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>

            <div className="hidden md:flex">
                <ul className="flex">
                    <li className="pr-8">Nosotros</li>
                    <li className="pr-8">Servicios</li>
                    <li className="pr-8">Ofertas</li>
                    <li className="pr-8">Clientes</li>
                    <li className="pr-8">Equipo</li>
                    <li className="pr-8">Contacto</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header