import { atom } from "nanostores";
import { ColorResult } from "react-color";

const DEFAULT_COLOR = "#000";

export const palleteColor$ = atom<string>(DEFAULT_COLOR);

export const changePalleteColor = (color: ColorResult) => {
  palleteColor$.set(color.hex);
};
