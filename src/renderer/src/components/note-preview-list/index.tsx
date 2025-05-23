import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import { notesMock } from '@renderer/store/mock';
import clsx from 'clsx';
import NotePreview from '../note-preview';
import { useNoteList } from '@renderer/hooks/useNoteList';

interface IProps extends ComponentProps<'ul'> {
  //  children?: ReactNode;
  onSelect?: () => void;
}

export const NotePreviewList: FC<IProps> = ({ onSelect, children, className, ...props }) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNoteList({ onSelect });

  if (notes.length === 0) {
    return (
      <ul className={clsx('flex justify-center pt-10', className)}>
        <span className="text-20">No Notes Yet!</span>
      </ul>
    );
  }

  return (
    <ul className={clsx('', className)}>
      {notes.map((note, index) => {
        return (
          <NotePreview
            key={note.title + note.lastEditTime}
            isActive={selectedNoteIndex === index}
            onClick={handleNoteSelect(index)}
            {...note}
            // {...props}
          />
        );
      })}
      {/* <li className="h-70" aria-hidden></li> */}
    </ul>
  );
};

export default memo(NotePreviewList);
