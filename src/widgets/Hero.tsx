import HeadHunterIcon from "@/icons/HeadHunterIcon";
import { Code2, Github, MapPin } from "lucide-react";
import { CommonContacts } from "./commonWidgets/CommonContacts";
import { personal } from "@/constants/personal";
import { Me } from "./Me";

export function Hero() {
  return (
    <section className="flex flex-row items-center justify-center">
      <Me />
      <div className="py-20 px-4 text-center relative z-0">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Королёв Павел
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Frontend Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CommonContacts type="hero" />
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            <CommonContacts type="social" />
            <div className="flex items-center text-sm text-muted-foreground/80">
              <MapPin className="w-4 h-4 mr-1" />
              {personal.currentLocation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
