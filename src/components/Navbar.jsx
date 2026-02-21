import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit' }}>
                    <i className="fa-solid fa-tooth"></i> [Clinic Name]
                </Link>
            </div>
            <nav className="nav-links">
                <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                    Services
                </NavLink>
                <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>
                    The Experience
                </NavLink>
                <NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>
                    Our Team
                </NavLink>
                <NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>
                    Testimonials
                </NavLink>
            </nav>
            <a href="#contact" className="btn btn-primary">Book Consultation</a>
        </header>
    );
};

export default Navbar;
