import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import type { ActionButtonProps } from '../action-button';
import ActionButton from '../action-button';
import clsx from 'clsx';
import { LuFile } from 'react-icons/lu';
import { useSetAtom } from 'jotai';
import { createEmptyNoteAtom } from '@renderer/store';

export const Template: FC<ActionButtonProps> = ({ children, className, ...props }) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom);

  const handleAddClick = () => {
    createEmptyNote();
  };

  return (
    <ActionButton {...props} onClick={handleAddClick}>
      <LuFile className={clsx(' text-zinc-300', className)} />
    </ActionButton>
  );
};

export default memo(Template);
