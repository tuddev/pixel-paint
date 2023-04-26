import { currentTool$ } from "./../../../entities/tool/model/index";
import { canvas$, coloredPixels$, getCellCoor } from "../../../entities/canvas";
import { TPixel } from "../../../shared/types";

const drawWithColor = (updatedPixels: TPixel[]) => {
  let coloredPixels = coloredPixels$.get();
  const map: Record<string, TPixel> = {};

  for (let i = 0; i < coloredPixels.length; i++) {
    map[`${coloredPixels[i].x}/${coloredPixels[i].y}`] = coloredPixels[i];
  }

  for (let i = 0; i < updatedPixels.length; i++) {
    if (map[`${updatedPixels[i].x}/${updatedPixels[i].y}`]) {
      const oldPixelIndex = coloredPixels.findIndex(
        (pixel) =>
          pixel.x === updatedPixels[i].x && updatedPixels[i].y === pixel.y
      );

      coloredPixels[oldPixelIndex] = updatedPixels[i];
    } else {
      coloredPixels.push(updatedPixels[i]);
    }
  }

  return coloredPixels;
};

export const drawByTool = (color: string, mouseCoor: [number, number]) => {
  const canvas = canvas$.get();
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  
  const x = getCellCoor(mouseCoor[0]);
  const y = getCellCoor(mouseCoor[1]);

  const currentTool = currentTool$.get();
  if (!currentTool) return;

  const updatedPixels = currentTool.paint(x, y, color);
  const newPixels = drawWithColor(updatedPixels);

  const onlyVisiblePixels = newPixels.filter((pixel) => !pixel.isErased);

  coloredPixels$.set(onlyVisiblePixels);
};
