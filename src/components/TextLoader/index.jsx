import PulseLoader from "react-spinners/PulseLoader";

export default function TextLoader({ color = "#FFFFFF", size = 4 }) {
  return <PulseLoader color={color} size={size} />;
}
