import Reveal from '../components/Reveal';

const Team = () => {
    return (
        <main className="page-wrapper">
            <section className="team">
                <div className="section-header">
                    <Reveal><h2>Meet the Experts</h2></Reveal>
                    <Reveal delay={0.1}><p className="subtitle">World-class specialists completely dedicated to your long-term oral health.</p></Reveal>
                </div>
                <div className="team-grid">
                    <Reveal className="doctor-card" delay={0.2}>
                        <div className="doc-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Jane Doe" />
                        </div>
                        <div className="doc-info">
                            <h3>Dr. Jane Doe, DDS</h3>
                            <p className="specialty">Aesthetic & Reconstructive Specialist</p>
                            <p className="bio">With over 15 years of experience and advanced training in cosmetic dentistry from NYU, Dr. Doe brings an artisan's touch to every complete smile makeover.</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Team;
