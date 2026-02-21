import Reveal from '../components/Reveal';

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <Reveal delay={0}>
                        <h1>Your Journey to a <span className="text-blue">Painless, Perfect</span> Smile Starts Here.</h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p>Advanced dental care in [City Name] with a focus on patient comfort and long-term oral health.</p>
                    </Reveal>

                    <Reveal delay={0.2} className="hero-cta">
                        <a href="#contact" className="btn btn-primary btn-large">Book Your Consultation <i className="fa-solid fa-arrow-right"></i></a>
                    </Reveal>

                    <Reveal delay={0.3} className="credibility-bar">
                        <div className="cred-item">
                            <i className="fa-solid fa-certificate"></i>
                            <span>Certified by IDA</span>
                        </div>
                        <div className="cred-item">
                            <i className="fa-solid fa-award"></i>
                            <span>15+ Years Experience</span>
                        </div>
                        <div className="cred-item">
                            <i className="fa-solid fa-star"></i>
                            <span>4.9/5 Star Rating</span>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.2} className="hero-image-container">
                    <div className="blob-bg"></div>
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Friendly Dentist Smiling" className="hero-img" />
                </Reveal>
            </section>

            {/* Services summary */}
            <section id="services-summary" className="services">
                <div className="section-header">
                    <Reveal>
                        <h2>Our Premium Services</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="subtitle">Comprehensive care tailored to your unique smile.</p>
                    </Reveal>
                </div>
                <div className="services-grid">
                    <Reveal className="service-card" delay={0.1}>
                        <div className="icon-wrapper"><i className="fa-solid fa-tooth"></i></div>
                        <h3>General Dentistry</h3>
                        <p>Routine checkups, cleanings, and preventive care to keep your smile healthy and bright.</p>
                    </Reveal>
                    <Reveal className="service-card" delay={0.2}>
                        <div className="icon-wrapper"><i className="fa-solid fa-gem"></i></div>
                        <h3>Cosmetic Veneers</h3>
                        <p>Achieve a flawless, radiant smile with custom-made porcelain veneers designed just for you.</p>
                    </Reveal>
                    <Reveal className="service-card" delay={0.3}>
                        <div className="icon-wrapper"><i className="fa-solid fa-screwdriver"></i></div>
                        <h3>Painless Implants</h3>
                        <p>Permanent, natural-looking tooth replacements utilizing advanced, virtually pain-free techniques.</p>
                    </Reveal>
                    <Reveal className="service-card" delay={0.4}>
                        <div className="icon-wrapper"><i className="fa-solid fa-child"></i></div>
                        <h3>Orthodontics</h3>
                        <p>Straighten your smile discreetly with modern clear aligners or traditional braces.</p>
                    </Reveal>
                </div>
            </section>

            {/* Our Clients Section */}
            <section className="clients-section">
                <div className="section-header">
                    <Reveal>
                        <h2>Our Clients</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="subtitle">Real transformations and beautifully aligned smiles.</p>
                    </Reveal>
                </div>

                <div className="clients-grid">
                    <Reveal className="client-card" delay={0.1}>
                        <div className="compare-imgs">
                            <img src="https://images.unsplash.com/photo-1598504786483-16a7dc260107?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Before teeth alignment" />
                            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="After teeth alignment" />
                        </div>
                        <div className="compare-labels">
                            <span>BEFORE</span>
                            <span>AFTER</span>
                        </div>
                        <div className="client-info">
                            <p>"I was so insecure about my crooked teeth. The clear aligners process was basically invisible, and now I can't stop smiling!"</p>
                            <h4>- Emily S.</h4>
                        </div>
                    </Reveal>

                    <Reveal className="client-card" delay={0.2}>
                        <div className="compare-imgs">
                            <img src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Before orthodontic treatment" />
                            <img src="https://images.unsplash.com/photo-1590664216135-c3a078e244d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="After orthodontic treatment" />
                        </div>
                        <div className="compare-labels">
                            <span>BEFORE</span>
                            <span>AFTER</span>
                        </div>
                        <div className="client-info">
                            <p>"Fast, painless, and incredible results. The orthodontic team here completely transformed my confidence!"</p>
                            <h4>- Michael T.</h4>
                        </div>
                    </Reveal>

                    <Reveal className="client-card" delay={0.3}>
                        <div className="compare-imgs">
                            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Before ceramic braces" />
                            <img src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="After ceramic braces" />
                        </div>
                        <div className="compare-labels">
                            <span>BEFORE</span>
                            <span>AFTER</span>
                        </div>
                        <div className="client-info">
                            <p>"The ceramic braces were so discreet, and the doctors were meticulous. I'm finally proud of my smile."</p>
                            <h4>- Jessica R.</h4>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Home;
