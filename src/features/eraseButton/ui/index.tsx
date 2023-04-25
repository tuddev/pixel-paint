import { Button } from "antd";
import { changePalleteColor } from "../../../entities/pallete";

export const EraseButton = () => {
  const handleClickEraser = () => {
    changePalleteColor("#fff");
  };

  return (
    <Button danger onClick={handleClickEraser}>
      Erase
    </Button>
  );
};
