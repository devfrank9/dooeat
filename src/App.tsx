import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {RecoilRoot, useSetRecoilState} from 'recoil';
import {createNetworkStatusNotifier} from 'react-apollo-network-status';
import Constants from './lib/Constants';
import {__isLoading, __session} from './lib/atom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useLocalStorage, useSessionStorage} from 'react-use-storage';

// view 페이지
import Main from './screens/Main';
import CompTest from './screens/CompTest';

const {link, useApolloNetworkStatus} = createNetworkStatusNotifier();

const appClient = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
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
  const setIsLoading = useSetRecoilState(__isLoading);
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
      let error = status.queryError ? status.queryError : status.mutationError;
      if (error) {
        if (error.networkError) {
          //Todo : Error 출력
        } else if (error.graphQLErrors) {
          //Todo : Error 출력
        }
      }
      setIsLoading(false);
    }
  }, [status]);

  return null;
};

function Screens() {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        classNames={'fade'}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
        key={location.key}
        time
      >
        <Routes location={location}>
          <Route path={'/'} element={<Main />} />
          <Route path={'/test'} element={<CompTest />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

const App = () => {
  return (
    <ApolloProvider client={appClient}>
      <RecoilRoot>
        <ScreenHooker />
        <BrowserRouter>
          <Screens />
        </BrowserRouter>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
