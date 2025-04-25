import { toast } from "react-toastify";

export function useToast() {
  const showToast = (
    type = "",
    title = "Furia BOT disse",
    description = ""
  ) => {
    const content = (
      <div className="font-['Space_Grotesk']">
        <p className="font-bold text-base">{title}</p>
        {description && (
          <p className="text-sm mt-0.5 opacity-90">{description}</p>
        )}
      </div>
    );

    const options = {
      className: "toast-custom-container",
      style: {
        borderRadius: "8px",
      },
    };

    switch (type) {
      case "success":
        toast.success(content, options);
        break;
      case "error":
        toast.error(content, options);
        break;
      case "info":
        toast.info(content, options);
        break;
      case "warning":
        toast.warning(content, options);
        break;
      default:
        toast(content, options);
    }
  };

  return {
    success: (title, description) => showToast("success", title, description),
    error: (title, description) => showToast("error", title, description),
    info: (title, description) => showToast("info", title, description),
    warning: (title, description) => showToast("warning", title, description),
  };
}
