import React, {useEffect} from 'react';
import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import {createNetworkStatusNotifier} from 'react-apollo-network-status';
import Constants from './lib/Constants';
import {__isLoading, __me, __session} from './lib/atom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useLocalStorage, useSessionStorage} from 'react-use-storage';
import {createGlobalStyle} from 'styled-components';
import PrivateRoute from './lib/PrivateRoute';
import PublicRoute from './lib/PublicRoute';

// Route
import Main from './screens/Main';
import Login from './screens/Login';
import SearchId from './screens/SearchId';

import JoinUserRoute from './screens/joinUser/JoinUserRoute';
import JoinProRoute from './screens/joinPro/JoinProRoute';
import SearchMentoRoutes from './screens/searchMento/SearchMentoRoutes';
import ShopRoute from './screens/shop/ShopRoute';
import Notice from './screens/Notice';
import NoticeDetail from './screens/NoticeDetail';
import CommuRoutes from './screens/community/CommuRoutes';

import UserMealRoute from './screens/userMeal/UserMealRoute';
import UserProRoute from './screens/userPro/UserProRoute';
import UserHealthRoute from './screens/health/UserHealthRoute';
import UserMypageRoute from './screens/userMypage/UserMypageRoute';

import ProProfileRouter from './screens/proProfile/ProProfileRouter';
import ProMypageRoute from './screens/proMypage/ProMyPageRoute';
import ProManageRoutes from './screens/proManage/ProManageRoutes';

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
          {/* 공통 라우팅 */}
          {/* <Route
            path={'/'}
            element={
              <PublicRoute restricted={false}>
                <Main />
              </PublicRoute>
            }
          /> */}
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/search'} element={<SearchId />} />
          <Route path={'/notice'} element={<Notice />} />
          <Route path={'/notice/:id'} element={<NoticeDetail />} />
          <Route path={'/community/*'} element={<CommuRoutes />} />
          <Route path={'/shop/*'} element={<ShopRoute />} />
          {/* 회원가입 라우팅 */}
          <Route path={'/join-user/*'} element={<JoinUserRoute />} />
          <Route path={'/search-mento/*'} element={<SearchMentoRoutes />} />
          <Route path={'/join-pro/*'} element={<JoinProRoute />} />
          {/* 회원 라우팅 */}
          <Route path={'/user/*'}>
            {/* <Route
              path={'meal/*'}
              element={
                <PrivateRoute>
                  <UserMealRoute />
                </PrivateRoute>
              }
            /> */}
            <Route path={'meal/*'} element={<UserMealRoute />} />
            <Route path={'health/*'} element={<UserHealthRoute />} />
            <Route path={'pro/*'} element={<UserProRoute />} />
            <Route path={'mypage/*'} element={<UserMypageRoute />} />
          </Route>
          {/* 전문가 라우팅 */}
          <Route path={'/pro/profile/*'} element={<ProProfileRouter />} />
          <Route path={'/pro/mypage/*'} element={<ProMypageRoute />} />
          <Route path={'/pro/manage/*'} element={<ProManageRoutes />} />
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
          <GlobalStyle />
          <Screens />
        </BrowserRouter>
      </RecoilRoot>
    </ApolloProvider>
  );
};

const GlobalStyle = createGlobalStyle`
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body,
html {
  font: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}
.app {
  width: 100vw;
  height: 100vh;
}

`;

export default App;
