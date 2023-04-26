import { atom } from "nanostores";
import { TPixel } from "../../../shared/types";
import { PIXEL_SIZE } from "../../canvas";

export type TTool = {
  paint: (x: number, y: number, color: string) => TPixel[];
  size: number;
  type: string;
};

const Pen: TTool = {
  paint: function (x, y, color) {
    let array: TPixel[] = [];
    const k = this.size % 2 === 0 ? 1 : 0;
    const coeffForEvenSize = 5 * k - 10;

    for (let i = 0; i < this.size / 2; i += 0.5) {
      for (let j = 0; j < this.size / 2; j += 0.5) {
        array.push(
          {
            x: x + i * PIXEL_SIZE + coeffForEvenSize,
            y: y + j * PIXEL_SIZE + coeffForEvenSize,
            color,
          },
          {
            x: x - i * PIXEL_SIZE + coeffForEvenSize,
            y: y - j * PIXEL_SIZE + coeffForEvenSize,
            color,
          },
          {
            x: x + i * PIXEL_SIZE + coeffForEvenSize,
            y: y - j * PIXEL_SIZE + coeffForEvenSize,
            color,
          },
          {
            x: x - i * PIXEL_SIZE + coeffForEvenSize,
            y: y + j * PIXEL_SIZE + coeffForEvenSize,
            color,
          }
        );
      }
    }

    return array;
  },
  size: 1,
  type: "pen",
};

const Erase: TTool = {
  paint: function (x, y) {
    let array: TPixel[] = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        array.push({
          x: x + i * PIXEL_SIZE,
          y: y + j * PIXEL_SIZE,
          color: "",
          isErased: true,
        });
      }
    }
    return array;
  },
  size: 1,
  type: "erase",
};

export const currentTool$ = atom<TTool | null>(Pen);

export const tools$ = atom<TTool[]>([Pen, Erase]);
