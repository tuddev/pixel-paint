import { type ColorResult, SketchPicker } from 'react-color';
import { changePalleteColor, palleteColor$ } from '../model';
import { useStore } from '@nanostores/react';
import styles from './pallete.module.scss';

export const Pallete = () => {
  const color = useStore(palleteColor$);

  const handleChangeColor = (color: ColorResult) => {
    changePalleteColor(color.hex);
  };

  return (
    <SketchPicker
      onChange={handleChangeColor}
      color={color}
      className={styles.picker}
    />
  );
};
