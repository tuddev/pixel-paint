import { atom } from "nanostores";

const DEFAULT_COLOR = "#000";

export const palleteColor$ = atom<string>(DEFAULT_COLOR);

export const changePalleteColor = (color: string) => {
  palleteColor$.set(color);
};
