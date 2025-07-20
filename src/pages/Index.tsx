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
import { Header } from "@/widgets/Header";
import { Hero } from "@/widgets/Hero";
import { About } from "@/widgets/About";
import { Experience } from "@/widgets/Experience";
import { Education } from "@/widgets/Education";
import { Contacts } from "@/widgets/Contacts";
import { Footer } from "@/widgets/Footer";
import { Projects } from "@/widgets/Projects";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
