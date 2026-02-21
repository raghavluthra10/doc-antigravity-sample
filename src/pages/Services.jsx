import Reveal from '../components/Reveal';

const Services = () => {
    return (
        <main className="page-wrapper">
            <section className="services">
                <div className="section-header">
                    <Reveal><h2>Our Premium Services</h2></Reveal>
                    <Reveal delay={0.1}><p className="subtitle">Comprehensive care tailored to your unique smile.</p></Reveal>
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
        </main>
    );
};

export default Services;
