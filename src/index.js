import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';

import store from '~/state';
import GlobalStyle from '~/style/GlobalStyle';
import defaultTheme from '~/style/themes/default';
import App from '~/containers/App';
import { isMobile } from '~/utils';
import config from '~/config';

(() => {
  if (isMobile()) {
    return window.location.replace(config.mobileRedirect);
  }

  ReactDOM.render(
    <StoreProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </StoreProvider>,
    document.getElementById('root')
  );

  return true;
})();
