import { toast } from "react-toastify";
import FuriaLogo from "../assets/furia-esports-logo.svg";

export function useToast() {
  const title = "FuriaBot";

  const showToast = (type = "", description = "") => {
    const content = (
      <div className="flex items-center gap-3">
        <img src={FuriaLogo} alt="Furia Logo" className="w-8 h-8" />
        <div>
          <p className="font-bold text-sm text-white">{title}</p>
          {description && (
            <p className="text-xs text-gray-300">{description}</p>
          )}
        </div>
      </div>
    );

    const toastOptions = {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      progressStyle: { background: "#22c55e" },
      style: {
        background: "#0b0b0b",
        border: "1px solid #262626",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      icon: false,
    };

    switch (type) {
      case "success":
        toast.success(content, toastOptions);
        break;
      case "error":
        toast.error(content, toastOptions);
        break;
      case "info":
        toast.info(content, toastOptions);
        break;
      case "warning":
        toast.warning(content, toastOptions);
        break;
      default:
        toast(content, toastOptions);
    }
  };

  return {
    success: (description) => showToast("success", description),
    error: (description) => showToast("error", description),
    info: (description) => showToast("info", description),
    warning: (description) => showToast("warning", description),
    default: (description) => showToast("", description),
  };
}
