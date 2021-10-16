import React from 'react';

import LoadAssets from './src/container/LoadAssets';
import AppProvider from './src/hooks';
import Routes from './src/routes';

const fonts = {
  'CenturyGothic-Regular': require('./assets/fonts/CenturyGothicRegular.ttf'),
  'CenturyGothic-Bold': require('./assets/fonts/CenturyGothicBold.ttf'),
  'StarJedi-Regular': require('./assets/fonts/StarJediRegular.ttf'),
};

export default function App() {
  return (
    <AppProvider>
      <LoadAssets fonts={fonts}>
        <Routes />
      </LoadAssets>
    </AppProvider>
  );
}
