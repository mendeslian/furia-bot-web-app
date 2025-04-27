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
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold bg-gradient-to-br from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
            Furia BOT
          </span>
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
        </div>
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
      <p className="text-white/40 text-center text-sm">
        Para começar digite uma mensagem abaixo e aperte o botão para enviar
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
    <section className="max-w-5xl w-full mx-auto min-h-screen flex flex-col items-start gap-6 px-5 py-20">
      <div className="w-full">
        <h1 className="text-white text-3xl font-bold mb-10">
          Seu novo squad no CS2
        </h1>
        <div className="w-full flex flex-col">
          <p className="text-white font-normal bg-neutral-800 w-fit max-w-lg px-4 py-2 rounded-tr-md rounded-br-md rounded-bl-md shadow-2xl mb-4">
            Já pensou ter um especialista em CS2 disponível 24 horas por dia, na
            palma da sua mão?
          </p>
          <p className="text-white font-normal bg-neutral-700 w-fit max-w-md px-4 py-2 text-right rounded-tl-md rounded-br-md rounded-bl-md ml-auto shadow-2xl mb-4">
            Um especialista em CS2 disponível 24 horas por dia!?
          </p>
          <p className="text-white font-normal bg-neutral-800 w-fit max-w-md px-4 py-2 rounded-tr-md rounded-br-md rounded-bl-md shadow-2xl mb-4">
            Isso mesmo. Agora você tem!!
          </p>
          <p className="text-white font-normal bg-neutral-800 w-fit max-w-2xl px-4 py-2 rounded-tr-md rounded-br-md rounded-bl-md shadow-2xl mb-4">
            Apresentamos o <strong>Furia BOT</strong> seu novo aliado dentro e
            fora do servidor. Ele é seu assistente virtual para tudo sobre o
            mundo do CS. Mande suas perguntas e receba respostas na hora.
          </p>
          <p className="text-white font-normal bg-neutral-800 w-fit max-w-xl px-4 py-2 rounded-tr-md rounded-br-md rounded-bl-md shadow-2xl mb-10">
            Ah, e lembre-se respeito e educação são o headshot da convivência:
            juntos, construímos uma comunidade mais saudável.
          </p>
        </div>
        <div className="w-full flex items-center gap-2">
          <Icon icon="Bot" size={32} color="#FFFFFF" />
          <h2
            className="text-white/90 text-2xl font-bold text-center md:text-left"
            id="chat"
          >
            Comece a conversar agora!
          </h2>
        </div>
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
