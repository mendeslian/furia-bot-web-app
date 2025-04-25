import { useState } from "react";
import Icon from "../icon";

export default function Input({
  name = "",
  label = "",
  value = "",
  onChange = () => {},
  type = "text",
  placeholder = "",
  error = "",
  ...rest
}) {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="w-full flex flex-col ">
      <p className="text-sm text-neutral-900 font-medium capitalize">{label}</p>
      <div className="w-full h-10 flex justify-center items-center gap-2 bg-neutral-100 rounded-sm px-3 relative">
        <input
          className="w-full h-full text-neutral-900 text-sm font-normal"
          name={name}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          {...rest}
        />

        {type === "password" && (
          <button
            onClick={() =>
              setInputType((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
            type="button"
            className="cursor-pointer flex justify-center items-center"
            title={inputType === "password" ? "Show" : "Hide"}
          >
            {inputType === "text" ? (
              <Icon icon="EyeOff" color="black" size={20} />
            ) : (
              <Icon icon="Eye" color="black" size={20} />
            )}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
