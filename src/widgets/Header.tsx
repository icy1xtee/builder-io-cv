import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { LanguagesIcon } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [language, setLanguage] = useState<string>("Русский");

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto max-w-[1400px] px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary w-36"></div>
          <div className="hidden md:flex items-center gap-x-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Опыт
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </div>
          <div className="w-36">
            <Select onValueChange={(v) => setLanguage(v)} value={language}>
              <SelectTrigger>
                <div className="flex flex-row gap-x-2 items-center justify-center">
                  <LanguagesIcon className="w-4 h-4" />
                  {language}
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Русский">Русский</SelectItem>
                <SelectItem disabled value="English">
                  English | Not ready yet 
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </nav>
      </div>
    </header>
  );
}
