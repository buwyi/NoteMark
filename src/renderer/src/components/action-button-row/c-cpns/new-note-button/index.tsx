import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';
import type { ActionButtonProps } from '../action-button';
import ActionButton from '../action-button';
import clsx from 'clsx';
import { LuFile } from 'react-icons/lu';

export const Template: FC<ActionButtonProps> = ({ children, className, ...props }) => {
  return (
    <ActionButton {...props}>
      <LuFile className={clsx(' text-zinc-300', className)} />
    </ActionButton>
  );
};

export default memo(Template);
