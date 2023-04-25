import { Pallete } from "../../../entities";
import {
  ClearPaintButton,
  EraseButton,
  ExportPngButton,
  FillBackgrondButton,
} from "../../../features";
import styles from "./tools-block.module.scss";

export const ToolBox = () => {
  return (
    <div className={styles.box}>
      <Pallete />
      <div className={styles.block}>
        <div className={styles.tools}>
          <EraseButton />
          <ExportPngButton />
          <ClearPaintButton />
          <FillBackgrondButton />
        </div>
      </div>
    </div>
  );
};
