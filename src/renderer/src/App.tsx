import clsx from 'clsx';
import { ActionButtonRow, Content, RootLayout, SideBar, TopBar, TrafficLight } from './components';

const App = (): React.JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TopBar />
      <TrafficLight />
      <RootLayout>
        <SideBar className="p-8">
          <ActionButtonRow className={clsx('flex justify-between mt-2')} />
        </SideBar>
        <Content className="border-l border-l-white/20 bg-zinc-900/50">Content </Content>
      </RootLayout>
    </>
  );
};

export default App;
