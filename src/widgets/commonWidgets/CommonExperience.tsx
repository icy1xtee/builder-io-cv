// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";
// import { IExp } from "@/constants/experiences";
// import { getDurationString } from "@/lib/getDurationString";

// export function CommonExperience({ key, exp }: { key: number; exp: IExp }) {
//   return (
//     <Card key={key} className="relative">
//       <CardHeader>
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//           <div>
//             <CardTitle className="flex items-center gap-2">
//               <Briefcase className="w-5 h-5" />
//               {exp.company}
//               <a href={exp.companyLink} target="_blank">
//                 <ExternalLink className="stroke-black/50 hover:stroke-black duration-500 w-4 h-4" />
//               </a>
//             </CardTitle>

//             <CardDescription className="text-base font-medium text-primary">
//               {exp.title}
//             </CardDescription>
//           </div>
//           <div className="text-sm text-muted-foreground flex flex-col items-end">
//             <div className="flex items-center gap-1 mb-1 line-clamp-2 text-right">
//               {exp.period}
//               {exp.periodFrom
//                 ? ` | ${getDurationString(exp.periodFrom)}`
//                 : null}
//               <Calendar className="w-4 h-4" />
//             </div>
//             <div className="flex items-center gap-1">
//               {exp.location}
//               <MapPin className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <p className="text-muted-foreground mb-4">{exp.shortDescription}</p>
//         <p className="text-muted-foreground mb-4">{exp.fullDescription}</p>
//         <div className="flex flex-wrap gap-2">
//           {exp.technologies.map((tech) => (
//             <Badge key={tech} variant="outline" className="text-xs">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";
import { IExp } from "@/constants/experiences";
import { getDurationString } from "@/lib/getDurationString";

export function CommonExperience({ key, exp }: { key: number; exp: IExp }) {
  const ref = useRef(null);
  const shortRef = useRef<HTMLParagraphElement>(null);
  const fullRef = useRef<HTMLParagraphElement>(null);

  const [shortHeight, setShortHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  useEffect(() => {
    if (shortRef.current && fullRef.current) {
      setShortHeight(shortRef.current.offsetHeight);
      setFullHeight(fullRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const dynamicHeight = useTransform(
    scrollYProgress,
    [0, 0.5],
    [shortHeight, fullHeight],
  );
  const animatedHeight = useSpring(dynamicHeight, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <Card key={key} className="relative" ref={ref}>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {exp.company}
              <a href={exp.companyLink} target="_blank">
                <ExternalLink className="stroke-black/50 hover:stroke-black duration-500 w-4 h-4" />
              </a>
            </CardTitle>

            <CardDescription className="text-base font-medium text-primary">
              {exp.title}
            </CardDescription>
          </div>
          <div className="text-sm text-muted-foreground flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1 line-clamp-2 text-right">
              {exp.period}
              {exp.periodFrom
                ? ` | ${getDurationString(exp.periodFrom)}`
                : null}
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1">
              {exp.location}
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <motion.div
          style={{
            position: "relative",
            height: animatedHeight,
            overflow: "hidden",
          }}
        >
          <motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]),
              position: "absolute",
              top: 0,
            }}
            className="text-muted-foreground mb-4"
          >
            {exp.shortDescription}
          </motion.p>
          <motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1]),
              position: "absolute",
              top: 0,
            }}
            className="text-muted-foreground mb-4"
          >
            {exp.fullDescription}
          </motion.p>
        </motion.div>

        <div
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            opacity: 0,
            height: "auto",
            overflow: "visible",
          }}
        >
          <p ref={shortRef} className="text-muted-foreground mb-4">
            {exp.shortDescription}
          </p>
          <p ref={fullRef} className="text-muted-foreground mb-4">
            {exp.fullDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {exp.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
