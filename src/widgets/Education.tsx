import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Образование
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-2xl">
                <GraduationCap className="min-w-5 min-h-5" />
                Санкт-Петербургский политехнический университет Петра Великого
              </CardTitle>
              <CardDescription>
                Институт энергетики и транспортных систем, электромеханический
                факультет <br />
                Бакалавриат • 2016 - 2020
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
