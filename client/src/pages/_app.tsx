import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';

import { StoreWrapper } from '@app/store';

import { Layout } from '@widgets/Layout';

import ErrorBoundary from '@shared/utils/ErrorBoundary';

import { Provider } from 'react-redux';

import '@app/styles/global.css';
import 'normalize.css/normalize.css';

const App: NextPage<AppProps> = ({ Component, ...rest }): JSX.Element => {
  const { store, props } = StoreWrapper.useWrappedStore(rest);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
