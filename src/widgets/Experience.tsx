import { experiences } from "@/constants/experiences";
import { CommonExperience } from "./commonWidgets/CommonExperience";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Коммерческий опыт
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <CommonExperience key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
