import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  FolderGit2,
  Mail
} from "lucide-react";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      {/* ===== TOP NAV (DESKTOP) ===== */}
      <header className="top-nav">
        <div className="top-nav-container">
          <NavLink to="/" className="logo">
            <img src="/logo.png" alt="ChessWave" className="logo-img" />
            <span className="logo-text">Full Stack Developer Intern</span>
          </NavLink>

          <nav className="top-nav-links">
            <NavLink to="/" className="nav-item">
              <Home size={18} /> Home
            </NavLink>

            <NavLink to="/about" className="nav-item">
              <Info size={18} /> About Us
            </NavLink>

            <NavLink to="/services" className="nav-item">
              <Briefcase size={18} /> Services
            </NavLink>

            <NavLink to="/projects" className="nav-item">
              <FolderGit2 size={18} /> Projects
            </NavLink>

            <NavLink to="/contact" className="nav-item">
              <Mail size={18} /> Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ===== BOTTOM NAV (MOBILE) ===== */}
      <nav className="bottom-nav">
        <NavLink to="/" className="bottom-nav-item">
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/about" className="bottom-nav-item">
          <Info size={20} />
          <span>About</span>
        </NavLink>

        <NavLink to="/services" className="bottom-nav-item">
          <Briefcase size={20} />
          <span>Services</span>
        </NavLink>

        <NavLink to="/projects" className="bottom-nav-item">
          <FolderGit2 size={20} />
          <span>Projects</span>
        </NavLink>

        <NavLink to="/contact" className="bottom-nav-item">
          <Mail size={20} />
          <span>Contact</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
