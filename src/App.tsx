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
import SearchId from './screens/SearchId';
import JoinUser from './screens/joinUser/JoinUser';
import SearchMento from './screens/searchMento/SearchMento';
import JoinPro from './screens/joinPro/JoinPro';
import UserMeal from './screens/meal/UserMeal';
import UserPro from './screens/userPro/UserPro';
import UserHealth from './screens/health/UserHealth';
import {createGlobalStyle} from 'styled-components';
import ProProfile from './screens/proProfile/ProProfileRouter';

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
          <Route path={'/'} element={<Main />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/search'} element={<SearchId />} />
          <Route path={'/join-user/*'} element={<JoinUser />} />
          <Route path={'/search-mento/*'} element={<SearchMento />} />
          <Route path={'/join-pro/*'} element={<JoinPro />} />
          <Route path={'/user/meal/*'} element={<UserMeal />} />
          <Route path={'/user/health/*'} element={<UserHealth />} />
          <Route path={'/user/pro/*'} element={<UserPro />} />
          <Route path={'/pro/profile/*'} element={<ProProfile />} />
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
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
