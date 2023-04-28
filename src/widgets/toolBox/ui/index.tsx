import { useStore } from '@nanostores/react';
import { Pallete } from '../../../entities';
import {
  ChangeToolSize,
  ClearPaintButton,
  ExportPngButton,
  FillPaperButton,
} from '../../../features';
import styles from './tools-block.module.scss';
import { currentTool$, tools$ } from '../../../entities/tool';
import { Button } from 'antd';
import { pixelSize$ } from '../../../features/changeToolSize';

export const ToolBox = () => {
  const tools = useStore(tools$);
  const pixelSize = useStore(pixelSize$);

  return (
    <div className={styles.box}>
      <Pallete />
      <div className={styles.block}>
        <div className={styles.tools}>
          {tools.map((tool) => {
            return (
              <Button
                danger={tool.type === 'erase'}
                onClick={() => {
                  currentTool$.set({ ...tool, size: pixelSize });
                }}
                key={tool.type}
              >
                {tool.type}
              </Button>
            );
          })}
          <ChangeToolSize />
          <FillPaperButton />
          <ClearPaintButton />
          <ExportPngButton />
        </div>
      </div>
    </div>
  );
};
