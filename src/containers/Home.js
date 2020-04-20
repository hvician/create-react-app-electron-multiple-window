import React from 'react';
import './style.css';

const openElectronWindow = route => {
  // eslint-disable-next-line global-require
  const electron = require('electron');
  const { remote } = electron;
  const windowManager = remote.require('electron-window-manager');
  const isDev = remote.require('electron-is-dev');
  const path = remote.require('path');

  console.log('path', `file://${path.join(window.__dirname, 'index.html#/', route)}`);

  const win2 = windowManager.createNew(
    route,
    'Custom Window title',
    // Remember we are using HashRouter so #/component and not /component
    // eslint-disable-next-line no-underscore-dangle
    isDev ? `http://localhost:3000#/${route}` : `file://${path.join(window.__dirname, 'index.html#/', route)}`,
    undefined,
    {
      title: `Sample History Window - ${route}`,
      webPreferences: {
        nodeIntegration: true,
      },
    },
    false
  );
  // win2.onReady( ... );
  win2.open();
};

const Home = props => {
  return (
    <div>
      <br />
      <br />
      {window.location.href}
      <br />
      <br />
      <div>
        <button
          type="button"
          onClick={() => {
            openElectronWindow('component1');
          }}
        >
          New Window Component1
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            openElectronWindow('component2');
          }}
        >
          New Window Component2
        </button>
      </div>
    </div>
  );
};
export default Home;
