import { Button } from "antd";
import { coloredPixels$ } from "../../../entities/canvas";

export const ClearPaintButton = () => {
  const clickClear = () => {
    coloredPixels$.set([]);
  };

  return (
    <Button type="primary" onClick={clickClear}>
      Clear
    </Button>
  );
};
