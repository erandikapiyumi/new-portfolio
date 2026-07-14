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
          Portfoilo
        </h2>


        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

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

      <img 
        src="/profile.jpg"
        alt="Piyumi Dewapaksha"
        className="profile-img"
      />

    </div>

  </div>

</section>



      {/* ABOUT SECTION */}


      <section id="about">


        <h2>
          About Me
          <a href="c:\Users\GLOBAL TRADINGS\Downloads\Grad 28_1_26 Edited\Piyumi\RRR07034.jpg" target="_blank" rel="noreferrer">
          
          </a>
        </h2>



        <p>

          <p>
  I am a Software Engineering graduate passionate about
  Front-End Development, UI/UX Design, and creating
  innovative digital solutions. I have experience in
  developing responsive web applications, designing
  user-friendly interfaces, and transforming ideas into
  meaningful digital experiences.

  I enjoy solving complex problems, learning new
  technologies, and improving my skills in modern
  software development. I am passionate about writing
  clean, maintainable code and creating applications
  that provide excellent user experiences.

  My goal is to become a skilled Software Engineer
  who combines technical knowledge with creative design
  thinking to build impactful and efficient solutions.
</p>
        </p>

    

  <h2>Work Experience</h2>

  <div className="experience-container">

  {/* Card 1 */}

  <div className="experience-card">

    <div className="experience-icon">
      💻
    </div>

    <h3>
      Software Engineer Intern
    </h3>

    <h4>
      Lankatech Innovation
    </h4>

    <span className="experience-year">
      2025 - 2026
    </span>

    <ul>
      <li>
        Assisted in developing responsive web applications using React and JavaScript.
      </li>

      <li>
        Collaborated with the development team to implement new features.
      </li>

      <li>
        Fixed bugs and improved application performance.
      </li>
    </ul>

  </div>



  {/* Card 2 */}

  <div className="experience-card">

    <div className="experience-icon">
       💻
    </div>

    <h3>
      QA Technician
    </h3>

    <h4>
      GSS Company - Kurunegala
    </h4>

    <span className="experience-year">
      2024 - 2025
    </span>

    <ul>
      <li>
        Performed quality inspections to ensure products met company standards.
      </li>

      <li>
        Identified defects and reported quality issues.
      </li>

      <li>
        Maintained quality documentation and inspection records.
      </li>
    </ul>

  </div>


</div>
</section>



      {/* SKILLS SECTION */}


      <section id="skills">


        <h2>
          My Skills
        </h2>



        <div className="skills-container">


          {
            skills.map((skill,index)=>(

              <div 
                className="skill-card"
                key={index}
              >

                {skill}

              </div>

            ))
          }


        </div>


      </section>
    
      <section id="projects">
  <h2>Coding Projects</h2>

  <div className="projects-grid">
    {codingProjects.map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>{project.tech}</strong></p>
        <a href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    ))}
  </div>
</section>

<section id="uiux-projects">
  <h2>UI/UX Design Projects</h2>

  <div className="projects-grid">
    {uiuxProjects.map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>{project.tech}</strong></p>
        <a href={project.link} target="_blank" rel="noreferrer">
          View Design
        </a>
      </div>
    ))}
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