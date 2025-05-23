import { selectedNoteAtom } from '@renderer/store';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { memo } from 'react';
import type { FC, ComponentProps } from 'react';

interface IProps extends ComponentProps<'div'> {
  //  children?: ReactNode;
}

export const FloatingNoteTitle: FC<IProps> = ({ className, children, ...props }) => {
  const selectedNote = useAtomValue(selectedNoteAtom);

  if (!selectedNote) return null;

  return (
    <div className={clsx('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  );
};

export default memo(FloatingNoteTitle);
