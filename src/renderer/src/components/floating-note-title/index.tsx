import clsx from 'clsx';
import { memo } from 'react';
import type { FC, ComponentProps } from 'react';

interface IProps extends ComponentProps<'div'> {
  //  children?: ReactNode;
}

export const FloatingNoteTitle: FC<IProps> = ({ className, children, ...props }) => {
  const title = 'Note Title';

  return (
    <div className={clsx('flex justify-center', className)}>
      <span className="text-gray-400">{title}</span>
    </div>
  );
};

export default memo(FloatingNoteTitle);
