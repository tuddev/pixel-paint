import styles from "./window.module.scss";
import { useStore } from "@nanostores/react";
import { Canvas, Pallete, palleteColor$ } from "../../../entities";

export const IndexPage = () => {
  const selectedColor = useStore(palleteColor$);

  return (
    <div className={styles.page}>
      <Canvas selectedColor={selectedColor} />
      <Pallete />
    </div>
  );
};
