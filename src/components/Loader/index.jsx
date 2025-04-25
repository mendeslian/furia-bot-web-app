import PuffLoader from "react-spinners/PuffLoader";

export default function Loader({ color = "#FFFFFF", size = 20 }) {
  return <PuffLoader color={color} size={size} />;
}
