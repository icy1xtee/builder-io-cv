import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
} from "lucide-react";

export default function Index() {
  const skills = {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
    ],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "Webpack", "Vite", "Figma", "Adobe XD"],
    other: ["GraphQL", "REST APIs", "Testing", "Agile", "CI/CD"],
  };

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Lead development of responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UIs and improved performance by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      location: "Remote",
      description:
        "Developed and maintained multiple client-facing applications. Implemented modern design systems and accessibility standards across all projects.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Jest"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      location: "Austin, TX",
      description:
        "Built responsive websites and landing pages for various clients. Gained experience in full-stack development and client communication.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations and optimized performance.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">Alex Johnson</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <Button size="sm" className="hidden md:inline-flex">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, accessible, and performant web
            experiences. 4+ years of experience building modern applications
            with React, TypeScript, and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              San Francisco, CA
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate frontend developer with a keen eye for design
                  and a love for creating seamless user experiences. My journey
                  in web development started 4 years ago, and I've been
                  constantly learning and evolving with the ever-changing
                  landscape of web technologies.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  I specialize in React and TypeScript development, but I'm
                  always excited to explore new technologies and frameworks.
                  When I'm not coding, you can find me contributing to
                  open-source projects or mentoring junior developers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Palette className="w-4 h-4 text-primary" />
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Server className="w-4 h-4 text-primary" />
                    <span>Full-Stack Development</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Frontend</p>
                      <div className="flex flex-wrap gap-1">
                        {skills.frontend.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Backend & Database
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {skills.backend.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Tools & Others</p>
                      <div className="flex flex-wrap gap-1">
                        {[...skills.tools, ...skills.other].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Education
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Bachelor of Science in Computer Science
                </CardTitle>
                <CardDescription>
                  University of California, Berkeley • 2015 - 2019
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focused on software engineering, data structures, and
                  algorithms. Graduated Magna Cum Laude with a 3.8 GPA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's connect and discuss how we can create
              something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                alex.johnson@example.com
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </Button>
            </div>
            <Separator className="my-8" />
            <div className="flex justify-center items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Alex Johnson. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
