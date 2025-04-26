// Assets
import FuriaBackground from "../../assets/furia-background.png";

export default function HeroSection() {
  return (
    <section
      className="w-full h-180 relative flex flex-col justify-center items-center"
      aria-labelledby="welcome-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${FuriaBackground})`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-start gap-6 px-5">
        <div className="text-left max-w-130">
          <h1
            id="welcome-heading"
            className="text-white text-4xl font-bold mb-4"
          >
            Seja bem vindo!
          </h1>
          <h2 className="text-white/80 text-lg font-medium">
            Fala com a gente no chat! Tire suas dúvidas, fique por dentro das
            novidades do CS2 e acompanhe tudo sobre o time mais feroz do Brasil.{" "}
            <i className="text-white">#GoFURIA</i>
          </h2>
        </div>
        <div className="flex gap-4">
          <a
            href="#chat"
            className="h-10 flex items-center justify-center text-lg gap-2 px-4 rounded-sm cursor-pointer duration-200 drop-shadow-md text-md font-semibold disabled:cursor-default bg-neutral-50 hover:bg-neutral-50/80 disabled:bg-neutral-300 text-neutral-900"
            aria-label="Começar a conversar com o Furia BOT"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
