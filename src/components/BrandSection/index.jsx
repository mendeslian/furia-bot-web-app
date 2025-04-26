// Assets
import Adidas from "../../assets/brands/adidas.svg";
import CruzeiroDoSul from "../../assets/brands/cruzeiro-do-sul.svg";
import RedBull from "../../assets/brands/redbull.svg";
import HellManns from "../../assets/brands/hellmanns.svg";
import Lenovo from "../../assets/brands/lenovo.svg";
import PokerStars from "../../assets/brands/pokerstars.svg";

export default function BrandSection() {
  const brandsClass = "w-40 h-16 absolute left-[100%] scroll-animation";
  const brands = [
    Adidas,
    CruzeiroDoSul,
    RedBull,
    HellManns,
    Lenovo,
    PokerStars,
  ];

  return (
    <section className="w-full h-80 bg-white flex items-center border-y-1 border-neutral-700">
      <div
        className="w-full max-w-5xl h-20 mx-auto flex items-center px-5 relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className={brandsClass}
            style={{
              animationDelay: `calc(20s / 6 * (6 - ${index + 1}))`,
            }}
          >
            <img
              src={brand}
              alt="Brand"
              draggable={false}
              className="w-full h-full select-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
