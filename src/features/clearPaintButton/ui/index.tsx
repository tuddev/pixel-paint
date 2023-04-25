import { useStore } from "@nanostores/react";
import { Button } from "antd";
import { canvas$, fillBackground } from "../../../entities/canvas";

export const ClearPaintButton = () => {
  const canvas = useStore(canvas$);

  const clickClear = () => {
    if (!canvas) return;
    fillBackground(canvas, "#fff");
  };

  return (
    <Button type="primary" onClick={clickClear}>
      Clear
    </Button>
  );
};
