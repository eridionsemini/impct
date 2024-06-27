import React, {ReactElement} from 'react';

import 'react-native-gesture-handler';

import {ThemeProvider} from 'ctx';
import {RootNavi} from 'navigation';

function App(): ReactElement {
  return (
    <ThemeProvider>
      <RootNavi />
    </ThemeProvider>
  );
}

export default App;
