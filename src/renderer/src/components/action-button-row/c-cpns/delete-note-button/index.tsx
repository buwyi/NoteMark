import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import ActionButton, { ActionButtonProps } from '../action-button';
import { FaRegTrashCan } from 'react-icons/fa6';
import clsx from 'clsx';
import { useSetAtom } from 'jotai';
import { deleteNoteAtom } from '@renderer/store';

export const DeleteNoteButton: FC<ActionButtonProps> = ({ children, className, ...props }) => {
  const deleteNote = useSetAtom(deleteNoteAtom);
  const handleDeleteClick = () => {
    deleteNote();
  };
  return (
    <ActionButton {...props} onClick={handleDeleteClick}>
      <FaRegTrashCan className={clsx(' text-zinc-300', className)} />
    </ActionButton>
  );
};

export default memo(DeleteNoteButton);
