import styles from './window.module.scss';
import { useStore } from '@nanostores/react';
import { Canvas } from '../../../entities';
import { ToolBox } from '../../../widgets';
import { palleteColor$ } from '../../../entities/pallete';

export const IndexPage = () => {
  const selectedColor = useStore(palleteColor$);

  return (
    <div className={styles.page}>
      <Canvas selectedColor={selectedColor} />
      <ToolBox />
    </div>
  );
};
