import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from '@/utils/themes';
import Navigation from '@/navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
};

export default App;
