import * as Icons from "lucide-react";

export default function Icon({
  icon = "",
  size = 24,
  color = "currentColor",
  className = "",
}) {
  const LucideIcon = Icons[icon];

  return <LucideIcon size={size} color={color} className={className} />;
}
