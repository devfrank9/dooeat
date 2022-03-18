import {useEffect} from 'react';
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {RecoilRoot, useRecoilState, useSetRecoilState} from 'recoil';
import {createNetworkStatusNotifier} from 'react-apollo-network-status';
import Constants from './lib/Constants';
import {__isLoading, __session} from './lib/atom';
import {useLocalStorage, useSessionStorage} from 'react-use-storage';
import {GlobalStyle} from './styles/GlobalStyle';
import Router from './Router';
import LoadingScreen from './screens/includes/LoadingScreen';

const {link, useApolloNetworkStatus} = createNetworkStatusNotifier();

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

const ScreenHooker = () => {
  const [value] = useLocalStorage(Constants.storage.autoLoginSession, '');
  const [sessionValue] = useSessionStorage(
    Constants.storage.currentLoginSession,
    '',
  );
  const status = useApolloNetworkStatus();
  const [isLoading, setIsLoading] = useRecoilState(__isLoading);
  const setSession = useSetRecoilState(__session);

  useEffect(() => {
    if (sessionValue) {
      setSession(sessionValue);
    } else if (value) {
      setSession(value);
    }
  }, []);

  useEffect(() => {
    if (status.numPendingQueries > 0 || status.numPendingMutations > 0) {
      setIsLoading(true);
    } else {
      if (
        status.queryError &&
        status.queryError.operation.operationName !== 'checkDuplicate'
      ) {
        let error = status.queryError
          ? status.queryError
          : status.mutationError;
        if (error) {
          if (error.networkError) {
            alert(error.networkError.message);
          } else if (error.graphQLErrors) {
            alert(error.graphQLErrors[0].message);
          }
        }
      }
      setIsLoading(false);
    }
  }, [status]);

  return isLoading ? <LoadingScreen /> : null;
};

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
