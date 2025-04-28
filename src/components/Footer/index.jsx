// Components
import Icon from "../icon";

// Assets
import FuriaLogo from "../../assets/furia-esports-logo.svg";
import FuriaTextLogo from "../../assets/furia-text-logo.svg";

const linksTitleClass =
  "text-xs uppercase text-white font-semibold mb-4 tracking-wider text-center md:text-left";
const linksItemClass =
  "text-neutral-400 duration-200 hover:text-yellow-500 text-xs leading-0";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] border-t border-neutral-800 py-12 shadow-2xl">
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-8 px-5  ">
        <div className="flex flex-col items-center md:flex-row md: justify-between gap-8 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <img
                src={FuriaLogo}
                alt="Logo ESPORTS Furia"
                className="w-10 h-10 bg-black/70 p-2 rounded-lg select-none"
                draggable={false}
              />
              <img
                src={FuriaTextLogo}
                alt="Furia ESPORTS Text Logo"
                className="h-5 select-none"
                draggable={false}
              />
            </div>

            <p className="text-neutral-400 text-sm text-center md:text-left">
              Seu assistente virtual para tudo sobre o mundo do CS2, disponível
              24 horas por dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={linksTitleClass}>Informações</h3>
              <ul className="flex flex-col text-center md:text-left">
                <li>
                  <a
                    target="_blank"
                    href="https://www.furia.gg/quem-somos"
                    className={linksItemClass}
                  >
                    Quem somos
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.furia.gg/faq"
                    className={linksItemClass}
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={linksTitleClass}>Políticas</h3>
              <ul className="flex flex-col">
                <li>
                  <a
                    target="_blank"
                    href="https://www.furia.gg/termos-condicoes"
                    className={linksItemClass}
                  >
                    Termos e condições
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.furia.gg/politica-privacidade"
                    className={linksItemClass}
                  >
                    Política de privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-neutral-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs">
            © 2024 Furia. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              target="_blank"
              href="https://www.instagram.com/furiagg"
              className="text-neutral-300 hover:text-yellow-500 group"
            >
              <Icon
                icon="Instagram"
                color="currentColor"
                className="duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
