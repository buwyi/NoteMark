import clsx from 'clsx';
import {
  ActionButtonRow,
  Content,
  NotePreviewList,
  RootLayout,
  SideBar,
  TopBar,
  TrafficLight,
} from './components';

const App = (): React.JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TopBar />
      <TrafficLight />
      <RootLayout>
        <SideBar className="p-8">
          <ActionButtonRow className={clsx('flex justify-between mt-2 h-30')} />
          <NotePreviewList className="h-[calc(100%-70px)] max-h-full overflow-auto mt-7 space-y-1" />
        </SideBar>
        <Content className="border-l border-l-white/20 bg-zinc-900/50">Content </Content>
      </RootLayout>
    </>
  );
};

export default App;
