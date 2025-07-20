import { Button } from "@/components/ui/button";
import HeadHunterIcon from "@/icons/HeadHunterIcon";
import { TelegramIcon } from "@/icons/TelegramIcon";
import { Separator } from "@radix-ui/react-separator";
import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { CommonContacts } from "./commonWidgets/CommonContacts";

export function Contacts() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мне всегда интересно узнавать о новых возможностях и проектах. Если
            вам нужен разработчик на полный рабочий день или участник для open
            source-проекта —
            <br /> свяжитесь со мной по контактам ниже.
            <br />
            <b>Предпочтительный способ связи Telegram.</b>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CommonContacts type="messengers" />
          </div>
          <Separator className="my-8" />
          <div className="flex justify-center items-center gap-6">
            <CommonContacts type="social" withWebsite />
          </div>
        </div>
      </div>
    </section>
  );
}
