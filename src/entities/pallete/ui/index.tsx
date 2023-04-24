import { SketchPicker } from "react-color";
import { changePalleteColor, palleteColor$ } from "../model";
import { useStore } from "@nanostores/react";

export const Pallete = () => {
  const color = useStore(palleteColor$);

  return <SketchPicker onChange={changePalleteColor} color={color} />;
};
