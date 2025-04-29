// Assets
import Fallen from "../../assets/fallen.svg";
import Kscerato from "../../assets/kscerato.svg";
import Yuurih from "../../assets/yuurih.svg";
import TeamMember from "../TeamMember";

const teamMembers = [
  {
    id: "fallen",
    image: Fallen,
    name: "FalleN (Professor)",
    role: ["In Game Leader"],
    description:
      "Fallen é o IGL experiente da FURIA, liderando com estratégia e visão de jogo. Lenda do CS e peça fundamental para o time!",
  },
  {
    id: "kscerato",
    image: Kscerato,
    name: "KSCERATO",
    role: ["Rifler"],
    description:
      "KSCERATO é um rifler talentoso da FURIA, conhecido pela agressividade e habilidade de clutchar. Um pilar do time e crucial para o sucesso!",
  },
  {
    id: "yuurih",
    image: Yuurih,
    name: "yuurih",
    role: ["Rifler"],
    description:
      "Yuurih é rifler da FURIA, conhecido pela consistência e posicionamento estratégico. Peça chave no setup dos rounds e no controle do mapa.",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full min-h-150 bg-radial from-neutral-800 from-20% to-neutral-900 py-20">
      <div className="max-w-5xl h-full mx-auto flex flex-col items-start gap-6 px-5">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-white">
            Line-up Furia E-Sports
          </h2>
          <p className="text-lg font-semibold text-white/80 text-center">
            Conheça a equipe que está por trás do sucesso dos nossos jogos
          </p>
        </div>
        <div className="w-full h-full flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
