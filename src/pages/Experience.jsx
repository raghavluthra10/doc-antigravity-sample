import Reveal from '../components/Reveal';

const Experience = () => {
    return (
        <main className="page-wrapper">
            <section className="experience">
                <Reveal className="experience-image" delay={0}>
                    <div className="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern Dental Clinic Interior" />
                    </div>
                </Reveal>
                <div className="experience-content">
                    <Reveal delay={0.2}><h2>The [Clinic Name] Experience</h2></Reveal>
                    <Reveal delay={0.3}><p className="subtitle">Redefining dental visits with absolute comfort at the core.</p></Reveal>

                    <div className="feature-list">
                        <Reveal className="feature-item" delay={0.4}>
                            <div className="feature-icon"><i className="fa-solid fa-shield-heart"></i></div>
                            <div>
                                <h4>Painless Technology</h4>
                                <p>We use state-of-the-art equipment to ensure treatments are smooth and virtually pain-free.</p>
                            </div>
                        </Reveal>
                        <Reveal className="feature-item" delay={0.5}>
                            <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
                            <div>
                                <h4>No-Wait Appointments</h4>
                                <p>Your time is incredibly valuable. Experience on-time consultations with zero waiting.</p>
                            </div>
                        </Reveal>
                        <Reveal className="feature-item" delay={0.6}>
                            <div className="feature-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
                            <div>
                                <h4>Transparent Pricing</h4>
                                <p>Absolutely no hidden fees. We provide clear, upfront treatment plans and precise costs.</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Experience;
