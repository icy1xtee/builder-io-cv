import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/constants/skills";
import { Code2, Palette, Server, Smartphone } from "lucide-react";


export function About() {
  return (
    <section id="about" className="relative py-20 bg-muted/30 z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Обо мне
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Участвовал в разработке как крупных, так и небольших проектов на
                современном стеке.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Я специализируюсь на React и Typescript разработке, но всегда
                стремлюсь расширить свои навыки и получить опыт с новыми и
                современными технологиями в разработке интерфейсов.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                В свободное время играю на гитаре. <br /> Люблю digital art и
                мороженое.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Palette className="w-4 h-4 text-primary" />
                  <span>UI/UX Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Server className="w-4 h-4 text-primary" />
                  <span>Web App Development</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 h-full">
              <Card className="h-full flex flex-col justify-center bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Технические навыки
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
  );
}
