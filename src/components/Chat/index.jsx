import ReactMarkdown from "react-markdown";

// Components
import Input from "../../components/Input";
import Icon from "../icon";
import Loader from "../Loader";

// Hooks
import { useChatLogic } from "../../hooks/useChatLogic";

// Assets
import FuriaLogo from "../../assets/furia-esports-logo.svg";

function ChatHeader() {
  return (
    <header className="w-full h-18 py-4 px-6 flex items-center gap-4 border-b border-neutral-700">
      <img
        src={FuriaLogo}
        alt="Logo ESPORTS Furia"
        draggable={false}
        className="w-10 h-10 select-none shadow-2xs"
      />
      <p className="text-xl font-bold text-white">Furia BOT</p>
      <span className="text-xs bg-green-500/40 text-green-400 px-2 rounded-full">
        Online
      </span>
    </header>
  );
}

function MessageCard({ role, message, isLoading, onCopy }) {
  const messageClasses =
    role === "user"
      ? "w-fit max-w-[90%] ml-auto bg-white/10 py-3 px-4 rounded-tl-lg rounded-br-lg rounded-bl-lg shadow-2xl"
      : "w-fit max-w-[90%] bg-neutral-900 py-3 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-2xl";

  const timestamp = message.timestamp || new Date();
  const formattedDate = timestamp.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={messageClasses}>
      {role === "model" && (
        <span className="text-sm text-white/80 font-bold mb-2 flex items-center justify-between">
          Furia BOT
          {!isLoading && (
            <button
              title="Copiar mensagem"
              className="cursor-pointer duration-200 hover:opacity-50"
              onClick={() => onCopy(message.message)}
              aria-label="Copiar mensagem"
            >
              <Icon icon="Copy" size={16} color="white" />
            </button>
          )}
        </span>
      )}
      {isLoading ? (
        <div className="flex items-center justify-center py-2">
          <Loader />
        </div>
      ) : (
        <div className="text-sm font-normal text-white ">
          <ReactMarkdown>{message.message}</ReactMarkdown>
          <div className="text-xs text-white/50 mt-2 text-right">
            {formattedDate}
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyChat() {
  return (
    <div className="w-80 flex flex-col items-center justify-center py-2 m-auto">
      <strong className="text-white/50 text-center text-md">
        Fale com o Furia BOT
      </strong>
      <p className="text-white/40 text-center text-sm">
        Para começar digite uma mensagem abaixo e clique em enviar
      </p>
    </div>
  );
}

function ChatInput({ value, onChange, onSend, isDisabled }) {
  return (
    <div className="w-full h-19 py-4 px-6 flex items-center justify-center gap-4 border-t border-neutral-700">
      <Input
        name="username"
        value={value}
        onChange={onChange}
        placeholder="Digite sua mensagem aqui"
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
        disabled={isDisabled}
      />
      <button
        title={value === "" ? "Escreva uma mensagem" : "Clique para enviar"}
        className="w-12 h-10 flex justify-center items-center bg-zinc-800 duration-200 rounded cursor-pointer hover:bg-neutral-700 disabled:cursor-default disabled:bg-neutral-500 disabled:opacity-50"
        onClick={onSend}
        disabled={isDisabled || !value.trim() || value === ""}
      >
        {isDisabled ? (
          <Loader />
        ) : (
          <Icon icon="Send" size={20} color="white" title="Enviar mensagem" />
        )}
      </button>
    </div>
  );
}

export default function Chat() {
  const { message, setMessage, messages, isLoading, handleSend, handleCopy } =
    useChatLogic();

  return (
    <section
      className="max-w-5xl w-full mx-auto min-h-screen flex flex-col items-start gap-6 px-5 py-20"
      id="chat"
    >
      <div className="text-left">
        <h1 className="text-white text-3xl font-bold mb-4">
          Seu novo squad no CS2
        </h1>
        <h2 className="text-white/90 text-md font-medium">
          Já pensou ter um especialista em CS2 disponível 24 horas por dia, na
          palma da sua mão? Agora você tem. Apresentamos o FuriaBot seu novo
          aliado dentro e fora do servidor. Ele é seu assistente virtual para
          tudo sobre o mundo do CS: mande suas perguntas e receba respostas na
          hora. E lembre-se{" "}
          <i>
            {" "}
            respeito e educação são o headshot da convivência: juntos,
            construímos uma comunidade mais saudável.
          </i>
        </h2>
      </div>
      <div className="w-full h-full rounded-lg overflow-hidden border-1 border-neutral-700 shadow-2xl ">
        <ChatHeader />
        <div className="bg-neutral-800 w-full h-120 px-6 flex flex-col-reverse gap-8 p-8 overflow-y-auto">
          {messages.length === 0 ? (
            <EmptyChat />
          ) : (
            messages
              .slice()
              .reverse()
              .map((msg, idx) => (
                <MessageCard
                  key={idx}
                  role={msg.role}
                  message={msg}
                  isLoading={msg.isLoading}
                  onCopy={handleCopy}
                />
              ))
          )}
        </div>
        <ChatInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onSend={handleSend}
          isDisabled={isLoading}
        />
      </div>
    </section>
  );
}
