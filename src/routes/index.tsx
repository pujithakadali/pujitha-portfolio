import { createFileRoute } from "@tanstack/react-router";
import { Shield, Github, Linkedin, Mail, Code2, Terminal, Lock, Cpu, Database, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import screenshot4 from "@/assets/screenshot-4.png";
import screenshot5 from "@/assets/screenshot-5.png";
import screenshot6 from "@/assets/screenshot-6.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ============================================================
   EDIT YOUR PERSONAL DATA HERE
   ============================================================ */

// --- Contact links: edit your email, GitHub and LinkedIn ---
const CONTACT = {
  email: "pujithakadali097@gmail.com",       // <-- EDIT EMAIL
  github: "https://github.com/pujithakadali", // <-- EDIT GITHUB URL
  linkedin: "https://www.linkedin.com/in/pujitha-kadali", // <-- EDIT LINKEDIN URL
};

// --- Skills list: add or remove items freely ---
const SKILLS = [
  { name: "Python", icon: Code2 },
  { name: "Django", icon: Terminal },
  { name: "HTML / CSS", icon: FileCode2 },
  { name: "SQL", icon: Database },
  { name: "Kali Linux", icon: Shield },
  { name: "Cybersecurity", icon: Lock },
];

// --- Project tech stack badges ---
const PROJECT_TECH = [
  "Python", "Django", "HTML/CSS", "SQLite / PostgreSQL",
  "TensorFlow / PyTorch", "OpenAI API", "Scapy", "GitHub",
];

// --- Project feature list ---
const PROJECT_FEATURES = [
  "AI-assisted threat analysis",
  "Real-time packet monitoring",
  "User authentication system",
  "Admin dashboard",
  "User management",
  "Threat categorization",
  "Adaptive learning approach",
  "GAN detection module",
  "Synthesis module",
];

// --- Project GitHub link (edit later) ---
const PROJECT_REPO = "https://github.com/your-username/cyber-threat-intel"; // <-- EDIT REPO URL

// --- Project screenshots: replace src with your uploaded image paths ---
// To add a new screenshot, just add another object to this array.
const SCREENSHOTS = [
  { src: screenshot1, alt: "Landing page" },
  { src: screenshot2, alt: "Admin login" },
  { src: screenshot3, alt: "Admin dashboard" },
  { src: screenshot4, alt: "User Login" },
  { src: screenshot5, alt: "Cyberattack Simulation" },
  { src: screenshot6, alt: "Detection Consensus & Model Predictions" },
];

/* ============================================================ */

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Screenshots />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const links = [
    ["About", "#about"], ["Skills", "#skills"], ["Project", "#project"],
    ["Screenshots", "#screenshots"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono text-primary text-glow">
          <Shield className="h-5 w-5" />
          <span className="font-semibold">pujitha<span className="text-muted-foreground">.kadali</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-muted-foreground hover:text-primary transition-colors">
              <span className="text-primary/60">//</span> {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* -------------------- HERO / HOME -------------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36 animate-fade-up">
        <p className="font-mono text-sm text-primary mb-4 cursor-blink">$ whoami</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Pujitha <span className="text-primary text-glow">Kadali</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-accent font-mono">
          &gt; Cybersecurity &amp; AI Enthusiast
        </p>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Aspiring developer focused on secure web technologies, Generative AI, and
          backend engineering with Django. I build practical projects that explore
          the intersection of machine learning and cybersecurity.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="border-glow">
            <a href="#project">View Project</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <Section id="about" label="01" title="About Me">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          {/* EDIT ABOUT TEXT BELOW */}
          <p>
            I am passionate about <span className="text-foreground">cybersecurity</span>,{" "}
            <span className="text-foreground">Generative AI</span>, and secure web
            technologies. My interest in backend development led me to learn the Django
            framework and explore both frontend and backend development. I enjoy
            building practical projects, learning modern technologies, and continuously
            improving my technical skills.
          </p>
          <p>
            I developed a project titled{" "}
            <span className="text-primary">
              “Enhancing Cyber Threat Intelligence Using Generative AI Techniques”
            </span>
            , which helped me gain experience in authentication systems, database
            handling, secure web application concepts, and project development
            workflows.
          </p>
        </div>
        <Card className="p-6 bg-card/60 backdrop-blur border-border h-fit">
          <p className="font-mono text-xs text-primary mb-3">// profile</p>
          <dl className="space-y-3 text-sm">
            <Row k="Role" v="Cybersecurity & AI" />
            <Row k="Focus" v="Secure Web Apps" />
            <Row k="Stack" v="Python · Django" />
            <Row k="Status" v={<span className="text-primary">Open to opportunities</span>} />
          </dl>
        </Card>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/50 pb-2 last:border-0">
      <dt className="text-muted-foreground font-mono">{k}</dt>
      <dd className="text-foreground text-right">{v}</dd>
    </div>
  );
}

/* -------------------- SKILLS -------------------- */
function Skills() {
  return (
    <Section id="skills" label="02" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {SKILLS.map((s) => (
          <Card
            key={s.name}
            className="p-5 flex flex-col items-center gap-3 bg-card/60 backdrop-blur hover:border-primary/60 hover:-translate-y-1 transition-all"
          >
            <s.icon className="h-7 w-7 text-primary" />
            <span className="text-sm font-mono">{s.name}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- PROJECT -------------------- */
function Project() {
  return (
    <Section id="project" label="03" title="Featured Project">
      <Card className="p-6 md:p-10 bg-card/60 backdrop-blur border-border">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-primary mb-2">// flagship_project</p>
            <h3 className="text-2xl md:text-3xl font-bold">
              Enhancing Cyber Threat Intelligence Using Generative AI Techniques
            </h3>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <a href={PROJECT_REPO} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4 mr-2" /> Repository
            </a>
          </Button>
        </div>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          This project focuses on improving cyber threat intelligence using Generative
          AI and Machine Learning techniques. The system is designed to analyze
          cybersecurity event data, identify suspicious activities, and support
          real-time threat detection. The platform helps improve security operations
          by reducing dependency on traditional signature-based detection systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-mono text-sm text-primary mb-3">// features</h4>
            <ul className="space-y-2">
              {PROJECT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Cpu className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm text-primary mb-3">// tech_stack</h4>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TECH.map((t) => (
                <Badge key={t} variant="secondary" className="font-mono border border-border">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

/* -------------------- SCREENSHOTS -------------------- */
function Screenshots() {
  return (
    <Section id="screenshots" label="04" title="Project Screenshots">
      <p className="text-muted-foreground mb-6 text-sm font-mono">
        // Replace placeholders with your uploaded screenshots in the SCREENSHOTS array
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {SCREENSHOTS.map((shot, i) => (
          <Card
            key={i}
            className="aspect-video overflow-hidden bg-muted/30 border-dashed border-border flex items-center justify-center group hover:border-primary/60 transition-colors"
          >
            {shot.src ? (
              <img src={shot.src} alt={shot.alt} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-muted-foreground font-mono text-sm p-6">
                <Terminal className="h-8 w-8 mx-auto mb-2 text-primary/60" />
                screenshot_{String(i + 1).padStart(2, "0")}.png
                <p className="text-xs mt-1 opacity-70">{shot.alt}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Github, label: "GitHub", value: CONTACT.github.replace(/^https?:\/\//, ""), href: CONTACT.github },
    { icon: Linkedin, label: "LinkedIn", value: CONTACT.linkedin.replace(/^https?:\/\//, ""), href: CONTACT.linkedin },
  ];
  return (
    <Section id="contact" label="06" title="Contact">
      <Card className="p-8 md:p-12 bg-card/60 backdrop-blur text-center">
        <p className="font-mono text-primary mb-3">$ ./connect.sh</p>
        <h3 className="text-3xl md:text-4xl font-bold mb-3">Let's build something secure.</h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Open to internships, collaborations, and entry-level roles in cybersecurity
          and AI-driven backend engineering.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              target={i.label === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="group p-5 rounded-lg border border-border bg-background/40 hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              <i.icon className="h-5 w-5 text-primary mx-auto" />
              <p className="font-mono text-xs text-muted-foreground mt-3">{i.label}</p>
              <p className="text-sm truncate mt-1 group-hover:text-primary transition-colors">
                {i.value}
              </p>
            </a>
          ))}
        </div>
      </Card>
    </Section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Pujitha Kadali</p>
        <p className="text-primary/70">// built with security in mind</p>
      </div>
    </footer>
  );
}

/* -------------------- SECTION WRAPPER -------------------- */
function Section({
  id, label, title, children,
}: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28 scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-sm text-primary">{label}.</span>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <span className="flex-1 h-px bg-border ml-4" />
      </div>
      {children}
    </section>
  );
}
