import iconFacebook from '../assets/icons/Facebook.png';
import iconInstagram from '../assets/icons/Instagram.png';
import iconLinkedIn from '../assets/icons/Linked.png';

const Footer = () => {
    return (
        <footer className="flex justify-around mt-auto relative bg-footer-back p-10 text-white font-titillium">
            <div>
                <h3 className="font-bold text-2xl">ADRESSE</h3>
                <p>Det utrolige teater</p>
                <p>Havnegade 901</p>
                <p>9000 Aalborg</p>
                <p>EAN 5798003279845</p>
                <p>CVR 1001 0012</p>
                <br></br>
                <p>Find vej på kort</p>
            </div>
            <div>
                <h3 className="font-bold text-2xl">BILLETSERVICE</h3>
                <p>Se åbningstider</p>
                <p>Billettelefon: +45 96 31 80 80</p>
                <p>billet@dut.dk</p>
                <div className="pt-10">
                    <h3 className="font-bold text-2xl">ADMINISTRATION</h3>
                    <p>Telefon: +45 96 31 80 90</p>
                    <p>adm@dut.dk</p>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-2xl">PRAKTISK INFO</h3>
                <p>Kontakt</p>
                <p>Kom trygt i teatret</p>
                <p>Presseside</p>
                <p>Skoleforestillinger</p>
                <p>Teatercaféen</p>
                <p>Handelsbetingelser</p>
            </div>
            <div className="flex items-start gap-5">
                <img src={iconFacebook} />
                <img src={iconInstagram} />
                <img src={iconLinkedIn} />
            </div>
        </footer>
    );
};

export default Footer;
