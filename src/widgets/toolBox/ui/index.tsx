import { useStore } from "@nanostores/react";
import { Pallete } from "../../../entities";
import {
  ChangeToolSize,
  ClearPaintButton,
  ExportPngButton,
  FillBackgroundButton,
  FillPaperButton,
} from "../../../features";
import styles from "./tools-block.module.scss";
import { currentTool$, tools$ } from "../../../entities/tool";
import { Button } from "antd";

export const ToolBox = () => {
  const tools = useStore(tools$);
  return (
    <div className={styles.box}>
      <Pallete />
      <div className={styles.block}>
        <div className={styles.tools}>
          {tools.map((tool) => {
            if (tool.type === "erase")
              return (
                <Button
                  danger
                  onClick={() => currentTool$.set(tool)}
                  key={tool.type}
                >
                  {tool.type}
                </Button>
              );
            return (
              <Button key={tool.type} onClick={() => currentTool$.set(tool)}>
                {tool.type}
              </Button>
            );
          })}
          <ExportPngButton />
          <ChangeToolSize />
          <FillPaperButton />
          <FillBackgroundButton />
          <ClearPaintButton />
        </div>
      </div>
    </div>
  );
};
