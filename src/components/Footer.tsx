import Logo from '../assets/logo.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Youtube from '../assets/youtube.svg';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>LogoMarca</h3>
                        <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram"><img src={Instagram} alt="insta" width={24} height={24} /></a>
                            <a href="#" aria-label="Facebook"><img src={Facebook} alt="insta" width={24} height={24} /></a>
                            <a href="#" aria-label="YouTube"><img src={Youtube} alt="insta" width={24} height={24} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Empresa</h3>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Funcionalidades</h3>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot Discord</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Feito com amor na aula de Programação Web💙©2024 AktieTech - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
