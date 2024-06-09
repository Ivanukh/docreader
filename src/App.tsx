import './App.css';
import './bootstrap.scss'
import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import Book from './pages/Book';
import { Settings } from './types/Settings';
import Layout from './pages/Layout';
import SettingsContext from './context/SettingsContext';
import LoaderContext from './context/LoaderContext'


const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Index /> },
      { path: ':bookPath', element: <Book /> },
      { path: ':bookPath/:doc', element: <Book /> },
    ]
  }
]);


function App() {
  const [settings, setSettings] = useState<Settings>({
    title: window.location.host,
    books: []
  });
  const [fetchCounter, setFetchCounter] = useState(0);
  const incCounter = () => setFetchCounter((prevState) => (prevState + 1));
  const decCounter = () => setFetchCounter((prevState) => (prevState - 1));

  function getSettings() {
    fetch(window.location.origin + '/docs/settings.json').
      then(d => d.json()).
      then(setSettings).
      then(decCounter).
      catch((e) => { console.log(e); decCounter() });

  }

  useEffect(() => {
    incCounter()
    setTimeout(getSettings, 1000);
  }, []);

  return (
    <LoaderContext.Provider value={{
      isLoading: () => { return fetchCounter > 0 },
      incCounter: incCounter,
      decCounter: decCounter,
    }}>

      <SettingsContext.Provider value={settings}>
        <RouterProvider router={router} />
      </SettingsContext.Provider>
    </LoaderContext.Provider>
  );
}

export default App;

