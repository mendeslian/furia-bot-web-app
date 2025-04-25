// Assets
import Fallen from "../../assets/fallen.svg";
import Kscerato from "../../assets/kscerato.svg";
import Yuurih from "../../assets/yuurih.svg";

export default function TeamSection() {
  const teamMembers = [
    {
      image: Fallen,
      name: "Fallen",
      role: ["In Game Leader", "Awper"],
      description:
        "Fallen é o AWP/IGL experiente da FURIA, liderando com estratégia e visão de jogo. Lenda do CS e peça fundamental para o time! ",
    },
    {
      image: Kscerato,
      name: "Kscerato",
      role: ["Rifler"],
      description:
        "KSCERATO é um rifler talentoso da FURIA, conhecido pela agressividade e habilidade de clutchar. Um pilar do time e crucial para o sucesso! ",
    },
    {
      image: Yuurih,
      name: "Yuurih",
      role: ["Rifler"],
      description:
        "Yuurih é rifler da FURIA, conhecido pela consistência e posicionamento estratégico. Peça chave no setup dos rounds e no controle do mapa. ",
    },
  ];
  function TeamMember({ image, name, role, description }) {
    return (
      <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center gap-4 rounded py-4 px-8 shadow-2xl duration-200 hover:scale-105">
        <img
          src={image}
          alt={name}
          draggable={false}
          className="w-40 h-40 select-none rounded-full "
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-bold text-neutral-100 tracking-wide ">
              {name}
            </h3>
            {role.map((role, index) => (
              <span
                key={index}
                className="text-white/80 text-xs font-bold bg-neutral-800 px-2 rounded-full flex items-center justify-center h-5"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-neutral-400 text-center">
            {description}
          </p>
        </div>
      </div>
    );
  }
  return (
    <section className="w-full h-150 bg-neutral-800 py-20">
      <div className="max-w-5xl h-full mx-auto flex flex-col items-start gap-6 px-5">
        <div className="w-full flex flex-col">
          <h2 className="text-2xl font-bold text-white">
            Equipe Furia E-Sports
          </h2>
          <p className="text-md font-normal text-white/80">
            Conheça a equipe que está por trás do sucesso dos nossos jogos.
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
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
