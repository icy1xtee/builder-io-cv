import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { personal } from "@/constants/personal";
import { toast } from "@/hooks/use-toast";
import HeadHunterIcon from "@/icons/HeadHunterIcon";
import { TelegramIcon } from "@/icons/TelegramIcon";
import {
  Copy,
  ExternalLink,
  Github,
  Globe,
  Mail,
  MessagesSquareIcon,
} from "lucide-react";
import resume from "@/assets/resume.pdf";

export function CommonContacts({
  type,
  withWebsite,
}: {
  type: "messengers" | "hero" | "social";
  withWebsite?: boolean;
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Ссылка скопирована в буфер обмена.",
      });
    } catch (err) {
      toast({
        title: "Не удалось скопировать ссылку.",
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Korolev Pavel frontend developer CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  switch (type) {
    case "messengers":
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="max-w-[250px]">
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                {personal.mail}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleCopy}>
                <Copy className="w-4 h-4 mr-2" />
                Скопировать
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => window.open(`mailto:${personal.mail}`)}
              >
                <MessagesSquareIcon className="w-4 h-4 mr-2" />
                Написать
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={() => window.open(personal.tgLink, "_blank")}
            variant="outline"
            size="lg"
            className="min-w-[250px] max-w-[250px] w-full sm:w-auto"
          >
            <TelegramIcon className="w-4 h-4 mr-2" />
            {personal.tg}
          </Button>
        </>
      );

    case "hero":
      return (
        <>
          <Button
            onClick={() => window.open(personal.tgLink, "_blank")}
            size="lg"
            variant='outline'
            className="min-w-48 max-w-48 sm:w-auto"
          >
            <TelegramIcon className="w-4 h-4 fill-white" />
            Написать в Telegram
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-48 max-w-48 sm:w-auto"
            onClick={() => downloadCV()}
          >
            <ExternalLink className="w-4 h-4 " />
            Скачать резюме
          </Button>
        </>
      );

    case "social":
      return (
        <>
          <a
            href={personal.github}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
          >
            <Github className="w-6 h-6" />
          </a>
          {/* <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a> */}
          <a
            href={personal.headhunter}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
          >
            <HeadHunterIcon className="w-6 h-6" />
          </a>
          {withWebsite && (
            <a
              href={personal.website}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-6 h-6" />
            </a>
          )}
        </>
      );
    default:
      return null;
  }
}
