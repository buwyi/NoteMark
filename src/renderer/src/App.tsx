import { Content, RootLayout, SideBar, TopBar, TrafficLight } from './components';

function App(): React.JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TopBar />
      <TrafficLight />
      <RootLayout>
        <SideBar className="b-blue b-solid b-2" />
        <Content className="b-red b-solid b-2" />
      </RootLayout>
    </>
  );
}

export default App;
