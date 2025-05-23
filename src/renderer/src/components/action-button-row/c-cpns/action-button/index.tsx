import clsx from 'clsx';
import { memo } from 'react';
import type { ReactNode, FC, ComponentProps } from 'react';

export interface ActionButtonProps extends ComponentProps<'button'> {
  // children?: ReactNode;
}

export const ActionButton: FC<ActionButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        'px-8 py-5 rounded-6 border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(ActionButton);
