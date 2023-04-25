import { atom } from "nanostores";

const PIXEL_SIZE = 10;

export const isDrawing$ = atom<boolean>(false);

export const setIsDrawing = (isDrawing: boolean) => {
  isDrawing$.set(isDrawing);
};

export const canvas$ = atom<HTMLCanvasElement | null>(null);

const getCellCoor = (coor: number) =>
  Math.round(coor / PIXEL_SIZE) * PIXEL_SIZE;

export const drawPixel = (
  canvas: HTMLCanvasElement,
  color: string,
  mouseCoor: [number, number]
) => {
  canvas$.set(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const x = getCellCoor(mouseCoor[0]);
  const y = getCellCoor(mouseCoor[1]);

  ctx.fillStyle = color;
  ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
};

export const fillBackground = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = canvas?.getContext("2d");
  if (!ctx || !canvas) return;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
