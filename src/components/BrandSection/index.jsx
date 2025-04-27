// Assets
import Adidas from "../../assets/brands/adidas.svg";
import CruzeiroDoSul from "../../assets/brands/cruzeiro-do-sul.svg";
import RedBull from "../../assets/brands/redbull.svg";
import HellManns from "../../assets/brands/hellmanns.svg";
import Lenovo from "../../assets/brands/lenovo.svg";
import PokerStars from "../../assets/brands/pokerstars.svg";

export default function BrandSection() {
  const brands = [
    Adidas,
    CruzeiroDoSul,
    RedBull,
    HellManns,
    Lenovo,
    PokerStars,
  ];

  return (
    <section className="w-full h-60 bg-radial from-white from-50% to-neutral-300 flex items-center border-y-1 border-neutral-700">
      <div
        className="w-full max-w-5xl h-16 mx-auto relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-40 h-16 scroll-animation"
            style={{
              left: "calc(200px * 6 )",
              animationDelay: `calc(20s / 6 * (6 - ${index + 1}) * -1)`,
            }}
          >
            <img
              src={brand}
              alt="Brand"
              draggable={false}
              className="w-full h-full select-none object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
