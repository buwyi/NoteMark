import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import { notesMock } from '@renderer/store/mock';
import clsx from 'clsx';
import NotePreview from '../note-preview';

interface IProps extends ComponentProps<'ul'> {
  //  children?: ReactNode;
}

export const NotePreviewList: FC<IProps> = ({ children, className, ...props }) => {
  if (notesMock.length === 0) {
    return (
      <ul className={clsx('flex justify-center pt-10', className)}>
        <span className="text-20">No Notes Yet!</span>
      </ul>
    );
  }

  return (
    <ul className={clsx('', className)}>
      {notesMock.map((note) => {
        return <NotePreview key={note.title + note.lastEditTime} {...note} />;
      })}
      {/* <li className="h-70" aria-hidden></li> */}
    </ul>
  );
};

export default memo(NotePreviewList);
