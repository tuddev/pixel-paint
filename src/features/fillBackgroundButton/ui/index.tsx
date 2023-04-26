import { Button } from "antd";
import { FormatPainterOutlined } from "@ant-design/icons";
import { useStore } from "@nanostores/react";
import { canvas$, coloredPixels$ } from "../../../entities/canvas";
import { palleteColor$ } from "../../../entities/pallete";

export const FillBackgroundButton = () => {
  const color = useStore(palleteColor$);

  const handleClick = () => {
    const canvas = canvas$.get();
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    coloredPixels$.set(
      coloredPixels$.get().map((pixel) => ({ ...pixel, color }))
    );
  };
  
  return (
    <Button onClick={handleClick}>
      <FormatPainterOutlined />
      Fill background
    </Button>
  );
};
