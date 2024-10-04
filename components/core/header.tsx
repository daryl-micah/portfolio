import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export const Header = () => {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/daryl-micah",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      Link: "https://www.github.com/daryl-micah",
      Label: "GitHub",
      Icon: SiGithub,
    },
    {
      Link: "https://www.x.com/_darylm",
      Label: "X",
      Icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-4 decoration-green-500 -rotate-2">
        DM👨‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.Link} key={index}>
              <Icon className="size-6 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
