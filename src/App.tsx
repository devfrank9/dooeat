import React, {useEffect} from 'react';
import './styles/App.css';
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
import Login from './screens/Login';
import JoinUser1 from './screens/joinUser/JoinUser1';
import JoinUser2 from './screens/joinUser/JoinUser2';
import JoinUser3 from './screens/joinUser/JoinUser3';
import JoinUser4 from './screens/joinUser/JoinUser4';
import JoinUser5 from './screens/joinUser/JoinUser5';
import JoinUser6 from './screens/joinUser/JoinUser6';
import JoinUser7 from './screens/joinUser/JoinUser7';
import JoinUser8 from './screens/joinUser/JoinUser8';
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
          <Route path={'/login'} element={<Login />} />
          <Route path={'/join-user1'} element={<JoinUser1 />} />
          <Route path={'/join-user2'} element={<JoinUser2 />} />
          <Route path={'/join-user3'} element={<JoinUser3 />} />
          <Route path={'/join-user4'} element={<JoinUser4 />} />
          <Route path={'/join-user5'} element={<JoinUser5 />} />
          <Route path={'/join-user6'} element={<JoinUser6 />} />
          <Route path={'/join-user7'} element={<JoinUser7 />} />
          <Route path={'/join-user8'} element={<JoinUser8 />} />
          <Route path={'/join-pro1'} element={<Main />} />
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
