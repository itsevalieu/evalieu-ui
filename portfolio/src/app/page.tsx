import Link from "next/link";
import { projects } from "../data/projects";
import ContactSection from "../components/layout/Contact";

export default function Home() {
  // Show only the latest 3 projects on the homepage
  const latestProjects = projects.slice(0, 3);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <section style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Hi, I'm Developer Name
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
          A passionate web developer focused on creating modern, responsive
          websites and applications.
        </p>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
          Latest Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {latestProjects.map((project, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h3 style={{ color: "var(--primary-color)" }}>{project.title}</h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.85rem",
                  margin: "0.5rem 0",
                }}
              >
                {project.date}
              </p>
              <p style={{ marginBottom: "1rem" }}>{project.description}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#f0f0f0",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                style={{
                  color: "var(--primary-color)",
                  fontWeight: "500",
                }}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              background: "var(--primary-color)",
              color: "white",
              borderRadius: "4px",
              fontWeight: "500",
            }}
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section id="contact" style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem" }}>Get In Touch</h2>
        <p style={{ marginBottom: "2rem" }}>
          I'm currently available for freelance work or full-time positions.
        </p>
        <a
          href="mailto:your.email@example.com"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            background: "var(--primary-color)",
            color: "white",
            borderRadius: "4px",
            fontWeight: "500",
          }}
        >
          Contact Me
        </a>
      </section>
      <ContactSection />
    </div>
  );
}
