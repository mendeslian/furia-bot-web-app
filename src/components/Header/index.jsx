import FuriaLogo from "../../assets/furia-esports-logo.svg";

export default function Header() {
  const anchorClass =
    "text-white text-sm font-semibold tracking-[2%] cursor-pointer duration-500 relative px-[6px] hover:text-white focus:text-white focus:outline-none before:content-[''] before:absolute before:rounded-full before:bottom-[-6px] before:left-0 before:w-0 before:h-[3px] before:bg-gradient-to-r before:bg-white before:duration-500 hover:before:w-full focus:before:w-full md:text-[15px] md:px-[10px]";

  const headerOptions = [
    {
      title: "Loja",
      link: "https://www.furia.gg",
    },
    {
      title: "Quem somos",
      link: "https://www.furia.gg/quem-somos",
    },
    {
      title: "Liquipedia",
      link: "https://liquipedia.net/counterstrike/FURIA",
    },
  ];

  return (
    <header className="w-full h-20  border-b-1 border-neutral-800">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between px-4 h-full">
        <img
          src={FuriaLogo}
          alt="Furia ESPORTS Logo."
          className="w-10 h-10 select-none"
          draggable={false}
        />
        <nav>
          <ul className="flex gap-6">
            {headerOptions.map((option, index) => (
              <li key={index}>
                <a href={option.link} className={anchorClass} draggable={false}>
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
