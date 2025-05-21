import { memo } from 'react';
import type { FC, ComponentProps } from 'react';
import type { NoteInfo } from '@shared/models';
import clsx from 'clsx';
import { formatDateFromMs } from '@renderer/utils';

type NotePreviewProps = NoteInfo &
  ComponentProps<'div'> & {
    isActive?: boolean;
  };

export const NotePreview: FC<NotePreviewProps> = ({
  children,
  className,
  title,
  lastEditTime,
  isActive,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'cursor-pointer px-10 py-8 rounded-8 transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/72': !isActive,
        },
        className,
      )}
    >
      <h3 className="truncate text-20 font-bold mb-5">{title}</h3>
      <span className="inline-block w-full text-left text-12 font-extralight mb-10">
        {formatDateFromMs(lastEditTime)}
      </span>
    </div>
  );
};

export default memo(NotePreview);
