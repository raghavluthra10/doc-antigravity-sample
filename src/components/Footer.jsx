import { useState } from 'react';
import Reveal from './Reveal';

const Footer = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Form Data
        const formData = {
            access_key: "YOUR_ACCESS_KEY_HERE", // Grab this free at web3forms.com
            subject: "New Consultation Request - Dental Website",
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            service: e.target.service.value,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitting(false);
                setIsSuccess(true);
                e.target.reset();

                setTimeout(() => {
                    setIsSuccess(false);
                }, 4000);
            } else {
                console.error("Form submission error", result);
                setIsSubmitting(false);
                alert("Something went wrong. Please call us directly.");
            }
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
            alert("Network error. Please try again.");
        }
    };

    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <Reveal className="footer-form" delay={0}>
                    <h2>Book Your Free Consultation</h2>
                    <p>Take the first essential step towards achieving your perfect smile.</p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group flex-1">
                                <input type="text" id="name" placeholder="Full Name" required />
                                <i className="fa-solid fa-user form-icon"></i>
                            </div>
                            <div className="form-group flex-1">
                                <input type="tel" id="phone" placeholder="Phone Number" required />
                                <i className="fa-solid fa-phone form-icon"></i>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" placeholder="Email Address" required />
                            <i className="fa-solid fa-envelope form-icon"></i>
                        </div>
                        <div className="form-group">
                            <select id="service" required defaultValue="">
                                <option value="" disabled>Select an Area of Interest</option>
                                <option value="general">General Consultation</option>
                                <option value="implants">Implants</option>
                                <option value="veneers">Veneers</option>
                                <option value="orthodontics">Orthodontics</option>
                            </select>
                            <i className="fa-solid fa-stethoscope form-icon"></i>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-full btn-large"
                            style={{
                                opacity: isSubmitting ? 0.8 : 1,
                                background: isSuccess ? '#10b981' : ''
                            }}
                            disabled={isSubmitting || isSuccess}
                        >
                            {isSubmitting ? (
                                <><i className="fa-solid fa-spinner fa-spin"></i> Submitting...</>
                            ) : isSuccess ? (
                                <><i className="fa-solid fa-check"></i> Request Sent</>
                            ) : (
                                "Request Appointment"
                            )}
                        </button>
                    </form>
                </Reveal>

                <Reveal className="footer-map" delay={0.2}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.46332766819!2d-73.98782078428678!3d40.75184287932759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680187842600!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Clinic Location"
                    ></iframe>
                </Reveal>
            </div>

            {/* Calendly Booking Section */}
            <div style={{ background: '#f8fafc', padding: '4rem 5%' }}>
                <Reveal delay={0.1}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ color: '#1e293b', fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Schedule Instantly</h2>
                        <p style={{ color: '#64748b' }}>Pick a time that works best for you directly from our calendar.</p>
                    </div>
                    {/* Calendly inline widget begin */}
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/your-calendly-link/consultation?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0056b3"
                        style={{ minWidth: '320px', height: '700px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    ></div>
                </Reveal>
            </div>

            <div className="footer-bottom">
                <div className="logo">
                    <i className="fa-solid fa-tooth"></i> [Clinic Name]
                </div>
                <div className="contact-info">
                    <p><i className="fa-solid fa-phone"></i> (555) 123-4567</p>
                    <p><i className="fa-solid fa-envelope"></i> hello@clinicname.com</p>
                    <p><i className="fa-solid fa-location-dot"></i> 123 Dental Ave, Suite 100, City</p>
                </div>
                <div className="social-links">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <p>&copy; {new Date().getFullYear()} [Clinic Name]. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
