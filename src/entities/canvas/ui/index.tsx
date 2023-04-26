import { MouseEvent, useRef } from "react";
import styles from "./canvas.module.scss";
import { canvas$, isDrawing$, setIsDrawing } from "../model";
import { useStore } from "@nanostores/react";
import { drawByTool } from "../../../features/drawByTool/model";

type TCanvasProps = {
  selectedColor: string;
};

export const Canvas: React.FC<TCanvasProps> = ({ selectedColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useStore(isDrawing$);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    canvas$.set(canvasRef.current);
    const { offsetX, offsetY } = event.nativeEvent;
    drawByTool(selectedColor, [offsetX, offsetY]);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const { offsetX, offsetY } = event.nativeEvent;

    if (isDrawing) {
      drawByTool(selectedColor, [offsetX, offsetY]);
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
