import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <>
            <header>
                <img className="w-20" src={Logo} />
                <nav className="text-red-600 list-none">
                    <li className="">
                        <a href="#">FORSIDE</a>
                    </li>
                    <li>
                        <a href="#">FORESTILLINGER & EVENTS</a>
                    </li>
                    <li>
                        <a href="#">SKUESPILLERE</a>
                    </li>
                    <li>
                        <a href="#">LOGIN</a>
                    </li>
                </nav>
            </header>
        </>
    );
};

export default Header;
