import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {RecoilRoot} from 'recoil';
import {createNetworkStatusNotifier} from 'react-apollo-network-status';
import Constants from './lib/Constants';
import {GlobalStyle} from './styles/GlobalStyle';
import Router from './Router';
import ScreenHooker from './lib/ScreenHooker';

const {link} = createNetworkStatusNotifier();
const appClient = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
      nextFetchPolicy: 'no-cache',
      refetchWritePolicy: 'overwrite',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
  link: link.concat(
    createHttpLink({uri: Constants.urls.gqlServer, credentials: 'include'}),
  ),
});

const App = () => {
  return (
    <ApolloProvider client={appClient}>
      <RecoilRoot>
        <ScreenHooker />
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
