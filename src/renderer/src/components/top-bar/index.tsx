import { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}

// 用于顶部框让窗口支持拖拽功能
export const TopBar: FC<IProps> = () => {
  return <header className="position-absolute inset-0 h-40 bg-opacity-40"></header>;
};

export default memo(TopBar);
