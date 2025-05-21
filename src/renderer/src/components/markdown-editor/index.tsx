import { memo } from 'react';
import type { FC, ComponentProps } from 'react';

interface IProps extends ComponentProps<'div'> {
  //  children?: ReactNode;
}

export const MarkdownEditor: FC<IProps> = ({ children, className, ...props }) => {
  return <div>MarkdownEditor</div>;
};

export default memo(MarkdownEditor);
