import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";
// facilita a importação de props básicas de um elemento HTML, nesse caso é um botão.
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  // prop opcional
  hasBorder?: boolean;
}
// rest operator para captar todas as props do IMAGE ELEMENT
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
      alt={props.alt}
    />
  );
}
