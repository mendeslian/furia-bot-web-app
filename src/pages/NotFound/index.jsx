import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-6 bg-neutral-900 p-8">
      <h1 className="text-white text-6xl font-bold">404</h1>
      <h2 className="text-white text-2xl">Page Not Found</h2>
      <p className="text-neutral-400 text-center max-w-md">
        A pagina que você está procurando pode ter sido removida, teve seu nome
        alterado ou está temporariamente indisponível.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-red-600 hover:bg-red-900 text-white font-medium rounded-md transition-colors cursor-pointer"
      >
        Voltar para home
      </button>
    </section>
  );
}
