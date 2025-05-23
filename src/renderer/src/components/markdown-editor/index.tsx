import { memo } from 'react';
import type { FC, ComponentProps } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from '@mdxeditor/editor';
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor';

interface IProps extends ComponentProps<'div'> {
  //  children?: ReactNode;
}

export const MarkdownEditor: FC<IProps> = ({ children, className, ...props }) => {
  const selectedNote = useMarkdownEditor();
  if (!selectedNote) return null;

  return (
    <MDXEditor
      key={selectedNote.title + selectedNote.lastEditTime}
      markdown={selectedNote.content}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-18 px-3em py-0.5em caret-yellow-500
      prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  );
};

export default memo(MarkdownEditor);
