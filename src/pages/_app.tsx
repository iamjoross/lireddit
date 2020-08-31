import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { createClient, Provider } from 'urql';
import theme from '../theme';

const client = createClient({
  url: 'http://dev.test-site.com:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value='light'>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
