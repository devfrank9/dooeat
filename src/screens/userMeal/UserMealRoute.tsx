import {Route, Routes, useLocation} from 'react-router-dom';
import MealMain from './MealMain';
import MealWrite from './MealWrite';
import MealEdit from './MealEdit';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {Navigation} from '../../components/Navigation';

function UserMealRoute() {
  const {pathname} = useLocation();
  return (
    <BaseScreen>
      <AlignBase>
        <Routes>
          <Route path="/" element={<MealMain />} />
          <Route path="/write" element={<MealWrite />} />
          <Route path="/edit/:wr_id" element={<MealEdit />} />
        </Routes>
        {pathname === '/' ? <Navigation /> : <></>}
      </AlignBase>
    </BaseScreen>
  );
}

export default UserMealRoute;
