import { Button } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import { useStore } from "@nanostores/react";
import { palleteColor$ } from "../../../entities/pallete";
import { fillBackground } from "../../../entities/canvas";

export const FillPaperButton = () => {
  const color = useStore(palleteColor$);

  const handleClick = () => {
    fillBackground(color);
  };

  return (
    <Button onClick={handleClick}>
      <BgColorsOutlined /> Fill paper
    </Button>
  );
};
