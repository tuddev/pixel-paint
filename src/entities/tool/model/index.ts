import { atom } from 'nanostores';
import { type TPixel } from '../../../shared/types';
import { PIXEL_SIZE } from '../../canvas';

export interface TTool {
  paint: (x: number, y: number, color: string) => TPixel[];
  size: number;
  type: string;
}

const getCoeffForEvenSize = (size: number) => {
  const k = size % 2 === 0 ? 1 : 0;
  return 10 * k - 10;
};

const Pen: TTool = {
  paint: function (x, y, color) {
    const array: TPixel[] = [];
    const coeffForEvenSize = getCoeffForEvenSize(this.size);

    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        array.push({
          x: x + i * PIXEL_SIZE + coeffForEvenSize,
          y: y + j * PIXEL_SIZE + coeffForEvenSize,
          color,
        });
      }
    }

    return array;
  },
  size: 1,
  type: 'pen',
};

const Erase: TTool = {
  paint: function (x, y) {
    const array: TPixel[] = [];
    const coeffForEvenSize = getCoeffForEvenSize(this.size);

    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        array.push({
          x: x + i * PIXEL_SIZE + coeffForEvenSize,
          y: y + j * PIXEL_SIZE + coeffForEvenSize,
          color: '',
          isErased: true,
        });
      }
    }
    return array;
  },
  size: 1,
  type: 'erase',
};

export const currentTool$ = atom<TTool | null>(Pen);

export const tools$ = atom<TTool[]>([Pen, Erase]);
