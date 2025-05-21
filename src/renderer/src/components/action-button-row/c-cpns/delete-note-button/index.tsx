import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import ActionButton, { ActionButtonProps } from '../action-button';
import { FaRegTrashCan } from 'react-icons/fa6';
import clsx from 'clsx';

export const DeleteNoteButton: FC<ActionButtonProps> = ({ children, className, ...props }) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className={clsx(' text-zinc-300', className)} />
    </ActionButton>
  );
};

export default memo(DeleteNoteButton);
