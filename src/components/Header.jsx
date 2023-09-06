import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="flex w-full justify-between relative">
                <img className="h-32 w-95 mt-4 pl-10" src={Logo} />
                <nav className="list-none flex flex-row font-titilium absolute bottom-0 right-7 gap-10 text-text-gray">
                    <li className="">
                        <Link
                            className="text-lg cursor-pointer hover:text-text-gold"
                            to="/"
                        >
                            FORSIDE
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className="text-lg cursor-pointer hover:text-text-gold"
                            to="/events"
                        >
                            FORESTILLINGER & EVENTS
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className="text-lg cursor-pointer hover:text-text-gold"
                            to="/actors"
                        >
                            SKUESPILLERE
                        </Link>
                    </li>
                    <li className="">
                        <a
                            className="text-lg cursor-pointer hover:text-text-gold"
                            href="#"
                        >
                            LOGIN
                        </a>
                    </li>
                </nav>
            </header>
        </>
    );
};

export default Header;
