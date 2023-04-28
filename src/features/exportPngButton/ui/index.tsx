import { DownloadOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { canvas$ } from '../../../entities/canvas';
import { useStore } from '@nanostores/react';
import { saveImage } from '../model';

export const ExportPngButton = () => {
  const canvas = useStore(canvas$);

  const exportPng = () => {
    if (canvas == null) return;
    saveImage(canvas);
  };

  return (
    <Link onClick={exportPng}>
      <DownloadOutlined /> Export png
    </Link>
  );
};
