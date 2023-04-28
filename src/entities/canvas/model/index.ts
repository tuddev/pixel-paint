import { atom } from 'nanostores';
import { type TPixel } from '../../../shared/types';

export const PIXEL_SIZE = 10;
const CANVAS_SIZE = 640;

export const isDrawing$ = atom<boolean>(false);
export const coloredPixels$ = atom<TPixel[]>([]);
export const canvas$ = atom<HTMLCanvasElement | null>(null);

export const setIsDrawing = (isDrawing: boolean) => {
  isDrawing$.set(isDrawing);
};

coloredPixels$.listen(() => {
  const canvas = canvas$.get();
  if (canvas == null) return;

  drawPixel(canvas);
});

export const getCellCoor = (coor: number) =>
  Math.round(coor / PIXEL_SIZE) * PIXEL_SIZE;

export const drawPixel = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (ctx == null) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const { color, x, y } of coloredPixels$.get()) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  }
};

const getPixelsArray = () => {
  const pixels: TPixel[] = [];
  for (let i = 0; i < CANVAS_SIZE; i += 10) {
    for (let j = 0; j < CANVAS_SIZE; j += 10) {
      pixels.push({
        x: i,
        y: j,
        color: '',
      });
    }
  }

  return pixels;
};

export const fillBackground = (color: string) => {
  const updatePixels = getPixelsArray().map((pixel) => ({ ...pixel, color }));
  coloredPixels$.set(updatePixels);
};
