import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import NewNoteButton from './c-cpns/new-note-button';
import DeleteNoteButton from './c-cpns/delete-note-button';
import clsx from 'clsx';

interface IProps extends ComponentProps<'div'> {
  // children?: ReactNode;
}

export const ActionButtonRow: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('', className)}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  );
};

export default memo(ActionButtonRow);
