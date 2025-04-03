import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BackgroundImage from '../assets/directly-table-with-work-tools.jpg';
import LeyIcon from '../assets/ley.png';
import EPPIcon from '../assets/EPP.jpg';
import ErgonimiaIcon from '../assets/ergonimia.png';
import InvestigacionIcon from '../assets/investigacion.png';
import EstrategicoIcon from '../assets/estrategico.png';
import BienestarLogoIcon from '../assets/image-removebg-preview.png';
import ArcorLogo from '../assets/arcor-logo.svg';
import YPFLogo from '../assets/ypf-logo.svg';
import BarrickLogo from '../assets/barrick-logo.svg';
import CalidraLogo from '../assets/calidra-logo.svg';
//import WhatsAppButton from '../components/WhatsAppButton'; // Implement this component if needed
//import ScrollToTopButton from '../components/ScrollToTopButton'; // Implement this component if needed
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';
import Logo6 from '../assets/logo6.png';
import Logo7 from '../assets/logo7.png';
import Logo8 from '../assets/logo8.png';
import Logo9 from '../assets/logo9.png';
import Logo11 from '../assets/logo11.png';
import Logo12 from '../assets/logo12.png';
import Logo13 from '../assets/logo13.png';
import Logo14 from '../assets/logo14.png';
import DarkModeToggle from '../components/DarkModeToggle';
import CotizarModal from '../components/CotizarModal'; // Import CotizarModal
import CumplimientoSVG from '../assets/cumplimiento.svg';
import ProductividadSVG from '../assets/productividad.svg';
import PlanesSVG from '../assets/planes.svg';
import AcompanamientoSVG from '../assets/Acompañamiento.svg';
import PrevencionSVG from '../assets/prevencion.svg';
import RespuestaSVG from '../assets/Respuesta.svg';

const IndexPage = () => {
    const [showCotizarModal, setShowCotizarModal] = useState(false);

    const handleCotizarClick = () => {
        setShowCotizarModal(true);
    };

    const handleCloseCotizarModal = () => {
        setShowCotizarModal(false);
    };

    const servicesList = [
        { id: 1, name: 'Habilitaciones y Certificaciones' },
        { id: 2, name: 'Asesoramiento y Supervisión Externa' },
        { id: 3, name: 'Estudios de Ergonómia y Condiciones Laborales' },
        { id: 4, name: 'Investigación de Accidentes y Prevención' },
        { id: 5, name: 'Plan Estratégico de Seguridad' },
        { id: 6, name: 'Capacitaciones Personalizadas' },
        { id: 7, name: 'Gestión Ambiental' },
        { id: 8, name: 'Consultoría en Recursos Humanos' },
        { id: 9, name: 'Auditorías de Seguridad e Higiene' },
    ];

    return (
        <>
            <Navigation onCotizarClick={handleCotizarClick} />
            <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
                <img src={BackgroundImage} alt="Background Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(51, 51, 51, 0.5)', backdropFilter: 'blur(5px)', zIndex: -1 }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3em', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>Bienestar Consultora</h1>
                    <p style={{ fontSize: '1.5em', textShadow: '1px 1px 2px #000000' }}>Expertos en Higiene, Seguridad y Salud Laboral</p>
                    <p style={{ fontSize: '1.2em', textShadow: '1px 1px 2px #000000' }}>Protegemos tu empresa. Cuidamos a tu equipo.</p>
                </div>
                <div id="intro" style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem', marginBottom: 0 }}>
                    <h2>La seguridad laboral no es una opción, es una necesidad.</h2>
                    <p>En Bienestar Consultora, garantizamos que tu empresa cumpla con la normativa y sea un espacio seguro para todos. Con más de 10 años de experiencia, ofrecemos soluciones innovadoras y personalizadas que reducen los riesgos y mejoran la productividad de tu equipo.</p>
                    <div className="cta-container">
                        <a href="#servicios" className="cta-button">Nuestros Servicios</a>
                        <a href="#contacto" className="cta-button">Contáctanos</a>
                    </div>
                </div>
            </header>

            {/* About Us Section */}
            <section id="nosotros" style={{ padding: '4rem 2rem', textAlign: 'left', marginBottom: '2rem' }}>
                <div className="container">
                    <h2 style={{ color: '#0056b3', fontSize: '2.5em', marginBottom: '2rem', textAlign: 'center' }}>Conócenos</h2>
                    <p>Somos una consultora, conformada por un equipo de profesionales, instruidos y avalados por nuestra amplia formación y experiencia de más de 10 años en el trabajo de campo, en materia de higiene, seguridad y salud laboral.</p>
                    <p>Brindamos servicios enfocados a la promoción de la cultura en seguridad y conciencia ambiental, por medio de herramientas funcionales y flexibles, que nos permiten adaptarnos a las diversas necesidades de nuestros clientes.</p>

                    <h3 style={{ color: '#0056b3', fontSize: '2em', marginTop: '2rem' }}>Misión:</h3>
                    <p>Nuestra misión consiste en garantizar el BIENESTAR integral de cada organización de un modo efectivo, a través de servicios proactivos en temas pertinentes a higiene, seguridad y salud laboral. Ejecutando diversas propuestas estratégicas como respuesta a las necesidades de cada empresa que nos permitan alcanzar los resultados esperados por las mismas.</p>

                    <h3 style={{ color: '#0056b3', fontSize: '2em', marginTop: '2rem' }}>Visión:</h3>
                    <p>Buscamos que nuestro trabajo perdure en el tiempo, y así dejar impresa nuestra labor de calidad en cada una de las empresas que adquieran nuestros servicios.
                        Aspiramos a ser reconocidos como la consultora líder en seguridad e higiene laboral, transformando los entornos de trabajo en espacios seguros y saludables.
                        Nos enfocamos en la prevención de riesgos y la promoción de una cultura de seguridad arraigada en cada organización que asesoramos.
                        A través de la innovación constante y la actualización de nuestros conocimientos, nos comprometemos a ofrecer soluciones efectivas y personalizadas que se adapten a las necesidades específicas de cada cliente.
                        Queremos ser un referente en el cumplimiento normativo y la mejora continua, contribuyendo a la protección de los trabajadores y al éxito sostenible de las empresas.
                        Visualizamos un futuro donde cada lugar de trabajo sea un ejemplo de bienestar y seguridad, gracias a nuestro compromiso y profesionalismo</p>
                </div>
            </section>

            <section id="valores" style={{ padding: '2rem', textAlign: 'left', marginBottom: '2rem' }}>
                <div className="container">
                    <h2 style={{ color: '#0056b3', fontSize: '2em', marginBottom: '2rem', textAlign: 'left' }}>Valores</h2>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="responsabilidad-tab" data-bs-toggle="tab" data-bs-target="#responsabilidad" type="button" role="tab" aria-controls="responsabilidad" aria-selected="true">Responsabilidad</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="calidad-tab" data-bs-toggle="tab" data-bs-target="#calidad" type="button" role="tab" aria-controls="calidad" aria-selected="false">Calidad</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="honestidad-tab" data-bs-toggle="tab" data-bs-target="#honestidad" type="button" role="tab" aria-controls="honestidad" aria-selected="false">Honestidad</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="compromiso-tab" data-bs-toggle="tab" data-bs-target="#compromiso" type="button" role="tab" aria-controls="compromiso" aria-selected="false">Compromiso</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="respeto-tab" data-bs-toggle="tab" data-bs-target="#respeto" type="button" role="tab" aria-controls="respeto" aria-selected="false">Respeto</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="etica-tab" data-bs-toggle="tab" data-bs-target="#etica" type="button" role="tab" aria-controls="etica" aria-selected="false">Ética Profesional</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="confidencialidad-tab" data-bs-toggle="tab" data-bs-target="#confidencialidad" type="button" role="tab" aria-controls="confidencialidad" aria-selected="false">Confidencialidad</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="responsabilidad" role="tabpanel" aria-labelledby="responsabilidad-tab">
                            <p>En Bienestar Consultora, la responsabilidad es nuestro compromiso primordial. Nos hacemos cargo de cada proyecto, garantizando resultados precisos y cumpliendo con las normativas vigentes para la seguridad y salud de su empresa.</p>
                        </div>
                        <div className="tab-pane fade" id="calidad" role="tabpanel" aria-labelledby="calidad-tab">
                            <p>La calidad es el sello distintivo de nuestros servicios. Aplicamos los más altos estándares en cada evaluación, capacitación y consultoría, asegurando soluciones efectivas y duraderas para el bienestar de su equipo de trabajo.</p>
                        </div>
                        <div className="tab-pane fade" id="honestidad" role="tabpanel" aria-labelledby="honestidad-tab">
                            <p>Actuamos con transparencia y honestidad en cada interacción. Ofrecemos diagnósticos claros y recomendaciones objetivas, construyendo relaciones de confianza a largo plazo con nuestros clientes.</p>
                        </div>
                        <div className="tab-pane fade" id="compromiso" role="tabpanel" aria-labelledby="compromiso-tab">
                            <p>Estamos totalmente comprometidos con la seguridad y el bienestar de su empresa. Dedicamos nuestro tiempo y experiencia para ofrecer soluciones personalizadas que superen sus expectativas y protejan a sus empleados.</p>
                        </div>
                        <div className="tab-pane fade" id="respeto" role="tabpanel" aria-labelledby="respeto-tab">
                            <p>Valoramos a cada individuo y promovemos un ambiente de trabajo respetuoso e inclusivo. Consideramos las necesidades y opiniones de todos los miembros de su equipo, fomentando una cultura de seguridad y colaboración.</p>
                        </div>
                        <div className="tab-pane fade" id="etica" role="tabpanel" aria-labelledby="etica-tab">
                            <p>Nos regimos por los más altos principios éticos en todas nuestras acciones. Mantenemos la integridad profesional en cada proyecto, garantizando la confidencialidad y el cumplimiento de todas las regulaciones aplicables.</p>
                        </div>
                        <div className="tab-pane fade" id="confidencialidad" role="tabpanel" aria-labelledby="confidencialidad-tab">
                            <p>Protegemos la información confidencial de su empresa con la máxima diligencia. Aseguramos la privacidad de sus datos y procesos, brindando tranquilidad y confianza en cada servicio que ofrecemos.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="por-que-elegirnos">
                <h2>¿Por qué elegirnos?</h2>
                <div className="card-container">
                    <div className="card">
                        <img src={CumplimientoSVG} alt="Cumplimiento" className="card-image" style={{ width: '80px', height: '80px' }} />
                        <h3>Cumplimiento sin complicaciones</h3>
                        <p>Nos aseguramos de que tu empresa cumpla con la Ley 19.587/72, evitando sanciones y garantizando tranquilidad.</p>
                    </div>
                    <div className="card">
                        <img src={ProductividadSVG} alt="Riesgos" className="card-image" style={{ width: '80px', height: '80px' }} />
                        <h3>Menos riesgos, más productividad</h3>
                        <p>Reducimos accidentes y enfermedades laborales, mejorando el rendimiento y bienestar de tu equipo.</p>
                    </div>
                    <div className="card">
                        <img src={PlanesSVG} alt="Estrategias" className="card-image" style={{ width: '80px', height: '80px' }} />
                        <h3>Estrategias personalizadas</h3>
                        <p>Cada empresa es única. Diseñamos planes a medida para garantizar entornos de trabajo seguros y eficientes.</p>
                    </div>
                    <div className="card">
                        <img src={AcompanamientoSVG} alt="Acompañamiento" className="card-image" style={{ width: '80px', height: '80px' }} />
                        <h3>Acompañamiento experto</h3>
                        <p>Un equipo de profesionales certificados, listos para asesorarte en cada paso del proceso.</p>
                    </div>
                    <div className="card">
                        <img src={PrevencionSVG} alt="Acompañamiento" className="card-image" style={{ width: '80px', height: '80px' }} />
                        <h3>Prevención proactiva de riesgos</h3>
                        <p>Identificamos y abordamos posibles peligros antes de que se conviertan en problemas, minimizando accidentes y garantizando un entorno laboral más seguro.</p>
                    </div>
                    <div className="card">
                        <img src={RespuestaSVG} alt="Acompañamiento" className="card-image" style={{ width: '80px', height: '80px' }} />
                        <h3>Respuesta rápida y atención personalizada</h3>
                        <p>Brindamos un servicio ágil y cercano, con asesoramiento inmediato para resolver cualquier inquietud o emergencia en tu empresa.</p>
                    </div>
                </div>
            </section>

            <section id="servicios">
                <h2>Nuestros Servicios</h2>
                <div className="service-container">
                    <div className="service-card">
                        <div className="front">
                            <img src={LeyIcon} alt="Habilitaciones y Certificaciones" className="service-icon" />
                            <h3>Habilitaciones y Certificaciones</h3>
                        </div>
                        <div className="back">
                            <p>Gestión integral para operar con total seguridad y en regla.</p>
                            <ul>
                                <li>✅ Certificados de gas, electricidad e incendios.</li>
                                <li>✅ Planos eléctricos y puesta a tierra.</li>
                                <li>✅ Habilitaciones municipales y ambientales.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="front">
                            <img src={EPPIcon} alt="Asesoramiento y Supervisión Externa" className="service-icon" />
                            <h3>Asesoramiento y Supervisión Externa</h3>
                        </div>
                        <div className="back">
                            <p>Supervisión experta para garantizar seguridad en cada detalle.</p>
                            <ul>
                                <li>✅ Inspecciones, avisos de obra y resolución de actas.</li>
                                <li>✅ Señalética, protocolos y gestión de EPP.</li>
                                <li>✅ Programas de seguridad adaptados a tu industria.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="front">
                            <img src={ErgonimiaIcon} alt="Estudios de Ergonomía y Condiciones Laborales" className="service-icon" />
                            <h3>Estudios de Ergonomía y Condiciones Laborales</h3>
                        </div>
                        <div className="back">
                            <p>Optimizamos el bienestar y la eficiencia en el trabajo.</p>
                            <ul>
                                <li>✅ Evaluación de posturas, carga laboral y confort térmico.</li>
                                <li>✅ Medición de iluminación y ruido según normativa.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="front">
                            <img src={BienestarLogoIcon} alt="Investigación de Accidentes y Prevención" className="service-icon" />
                            <h3>Investigación de Accidentes y Prevención</h3>
                        </div>
                        <div className="back">
                            <p>Estrategias efectivas para minimizar los riesgos.</p>
                            <ul>
                                <li>✅ Identificación de factores causales.</li>
                                <li>✅ Reducción de costos y primas de ART.</li>
                                <li>✅ Implementación de políticas de “Cero Accidentes”.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="front">
                            <img src={InvestigacionIcon} alt="Plan Estratégico de Seguridad" className="service-icon" />
                            <h3>Plan Estratégico de Seguridad</h3>
                        </div>
                        <div className="back">
                            <p>Prevención y cumplimiento normativo en un solo plan.</p>
                            <ul>
                                <li>✅ Soluciones personalizadas según el sector de tu empresa.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="front">
                            <img src={EstrategicoIcon} alt="Capacitaciones Personalizadas" className="service-icon" />
                            <h3>Capacitaciones Personalizadas</h3>
                        </div>
                        <div className="back">
                            <p>Formación para un entorno laboral más seguro.</p>
                            <ul>
                                <li>✅ Cursos en seguridad laboral adaptados a cada nivel.</li>
                                <li>✅ Clases presenciales o en campo.</li>
                                <li>✅ Capacitación en inglés para negocios.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="more-services-button">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#moreServicesModal">
                        Ver más servicios
                    </button>
                </div>
            </section>

            <section id="iffies">
                <h2>Ellos confían en nosotros</h2>
                <div id="logoCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#logoCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#logoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#logoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#logoCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="logo-row">
                                <div className="logo-item">
                                    <img src={ArcorLogo} alt="Arcor Logo" />
                                </div>
                                <div className="logo-item">
                                    <img src={YPFLogo} alt="YPF Logo" />
                                </div>
                                <div className="logo-item">
                                    <img src={BarrickLogo} alt="Barrick Logo" />
                                </div>
                                <div className="logo-item">
                                    <img src={CalidraLogo} alt="Calidra Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="logo-row">
                                <div className="logo-item">
                                    <img src={Logo1} alt="Logo 1" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo2} alt="Logo 2" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo3} alt="Logo 3" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo4} alt="Logo 4" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="logo-row">
                                <div className="logo-item">
                                    <img src={Logo6} alt="Logo 6" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo7} alt="Logo 7" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo8} alt="Logo 8" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo9} alt="Logo 9" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="logo-row">
                                <div className="logo-item">
                                    <img src={Logo11} alt="Logo 11" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo12} alt="Logo 12" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo13} alt="Logo 13" />
                                </div>
                                <div className="logo-item">
                                    <img src={Logo14} alt="Logo 14" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#logoCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#logoCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <a href="#contacto" className="cta-button">¿Vos qué estás esperando? ¡Contáctanos!</a>
            </section>

            {/* Contact Section - Implement the ContactForm component here */}

            <Footer />
            <CotizarModal show={showCotizarModal} onClose={handleCloseCotizarModal} services={servicesList} />
        </>
    );
};

export default IndexPage;