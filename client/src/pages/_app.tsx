import { CSSReset } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '../style/index';

const App = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
