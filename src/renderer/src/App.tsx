import clsx from 'clsx';
import {
  ActionButtonRow,
  Content,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  SideBar,
  TopBar,
  TrafficLight,
} from './components';
import { useRef } from 'react';

const App = (): React.JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0);
  };

  return (
    <>
      <TopBar />
      <TrafficLight />
      <RootLayout>
        <SideBar className="p-8">
          <ActionButtonRow className={clsx('flex justify-between mt-2 h-30')} />
          <NotePreviewList
            className="h-[calc(100%-70px)] max-h-full overflow-auto mt-7 space-y-1"
            onSelect={resetScroll}
          />
        </SideBar>
        <Content ref={contentContainerRef} className="border-l border-l-white/20 bg-zinc-900/50">
          <FloatingNoteTitle className="pt-1em" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  );
};

export default App;
