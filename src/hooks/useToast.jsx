import { toast } from "react-toastify";

export function useToast() {
  const showToast = (
    type = "",
    title = "Furia BOT disse",
    description = ""
  ) => {
    const content = (
      <div>
        <p className="font-bold text-base">{title}</p>
        {description && (
          <p className="text-sm mt-0.5 opacity-90">{description}</p>
        )}
      </div>
    );

    switch (type) {
      case "success":
        toast.success(content);
        break;
      case "error":
        toast.error(content);
        break;
      case "info":
        toast.info(content);
        break;
      case "warning":
        toast.warning(content);
        break;
      default:
        toast(content);
    }
  };

  return {
    success: (title, description) => showToast("success", title, description),
    error: (title, description) => showToast("error", title, description),
    info: (title, description) => showToast("info", title, description),
    warning: (title, description) => showToast("warning", title, description),
  };
}
