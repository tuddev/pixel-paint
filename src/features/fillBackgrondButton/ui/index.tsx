import { Button } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import { useStore } from "@nanostores/react";
import { palleteColor$ } from "../../../entities/pallete";
import { canvas$, fillBackground } from "../../../entities/canvas";

export const FillBackgrondButton = () => {
  const color = useStore(palleteColor$);
  const canvas = useStore(canvas$);

  const handleClick = () => {
    if (!canvas) return;
    fillBackground(canvas, color);
  };

  return (
    <Button type="dashed" onClick={handleClick}>
      <BgColorsOutlined /> Fill background
    </Button>
  );
};
