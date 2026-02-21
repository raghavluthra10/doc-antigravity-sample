import Reveal from '../components/Reveal';

const Testimonials = () => {
    return (
        <main className="page-wrapper">
            <section className="testimonials">
                <div className="section-header">
                    <Reveal><h2>Real Patient Stories</h2></Reveal>
                    <Reveal delay={0.1}><p className="subtitle">See the smiles we've transformed and the lives we've restored.</p></Reveal>
                </div>
                <div className="carousel-container">
                    <Reveal className="testimonial-card" delay={0.1}>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <p className="quote">"I've always had severe dental anxiety, but the team here made the implant procedure entirely painless. I honestly couldn't believe how easy it was. My new smile changed my life!"</p>
                        <div className="patient-info">
                            <div className="before-after">
                                <img src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80" alt="Before and After Smile" />
                            </div>
                            <span className="patient-name">- Sarah M.</span>
                        </div>
                    </Reveal>
                    <Reveal className="testimonial-card" delay={0.2}>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <p className="quote">"The cosmetic veneers are absolute perfection. Everyone asks me why I look so happy lately. Best investment in myself, and certainly the friendliest staff in [City Name]."</p>
                        <div className="patient-info">
                            <div className="before-after">
                                <img src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80" alt="Before and After Smile" />
                            </div>
                            <span className="patient-name">- David R.</span>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
