import React from "react";
import "./App.css";



function App() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MySQL",
    "Python",
    "Figma",
    "UI/UX Design",
    "Git & GitHub"
  ];


  const codingProjects = [
  {
    title: "Kids Game App",
    image: "/game.png",
    description:
      "Interactive kids quiz game built with React and Vite with a fun user-friendly interface.",
    tech: "React | Vite | CSS",
    link: "https://kids-game-app-1.vercel.app/"
  },

  {
    title: "Gym Management System",
    image: "/gym.png",
    description:
      "Full-stack gym management system with authentication and database integration.",
    tech: "React | Node.js | MySQL",
   link:"https://www.figma.com/design/YOUR_PROJECT_LINK"
  }

  

  
  
];

  const uiuxProjects = [
  {
    title: " Restuarent Food Ordering Website",
    image: "/food.png",
    description:
      "Modern food ordering mobile application with a clean and user-friendly interface.",
    tech: "Figma | UI Design | Prototype",
   link:"https://www.figma.com/design/3E0trn3hL7551GOCTObSRK/Untitled?node-id=0-1&t=ygs2Snx6ly6ZNn5G-1"
  },

  {
    title: "Fashion and Jewelry Mobile App",
    image: "/Fashion.png",
    description:
      "Luxury jewelry shopping website designed with a modern user experience.",
    tech: "Figma | UI/UX Design",
    link: "https://www.figma.com/design/eGAwbJ01wzPM98a6XOelce/Untitled?node-id=0-1&t=rLmeucL2wzZ0eBC2-1"
  },

  {
    title: "Healthcare Mobile App",
    image: "/Healthcare.png",
    description:
      "Healthcare mobile application for appointments, reports, and patient management.",
    tech: "Figma | Prototype",
    link: "https://www.figma.com/design/ajx0CssTJuIAPDVHAoiUSX/Untitled?node-id=0-1&t=5Pf3Gc4sWef1VRbc-1 "
  }
];  


  return (

    <div className="portfolio">


      {/* NAVBAR */}

      <nav>

        <h2 className="logo">
          Portfolio
        </h2>


        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>


<a href="#about">Working Experience</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>


        </div>

      </nav>



      {/* HOME SECTION */}


      <section id="home" className="home">

  <div className="home-container">

    {/* Text Part */}
    <div className="home-content">

      <h1>
        Hi, I'm <span className="name">Piyumi Dewapaksha</span>
      </h1>

      <h2>
        Software Engineer | Front-End Developer | UI/UX Designer
      </h2>

      <p>
        I create modern, responsive web applications
        and beautiful user experiences using latest
        technologies.
      </p>

    </div>


    {/* Image Part */}
    <div className="home-image">

  
<img src="/new-portfolio/profile.png" alt="Profile" className="profile-image profile-image-animate" />
    </div>

  </div>

</section>

{/* ABOUT & EXPERIENCE SECTION */}
<section id="about" className="about-experience-section">

  {/* About Me Details (සම්පූර්ණයෙන්ම මැදට සකසා ඇත) */}
  <div className="about-me-container">
    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
      About Me
    </h2>

    <div className="about-me-text">
      <p style={{ marginBottom: '1.25rem' }}>
        I am a Software Engineering graduate passionate about
        Front-End Development, UI/UX Design, and creating
        innovative digital solutions. I have experience in
        developing responsive web applications, designing
        user-friendly interfaces, and transforming ideas into
        meaningful digital experiences.
      </p>
      <p style={{ marginBottom: '1.25rem' }}>
        I enjoy solving complex problems, learning new
        technologies, and improving my skills in modern
        software development. I am passionate about writing
        clean, maintainable code and creating applications
        that provide excellent user experiences.
      </p>
      <p>
        My goal is to become a skilled Software Engineer
        who combines technical knowledge with creative design
        thinking to build impactful and efficient solutions.
      </p>
    </div>
  </div>

  {/* Working Experience Section Container (පොඩි පරතරයකින් පසුව ආරම්භ වේ) */}
  <div className="experience-box-container">
    
    {/* Left Side: Image Area */}
    <div className="exp-image-side">
      <img 
        src="working.png" 
        alt="Skills Visual" 
        style={{ width: '100', height: '100', objectFit: 'contain', borderRadius: '12px' }}
      />
    </div>

    {/* Right Side: Working Experience Content Area */}
    <div className="exp-content-side">
      
      <div>
        <h2 style={{ fontSize: '2.25rem', fontWeight: '700', letterSpacing: '0.05em', margin: 0 }}>
          Working <span style={{ color: '#00eeff' }}>Experience</span>
        </h2>
        <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontSize: '1rem' }}>
          My professional journey and the experience I have gained so far.
        </p>
      </div>

      {/* Experience Cards Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        
        {/* Card 1: Software Engineer Intern */}
        <div className="single-experience-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #334155', backgroundColor: '#0f172a', fontSize: '20px', flexShrink: 0 }}>
              💻
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                  Software Engineer Intern
                </h3>
                <span style={{ color: '#00eeff', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'rgba(0, 238, 255, 0.1)', padding: '4px 12px', borderRadius: '9999px' }}>
                  2024 - 2025
                </span>
              </div>
              <h4 style={{ color: '#cbd5e1', fontWeight: '500', fontSize: '0.875rem', marginTop: '4px', margin: 0 }}>
                Lankatech Innovation
              </h4>
            </div>
          </div>

          <ul>
            <li>Assisted in developing responsive web applications using React and JavaScript.</li>
            <li>Collaborated with the development team to implement new features.</li>
            <li>Fixed bugs and improved application performance.</li>
          </ul>
        </div>
      
        {/* Card 2: UI/UX Designer & Front-End Developer */}
        <div className="single-experience-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #334155', backgroundColor: '#0f172a', fontSize: '20px', flexShrink: 0 }}>
              💻
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                  UI/UX Designer and Front-End Devloper
                </h3>
                <span style={{ color: '#00eeff', fontSize: '0.75rem', fontWeight: '500', backgroundColor: 'rgba(0, 238, 255, 0.1)', padding: '4px 12px', borderRadius: '9999px' }}>
                  2025
                </span>
              </div>
              <h4 style={{ color: '#cbd5e1', fontWeight: '500', fontSize: '0.875rem', marginTop: '4px', margin: 0 }}>
                MC Digital Innovate Software Company.
              </h4>
            </div>
          </div>

          <ul>
            <li> New Design User interface for Taxi app .</li>
            <li> Designed Wireframes/UX Connected/animations.</li>
            <li>Joined Front end development and QA task.</li>
          </ul>
        </div>

      </div>

    </div>
  </div>

</section>

      {/* SKILLS SECTION */}
<section id="skills">
  <h2>My Skills</h2>
  
  <div className="skills-container">
    
    {/* HTML */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        alt="HTML Logo" 
      />
      <p>HTML</p>
    </div>

    {/* CSS */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        alt="CSS Logo" 
      />
      <p>CSS</p>
    </div>

    {/* JavaScript */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        alt="JavaScript Logo" 
      />
      <p>JavaScript</p>
    </div>

    {/* Tailwind CSS */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
        alt="Tailwind CSS Logo" 
      />
      <p>Tailwind CSS</p>
    </div>

    {/* React */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        alt="React Logo" 
      />
      <p>React</p>
    </div>

    {/* Next.js */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
        alt="Next.js Logo" 
        style={{ filter: 'invert(1)' }} /* Dark theme එකේ ලෝගෝ එක කැපී පෙනීමට */
      />
      <p>Next.js</p>
    </div>

    {/* Node.js */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        alt="Node.js Logo" 
      />
      <p>Node.js</p>
    </div>

    {/* Python */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        alt="Python Logo" 
      />
      <p>Python</p>
    </div>

    {/* MySQL */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        alt="MySQL Logo" 
      />
      <p>MySQL</p>
    </div>

    {/* Figma */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
        alt="Figma Logo" 
      />
      <p>Figma</p>
    </div>

    {/* GitHub */}
    <div className="skill-card">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        alt="GitHub Logo" 
        style={{ filter: 'invert(1)' }} /* Dark theme එකේ සුදුවට ලස්සනට පෙනීමට */
      />
      <p>GitHub</p>
    </div>

  </div>
</section>

{/* PROJECTS SECTION */}
<section id="projects" style={{ marginTop: '80px', padding: '40px 0' }}>
  <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '0.05em', margin: 0 }}>
      My Creative <span style={{ color: '#00eeff' }}>Projects</span>
    </h2>
    <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontSize: '1rem' }}>
      A showcase of my development work and professional UI/UX designs.
    </p>
  </div>

  <div className="projects-grid">

    {/* Project 1: Kids Game App */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="kids.jpg" 
          alt="Kids Game App" 
        />
      </div>
      <div className="project-info">
        <h3>Interactive Kids Game App</h3>
        <p>An engaging and educational web game designed for kids, featuring fun challenges, colorful visual cues, and interactive logic.</p>
        <div className="project-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS3</span>
        </div>
        <div className="project-links">
          <a href="https://kids-game-app-1.vercel.app/" target="_blank" rel="noreferrer" className="project-link-btn">🔗 Live Demo</a>
          <a href="https://github.com/erandikapiyumi" target="_blank" rel="noreferrer" className="project-link-btn">💻 GitHub</a>
        </div>
      </div>
    </div>

    {/* Project 2: Gym Management System */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="gym.png" 
          alt="Gym Management System" 
        />
      </div>
      <div className="project-info">
        <h3>Gym Management System</h3>
        <p>A comprehensive system developed to manage gym memberships, trainer schedules, and member check-ins with an intuitive interface.</p>
        <div className="project-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/erandikapiyumi" target="_blank" rel="noreferrer" className="project-link-btn">💻 GitHub</a>
        </div>
      </div>
    </div>

    {/* Project 3: Python To-Do List */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="to-do.png" 
          alt="Python To-Do List" 
        />
      </div>
      <div className="project-info">
        <h3>Smart To-Do List Application</h3>
        <p>A functional task management application built with Python to help users efficiently track, update, and manage their daily activities.</p>
        <div className="project-tags">
          <span>Python</span>
          <span>CLI / GUI</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/erandikapiyumi" target="_blank" rel="noreferrer" className="project-link-btn">💻 GitHub</a>
        </div>
      </div>
    </div>
    
    {/* Project 3:Pet Care Websie */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="pets.png" 
          alt="Pet Care Website" 
        />
      </div>
      <div className="project-info">
        <h3>Pet Care Website</h3>
        <p>A responsive and user-friendly pet care website designed to help pet owners explore pet care services, health tips, grooming information, and adoption resources through a clean and modern interface..</p>
        <div className="project-tags">
          <span>HTML</span>
          <span>CSS / JS</span>
        </div>
        <div className="project-links">
          <a href="https://pet-care-ruby.vercel.app/" target="_blank" rel="noreferrer" className="project-link-btn">🔗 Live Demo</a>
          <a href="https://github.com/erandikapiyumi" target="_blank" rel="noreferrer" className="project-link-btn">💻 GitHub</a>
        </div>
      </div>
    </div>
    
    

    {/* Project 4: Figma Healthcare App */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" 
          alt="Healthcare Mobile App" 
        />
      </div>
      <div className="project-info">
        <h3>Healthcare Mobile App Design</h3>
        <p>A user-centric UI/UX design for a mobile health platform focusing on doctor booking, patient records, and smooth navigational flow.</p>
        <div className="project-tags">
          <span>Figma</span>
          <span>UI/UX</span>
          <span>Mobile App</span>
        </div>
        <div className="project-links">
          <a href="https://www.figma.com/design/ajx0CssTJuIAPDVHAoiUSX/Untitled?t=0IVAawoBI1GnGM5B-1" target="_blank" rel="noreferrer" className="project-link-btn">🎨 Figma Link</a>
        </div>
      </div>
    </div>

    {/* Project 5: Figma Fashion Jewelry & Clothing */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="fashion.png" 
          alt="Fashion App" 
        />
      </div>
      <div className="project-info">
        <h3>Fashion Jewelry & Clothing Mobile App</h3>
        <p>A premium e-commerce app UI design with high-fidelity screens, elegant product cards, and seamless checkouts for fashion lovers.</p>
        <div className="project-tags">
          <span>Figma</span>
          <span>UI/UX</span>
          <span>E-Commerce</span>
        </div>
        <div className="project-links">
          <a href="https://www.figma.com/design/eGAwbJ01wzPM98a6XOelce/Untitled?t=0IVAawoBI1GnGM5B-1" target="_blank" rel="noreferrer" className="project-link-btn">🎨 Figma Link</a>
        </div>
      </div>
    </div>

    {/* Project 6: Restaurant Food Ordering Website */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="resturant.png" 
          alt="Food Ordering Website" 
        />
      </div>
      <div className="project-info">
        <h3>Restaurant Food Ordering Website UI</h3>
        <p>A delicious web design focused on online food ordering, modern cart systems, beautiful imagery layouts, and intuitive UX.</p>
        <div className="project-tags">
          <span>Figma</span>
          <span>UI/UX</span>
          <span>Web Design</span>
        </div>
        <div className="project-links">
          <a href="https://www.figma.com/design/3E0trn3hL7551GOCTObSRK/Untitled?node-id=0-1&t=0IVAawoBI1GnGM5B-1" target="_blank" rel="noreferrer" className="project-link-btn">🎨 Figma Link</a>
        </div>
      </div>
    </div>

    {/* Project 7: Cricket Stadium Ticket Booking Website */}
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          src="cricket.png" 
          alt="Ticket Booking Website" 
        />
      </div>
      <div className="project-info">
        <h3>Cricket Stadium Ticket Booking Website</h3>
        <p>An innovative stadium ticketing layout featuring seat maps, quick match bookings, and user dashboards for sport fans.</p>
        <div className="project-tags">
          <span>Figma</span>
          <span>UI/UX</span>
          <span>Web Design</span>
        </div>
        <div className="project-links">
          <a href="https://www.figma.com/design/XXj0LVyo3oQ4MwGrqqilz0/Untitled?t=0IVAawoBI1GnGM5B-1" target="_blank" rel="noreferrer" className="project-link-btn">🎨 Figma Link</a>
        </div>
      </div>
    </div>

  </div>
</section>

     {/* EDUCATION SECTION */}

<section id="education">

  <h2>Education</h2>


  <div className="education-timeline">


    {/* Degree */}

    <div className="education-item">

      <div className="education-dot">

  <img 
    src="/edu.png"
    alt="Education"
  />

</div>


      <div className="education-content">

        <h3>
          Bachelor of Information and Communication Technology
        </h3>

        <h4>
          Software Engineering Degree IBA Campus,Kandy |(AEU Malaysia)
        </h4>

        <p>
          Completed Software Engineering Degree with knowledge
          in software development, web technologies, and database systems.
        </p>

        <span>
          2021 - 2025
        </span>

      </div>

    </div>



    {/* UI UX */}

    <div className="education-item">


      <div className="education-dot">

  <img 
    src="/ui.png"
    alt="UI UX Design"
  />

</div>


      <div className="education-content">

        <h3>
          UI/UX Designing Course
        </h3>

        <h4>
          Academy of Design Excellence (IQA America)
        </h4>

        <p>
          Completed UI/UX Design training focusing on
          user research, wireframing, prototyping, and Figma.
        </p>

        <span>
          Completed in 2026
        </span>

      </div>

    </div>



    {/* ICT Training */}

    <div className="education-item">


      <div className="education-dot">

  <img 
    src="/ict.png"
    alt="ICT Degree"
  />

</div>


      <div className="education-content">

        <h3>
          Basic ICT Skills Training Program
        </h3>

        <h4>
          University of Peradeniya
        </h4>

        <p>
          Short term training program covering basic ICT skills,
          computer applications, and digital technologies.
        </p>

        <span>
          Completed
        </span>

      </div>

    </div>


  </div>


</section>





{/* CONTACT SECTION */}

<section id="contact">

  <h2>Contact Me</h2>


  <div className="contact-wrapper">


    {/* Contact Information */}

    <div className="contact-info">

      <h3>
        Get In Touch
      </h3>

      <p>
        Feel free to contact me for projects,
        opportunities or collaborations.
      </p>


      <div className="contact-detail">
        📧
        <a href="mailto:k15353.piyumi@gmail.com">
          k15353.piyumi@gmail.com
        </a>
      </div>


      <div className="contact-detail">
        📱
        <span>
          +94 XX XXX XXXX
        </span>
      </div>





      <div className="contact-detail">

  <img 
    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
    alt="GitHub"
    className="social-logo"
  />

  <a 
    href="https://github.com/erandikapiyumi"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub Profile
  </a>

</div>


    </div>



    {/* Message Form */}
    
    

    <div className="contact-form">


      <h3>
        Send Me a Message
      </h3>


      <input 
        type="text"
        placeholder="Your Name"
      />


      <input 
        type="email"
        placeholder="Your Email"
      />


      <textarea
        placeholder="Your Message"
        rows="5"
      ></textarea>


      <button>
        Send Message
      </button>


    </div>


  </div>


</section>

      {/* FOOTER SECTION */}

<footer className="footer">

  <div className="footer-content">


    <h3>
      Piyumi Dewapaksha
    </h3>


    <p>
      Software Engineer | Front-End Developer | UI/UX Designer
    </p>


    <div className="footer-links">


      <a 
        href="mailto:k15353.piyumi@gmail.com"
      >
        📧 Email
      </a>


      <a
        href="https://github.com/erandikapiyumi"
        target="_blank"
        rel="noopener noreferrer"
      >
        💻 GitHub
      </a>


      <a
        href="https://www.linkedin.com/in/piyumi-dewapaksha-1828ba295"
        target="_blank"
        rel="noopener noreferrer"
      >
        💼 LinkedIn
      </a>


    </div>


    <p className="copyright">
      © 2026 Piyumi Dewapaksha. All Rights Reserved.
    </p>


  </div>


</footer>
    </div>

  );

}


export default App;