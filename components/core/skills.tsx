"use client";

import {
  SiDrizzle,
  SiHono,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { HoverEffect } from "../ui/hover-effect";
import {
  DiGoogleCloudPlatform,
  DiJava,
  DiMongodb,
  DiNodejs,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";

export function Skills() {
  const skills = [
    { title: "Typescript", icon: SiTypescript },
    { title: "Java", icon: DiJava },
    { title: "React", icon: SiReact },
    { title: "Next.js", icon: SiNextdotjs },
    { title: "TailwindCSS", icon: SiTailwindcss },
    { title: "Node.js", icon: SiNodedotjs },
    { title: "Hono", icon: SiHono },
    { title: "Postgres", icon: SiPostgresql },
    { title: "MongoDB", icon: DiMongodb },
    { title: "Drizzle ORM", icon: SiDrizzle },
    { title: "AWS", icon: FaAws },
    { title: "Google Cloud", icon: DiGoogleCloudPlatform },
  ];

  return (
    <div className="pt-32">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Skills🛠️</h1>
        <div className="w-24 h-2 rounded-full bg-green-500" />
        <div className="w-24 h-2 rounded-full bg-indigo-500 translate-x-4" />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
