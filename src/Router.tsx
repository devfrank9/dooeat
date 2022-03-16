import PrivateRoute from './lib/PrivateRoute';
import PublicRoute from './lib/PublicRoute';
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

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useRecoilValue} from 'recoil';
import {Routes, Route, useLocation} from 'react-router-dom';
import {__me} from './lib/atom';

const Router = () => {
  let location = useLocation();
  const getUserLevel = useRecoilValue(__me);

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
          <Route
            path={'/'}
            element={
              <PublicRoute restricted={false}>
                {getUserLevel?.mb_level === undefined ? (
                  <Main />
                ) : getUserLevel?.mb_level === 2 ? (
                  <UserMealRoute />
                ) : (
                  <ProProfileRouter />
                )}
              </PublicRoute>
            }
          />
          <Route
            path={'/login'}
            element={
              <PublicRoute restricted={false}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path={'/search'}
            element={
              <PublicRoute restricted={false}>
                <SearchId />
              </PublicRoute>
            }
          />
          <Route
            path={'/notice'}
            element={
              <PublicRoute restricted={false}>
                <Notice />
              </PublicRoute>
            }
          />
          <Route
            path={'/join-user/*'}
            element={
              <PublicRoute restricted={false}>
                <JoinUserRoute />
              </PublicRoute>
            }
          />
          <Route
            path={'/search-mento/*'}
            element={
              <PublicRoute restricted={false}>
                <SearchMentoRoutes />
              </PublicRoute>
            }
          />
          <Route
            path={'/join-pro/*'}
            element={
              <PublicRoute restricted={false}>
                <JoinProRoute />
              </PublicRoute>
            }
          />
          <Route path={'/notice/:id'} element={<NoticeDetail />} />
          <Route path={'/community/*'} element={<CommuRoutes />} />
          <Route path={'/shop/*'} element={<ShopRoute />} />
          {/* 회원 라우팅 */}
          {getUserLevel?.mb_level === 2 ? (
            <Route path={'/'}>
              <Route
                path={'/*'}
                element={
                  <PrivateRoute>
                    <UserMealRoute />
                  </PrivateRoute>
                }
              />
              <Route
                path={'health/*'}
                element={
                  <PrivateRoute>
                    <UserHealthRoute />
                  </PrivateRoute>
                }
              />
              <Route
                path={'pro/*'}
                element={
                  <PrivateRoute>
                    <UserProRoute />
                  </PrivateRoute>
                }
              />
              <Route
                path={'mypage/*'}
                element={
                  <PrivateRoute>
                    <UserMypageRoute />
                  </PrivateRoute>
                }
              />
            </Route>
          ) : (
            <Route path="/error" element={<h1>못지나간다</h1>} />
          )}
          {/* 전문가 라우팅 */}
          {getUserLevel?.mb_level === 3 ? (
            <Route path={'/'}>
              <Route
                path={'/*'}
                element={
                  <PrivateRoute>
                    <ProProfileRouter />
                  </PrivateRoute>
                }
              />
              <Route
                path={'mypage/*'}
                element={
                  <PrivateRoute>
                    <ProMypageRoute />
                  </PrivateRoute>
                }
              />
              <Route
                path={'manage/*'}
                element={
                  <PrivateRoute>
                    <ProManageRoutes />
                  </PrivateRoute>
                }
              />
            </Route>
          ) : (
            <Route path="/error" element={<h1>못지나간다</h1>} />
          )}
          <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
