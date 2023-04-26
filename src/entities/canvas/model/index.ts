import { atom } from "nanostores";
import { TPixel } from "../../../shared/types";

export const PIXEL_SIZE = 10;
const CANVAS_SIZE = 640;
export const isDrawing$ = atom<boolean>(false);

const PIXELS_ARRAY_INIT: TPixel[] = [];

for (let i = 0; i < CANVAS_SIZE; i += 10) {
  for (let j = 0; j < CANVAS_SIZE; j += 10) {
    PIXELS_ARRAY_INIT.push({
      x: i,
      y: j,
      color: "",
    });
  }
}

export const coloredPixels$ = atom<TPixel[]>([]);

export const setIsDrawing = (isDrawing: boolean) => {
  isDrawing$.set(isDrawing);
};

export const canvas$ = atom<HTMLCanvasElement | null>(null);

coloredPixels$.listen(() => {
  const canvas = canvas$.get();
  if (!canvas) return;

  drawPixel(canvas);
});

export const getCellCoor = (coor: number) =>
  Math.round(coor / PIXEL_SIZE) * PIXEL_SIZE;

export const drawPixel = (canvas: HTMLCanvasElement) => {
  canvas$.set(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let { color, x, y } of coloredPixels$.get()) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  }
};

export const fillBackground = (color: string) => {
  const updatePixels = PIXELS_ARRAY_INIT.map((pixel) => ({ ...pixel, color }));
  coloredPixels$.set(updatePixels);
};
