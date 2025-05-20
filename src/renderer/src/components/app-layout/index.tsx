import type { ReactNode, FC, ComponentProps } from 'react';
import clsx from 'clsx';

interface RootLayoutProps extends ComponentProps<'main'> {
  children?: ReactNode;
}
interface SideBarProps extends ComponentProps<'aside'> {
  children?: ReactNode;
}
interface ContentProps extends ComponentProps<'div'> {
  children?: ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

export const RootLayout: FC<RootLayoutProps> = ({ children, className, ...props }) => {
  return <main className={clsx('h-screen flex flex-row', className)}>{children}</main>;
};

export const SideBar: FC<SideBarProps> = ({ children, className, ...props }) => {
  return <aside className={clsx('h-[100vh] w-30% mt-20', className)}></aside>;
};

export const Content: FC<ContentProps> = ({ children, className, ref, ...props }) => {
  return <div ref={ref} className={clsx('h-full flex-1 overflow-auto', className)}></div>;
};
