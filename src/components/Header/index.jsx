import FuriaLogo from "../../assets/furia-esports-logo.svg";
import FuriaTextLogo from "../../assets/furia-text-logo.svg";

export default function Header() {
  const headerOptions = [
    {
      id: "store",
      title: "Loja",
      link: "https://www.furia.gg",
    },
    {
      id: "hltv",
      title: "HLTV",
      link: "https://www.hltv.org/team/8297/furia",
    },
    {
      id: "liquipedia",
      title: "Liquipedia",
      link: "https://liquipedia.net/counterstrike/FURIA",
    },
  ];

  const anchorClass =
    "text-white text-xs uppercase font-light tracking-[1px] cursor-pointer duration-200 relative px-1 hover:text-yellow-500";

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-neutral-900/50 backdrop-blur-sm z-50">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between px-4 h-full">
        <div className="flex gap-2">
          <img
            src={FuriaLogo}
            alt="Furia ESPORTS Logo."
            className="w-10 h-10 select-none bg-black/70 p-2 rounded-lg"
            draggable={false}
          />
          <img
            src={FuriaTextLogo}
            alt="Furia ESPORTS Text Logo"
            className="w-14 select-none opacity-90"
          />
        </div>
        <nav aria-label="Navegação cabeçalho">
          <ul className="flex gap-2 sm:gap-6">
            {headerOptions.map((option) => (
              <li key={option.id}>
                <a
                  href={option.link}
                  className={anchorClass}
                  draggable={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
