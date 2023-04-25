import { saveAs } from "file-saver";

export const saveImage = (canvas: HTMLCanvasElement) => {
  canvas.toBlob(function (blob) {
    saveAs(blob || "", "pixel-art.png");
  }, "image/png");
};
