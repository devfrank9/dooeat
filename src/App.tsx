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
import SearchMento1 from './screens/searchMento/SearchMento1';
import SearchMento2 from './screens/searchMento/SearchMento2';
import SearchMento3 from './screens/searchMento/SearchMento3';
import SearchMento4 from './screens/searchMento/SearchMento4';
import JoinPro1 from './screens/joinPro/JoinPro1';
import JoinPro2 from './screens/joinPro/JoinPro2';
import JoinPro3 from './screens/joinPro/JoinPro3';
import JoinPro4 from './screens/joinPro/JoinPro4';
import JoinPro5 from './screens/joinPro/JoinPro5';
import JoinPro6 from './screens/joinPro/JoinPro6';
import JoinPro7 from './screens/joinPro/JoinPro7';
import JoinPro8 from './screens/joinPro/JoinPro8';

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
          <Route path={'/join-user/1'} element={<JoinUser1 />} />
          <Route path={'/join-user/2'} element={<JoinUser2 />} />
          <Route path={'/join-user/3'} element={<JoinUser3 />} />
          <Route path={'/join-user/4'} element={<JoinUser4 />} />
          <Route path={'/join-user/5'} element={<JoinUser5 />} />
          <Route path={'/join-user/6'} element={<JoinUser6 />} />
          <Route path={'/join-user/7'} element={<JoinUser7 />} />
          <Route path={'/join-user/8'} element={<JoinUser8 />} />
          <Route path={'/join-pro1'} element={<Main />} />
          <Route path={'/test'} element={<CompTest />} />
          <Route path={'/search-mento/1'} element={<SearchMento1 />} />
          <Route path={'/search-mento/2'} element={<SearchMento2 />} />
          <Route path={'/search-mento/3'} element={<SearchMento3 />} />
          <Route path={'/search-mento/4'} element={<SearchMento4 />} />
          <Route path={'/join-pro/1'} element={<JoinPro1 />} />
          <Route path={'/join-pro/2'} element={<JoinPro2 />} />
          <Route path={'/join-pro/3'} element={<JoinPro3 />} />
          <Route path={'/join-pro/4'} element={<JoinPro4 />} />
          <Route path={'/join-pro/5'} element={<JoinPro5 />} />
          <Route path={'/join-pro/6'} element={<JoinPro6 />} />
          <Route path={'/join-pro/7'} element={<JoinPro7 />} />
          <Route path={'/join-pro/8'} element={<JoinPro8 />} />
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
