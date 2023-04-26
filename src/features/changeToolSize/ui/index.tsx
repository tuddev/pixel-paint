import { Col, Row, Slider, Typography } from "antd";
import { atom } from "nanostores";
import styles from "./change-tool-size.module.scss";
import { useStore } from "@nanostores/react";
import { currentTool$ } from "../../../entities/tool";

export const pixelSize$ = atom<number>(1);

const { Text } = Typography;

export const ChangeToolSize = () => {
  const pixelSize = useStore(pixelSize$);

  const hadleChange = (size: number) => {
    pixelSize$.set(size);
    currentTool$.set({
      ...currentTool$.get()!,
      size: pixelSize$.get(),
    });
  };

  return (
    <Row className={styles.container}>
      <Text strong>{`Pixel size (${pixelSize$.get()})`}</Text>
      <Col span={12}>
        <Slider
          min={1}
          max={10}
          onChange={hadleChange}
          value={pixelSize}
          tooltip={{ open: false }}
        />
      </Col>
    </Row>
  );
};
