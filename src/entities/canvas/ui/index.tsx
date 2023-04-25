import { MouseEvent, useEffect, useRef } from "react";
import styles from "./canvas.module.scss";
import {
  canvas$,
  drawPixel,
  fillBackground,
  isDrawing$,
  setIsDrawing,
} from "../model";
import { useStore } from "@nanostores/react";

type TCanvasProps = {
  selectedColor: string;
};

export const Canvas: React.FC<TCanvasProps> = ({ selectedColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useStore(isDrawing$);

  useEffect(() => {
    if (!canvasRef.current) return;
    fillBackground(canvasRef.current, "#fff");
  }, []);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    canvas$.set(canvasRef.current);
    const { offsetX, offsetY } = event.nativeEvent;

    drawPixel(canvasRef.current, selectedColor, [offsetX, offsetY]);

    setIsDrawing(true);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const { offsetX, offsetY } = event.nativeEvent;

    if (isDrawing) {
      drawPixel(canvasRef.current, selectedColor, [offsetX, offsetY]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.canvas} />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={handleMouseMove}
        ref={canvasRef}
        width={`640px`}
        height={`640px`}
      />
      <a />
    </div>
  );
};
