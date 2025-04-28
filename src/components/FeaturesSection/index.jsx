// Components
import Icon from "../icon";

// Assets
import FuriaShirtBackground from "../../assets/furia-shirt-background.png";

export default function Features() {
  const features = [
    {
      id: "chat",
      icon: "MessageCircle",
      title: "Converse com o BOT",
      description:
        "Tire suas dúvidas sobre CS2, estratégias, mapas e tudo relacionado ao jogo diretamente com nosso assistente virtual.",
    },
    {
      id: "fast",
      icon: "Zap",
      title: "Respostas rápidas",
      description:
        "Obtenha informações precisas e atualizadas em segundos, sem precisar pesquisar em diversos sites.",
    },
    {
      id: "available",
      icon: "Clock",
      title: "Disponível 24/7",
      description:
        "Acesse o Furia BOT a qualquer hora do dia ou da noite, sempre pronto para ajudar com suas dúvidas sobre CS2.",
    },
  ];

  return (
    <section className="w-full py-20 relative border-y border-neutral-800 shadow-2xl bg-neutral-900">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${FuriaShirtBackground})`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl w-full mx-auto px-5 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Como funciona
        </h2>
        <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">
          Conheça as principais funcionalidades do Furia BOT e como ele pode te
          ajudar a melhorar no CS2
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-[1px] bg-yellow-500 z-0"></div>

          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6 shadow-2xl">
                <Icon icon={feature.icon} size={24} color="#000000" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-sm px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
