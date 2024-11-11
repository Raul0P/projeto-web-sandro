import { useEffect, useState } from "react";
import Logo from '../assets/logo.svg'
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button.tsx";
import Close from "../assets/close.svg"
import Menu from "../assets/menu.svg"
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Teste from "../assets/images/teste.png";
import morello from "../assets/images/morello.png";
import kkkkk from "../assets/images/icon.png";
import "../styles/hero.css";
import "../styles/solution.css"
import Card from "../components/Card.tsx";
import TestimonialCard from '../components/TestimonialCard';
import "../styles/testimonials.css";
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (showMobileMenu) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.width = '100%';
        } else {
            body.style.overflow = 'auto';
            body.style.position = 'static';
        }

        return () => {
            body.style.overflow = 'auto';
            body.style.position = 'static';
        };
    }, [showMobileMenu])

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <section id="hero">

                <span className="desktop-only">
                    <img className="green-filter" src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img className="green-filter" src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Salve!
                    </p>
                    <h1>Builds Tóxicas, e tudo o que tem de pior na top lane</h1>
                    <p>Já pensou em matar a vontade de viver de seus inimigos esquizofrênico do topo? Veja abaixo o pior do que é possível comprar</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>

                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>


            <section id="solution">

                <div className="container content">
                    <p className="desktop-only">
                        Soluções
                    </p>
                    <h1>Sob medida para você</h1>
                    <p>Inovação é com a gente! O <span className="test" style={{ color: 'var(--primary-color)', fontWeight: 'var(--fw-bold)' }}>Singed Alemão</span> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.</p>
                </div>

            </section>

            <div className="cards-container even-columns" style={{ marginTop: 100 }}>
                <Card
                    title="Build Vencedora"
                    description="Rilay matadora, irmão sem meio-termo, começa de poção corrupta e vai na T2 do cara antes dos 1:15 min, depois passa na lane e mete a dedada no inimigo."
                    imageSrc={Teste}
                    imageAlt="Imagem de prêmio"
                />

                <Card
                    title="Sacanagem Liberada"
                    description="Aqui o jungle do outro lado chora e a mãe não vê, matou a primeira catapa vai seco no sapo do cara e fica parado parecendo um maniáco (você é, acredite)."
                    imageSrc={morello}
                    imageAlt="Imagem de troféu"
                />

                <Card
                    title="GG JG GAP"
                    description="Aqui já foi né, tu conseguiu ser pior que um Nunu mid de ghost e curar, deixou teu legado no mundo compânhero. Aproveita e passa na sua BotLane e dê uma kill pro suporte."
                    imageSrc={kkkkk}
                    imageAlt="Imagem de troféu"
                />
            </div>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            imageSrc={morello}
                            testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            rating={3}
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                        />
                        <TestimonialCard
                            imageSrc={morello}
                            testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            rating={3}
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                        />
                        <TestimonialCard
                            imageSrc={morello}
                            testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            rating={3}
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                        />
                        <TestimonialCard
                            imageSrc={morello}
                            testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            rating={3}
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                        />
                        <TestimonialCard
                            imageSrc={morello}
                            testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            rating={3}
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                        />
                        <TestimonialCard
                            imageSrc={morello}
                            testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            rating={3}
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                        />
                    </div>
                </section>
            </section>

            <ContactForm />

            <Footer />

        </>
    )
}