import React, { useState, useEffect } from 'react';
import { Code, Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme de commerce électronique moderne avec React et Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique avec visualisation de données en temps réel",
      tech: ["React", "D3.js", "Firebase", "Material-UI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "App Mobile Social",
      description: "Application mobile sociale avec fonctionnalités de messagerie",
      tech: ["React Native", "Redux", "Socket.io", "AWS"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
    },
    {
      title: "Blog Personnel",
      description: "Blog avec système de gestion de contenu et commentaires",
      tech: ["Next.js", "Markdown", "Vercel", "Tailwind"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
    },
    {
      title: "App de Gestion de Tâches",
      description: "Application de productivité avec synchronisation cloud",
      tech: ["React", "Firebase", "Redux", "PWA"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
    },
    {
      title: "Portfolio Photographe",
      description: "Site vitrine avec galerie interactive et filtres",
      tech: ["React", "Framer Motion", "Gatsby", "GraphQL"],
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop"
    }
  ];

  

  const experiences = [
    {
      title: "Développeuse Full-Stack Senior",
      company: "TechCorp",
      period: "2022 - Présent",
      description: "Développement d'applications web complexes et gestion d'équipe"
    },
    {
      title: "Développeuse Frontend",
      company: "WebAgency",
      period: "2020 - 2022",
      description: "Création d'interfaces utilisateur modernes et responsive"
    },
    {
      title: "Développeuse Junior",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Participation au développement de produits innovants"
    }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo gradient-text">
            &lt;Dev/&gt;
          </div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Cursor Effect */}
      <div 
        className="cursor-glow" 
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content fade-in-up">
          <div className="hero-text">
            <h1 className="hero-title gradient-text">
              Salut, je suis Wissal 👋
            </h1>
            <h2 className="hero-subtitle">
              Développeuse Web & Systèmes Intelligents Visuels Passionnée
            </h2>
            <p className="hero-description">
              Développeuse Web & Systèmes Intelligents Visuels, je combine le développement fullstack avec des approches d’intelligence artificielle et de vision par ordinateur.
              J’aime concevoir des interfaces performantes et intuitives, soutenues par un code propre et des technologies modernes.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-secondary">
                Me contacter
              </a>
            </div>
          </div>
          <div className="hero-image float">
            <Code size={200} color="#8a2be2" strokeWidth={1} />
          </div>
        </div>
        <a href="#about" className="scroll-indicator">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">À Propos</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              Passionnée par l’informatique depuis plusieurs années, je me spécialise dans le développement 
              web et les systèmes intelligents visuels. Mon travail allie la création d’interfaces web modernes 
              avec React et la conception de backends robustes avec Django et Spring Boot.
              </p>
              
              <p>
              J’aime explorer la frontière entre le code et l’intelligence artificielle, en développant 
              des solutions intégrant le machine learning, le traitement d’images et les systèmes de recommandation. 
              Mon objectif est de concevoir des applications utiles, performantes et inspirées par l’innovation.
              </p>
              
              <p>
              En dehors du développement, je m’intéresse à l’analyse de données, aux projets multimédias 
              et à la recherche de nouvelles approches créatives dans l’informatique visuelle. 
              J’aime apprendre en continu et partager mes découvertes avec la communauté.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projets Complétés</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Années d'Expérience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Clients Satisfaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
  <div className="container">
    <h2 className="section-title">Compétences</h2>
    <div className="skills-grid">
      {[
        // 💻 Langages de programmation
        { name: "Java", level: 90, category: "Langages de programmation" },
        { name: "C", level: 85, category: "Langages de programmation" },
        { name: "Python", level: 95, category: "Langages de programmation" },
        { name: "PHP", level: 80, category: "Langages de programmation" },

        // 🗃️ Bases de données
        { name: "SQL", level: 85, category: "Bases de données" },
        { name: "PostgreSQL", level: 80, category: "Bases de données" },
        { name: "SQL Plus", level: 75, category: "Bases de données" },

        // 🌐 Développement web
        { name: "React.js", level: 90, category: "Développement Web Frontend" },
        { name: "Django", level: 85, category: "Développement Web Backend" },
        { name: "Spring Boot", level: 80, category: "Développement Web Backend" },
        { name: "JWT Authentication", level: 85, category: "Sécurité & Authentification" },

        // 🤖 Intelligence artificielle et apprentissage automatique
        { name: "Machine Learning", level: 90, category: "IA & Apprentissage Automatique" },
        { name: "Systèmes de Recommandation", level: 85, category: "IA & Apprentissage Automatique" },
        { name: "Traitement et Analyse de Données", level: 90, category: "IA & Apprentissage Automatique" },
        { name: "Prétraitement des Données", level: 80, category: "IA & Apprentissage Automatique" },

        // 🧠 Informatique visuelle & multimédia
        { name: "Traitement d'Images", level: 85, category: "Informatique Visuelle & Multimédia" },
        { name: "Analyse d'Images", level: 80, category: "Informatique Visuelle & Multimédia" },
        { name: "Multimédia", level: 75, category: "Informatique Visuelle & Multimédia" },
        { name: "Jeux", level: 70, category: "Informatique Visuelle & Multimédia" },

        // 🛠️ Outils et gestion de projet
        { name: "Git & GitHub", level: 90, category: "Outils de Développement" },
        { name: "VS Code", level: 95, category: "Outils de Développement" },
      ].map((skill, index) => (
        <div
          key={index}
          className="skill-item"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          <div className="skill-category">{skill.category}</div>
          <div className="skill-bar-container">
            <div
              className="skill-bar"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Expérience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-period">{exp.period}</div>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Mes Projets</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <ExternalLink size={32} />
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Me Contacter</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>
                Vous avez un projet en tête ? N'hésitez pas à me contacter. 
                Je suis toujours ouverte à discuter de nouvelles opportunités et collaborations.
              </p>
              <div className="social-links">
                <a href="https://github.com/wissal-code07" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/benkouider-wissal-59a7172b7/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=wissalbenkouider71@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <Mail size={24} />
  <span>wissalbenkouider71@gmail.com</span>
</a>

              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Votre nom" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Votre email" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Sujet" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Votre message" rows="5" className="form-input" required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 WISSAL - Développeuse Web & Systèmes Intelligents Visuels Passionnée. Tous droits réservés.</p>
        <p>Fait avec ❤️ et React</p>
      </footer>
    </div>
  );
}
