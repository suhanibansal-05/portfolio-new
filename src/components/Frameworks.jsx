import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "azure.svg" },
    { name: "Jenkins-Symbol.png" },
    { name: "amazon-web-services-logo.png" },
    { name: "Docker-Logo-2013-2015.png" },
    { name: "k8s-logo.png" },
    { name: "microsoft.svg" },
    { name: "javascript.svg" },
    { name: "css3.svg" },
    { name: "csharp.svg" },
    { name: "html5.svg" },
    { name: "tailwindcss.svg" },
    { name: "git.svg" },
  ];
  return (
    <div className="relative flex h-[24rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={48} radius={220}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={32} radius={160} reverse speed={2}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="w-12 h-12 object-contain duration-200 rounded-sm hover:scale-110" />
);
