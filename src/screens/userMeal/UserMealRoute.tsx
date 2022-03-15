import {Route, Routes} from 'react-router-dom';
import MealMain from './MealMain';
import MealWrite from './MealWrite';
import MealEdit from './MealEdit';
import BaseScreen, {AlignBase} from '../BaseScreen';
import {Navigation} from '../../components/Navigation';

function UserMealRoute() {
  return (
    <>
      <BaseScreen>
        <AlignBase>
          <Routes>
            <Route path="/" element={<MealMain />} />
          </Routes>
        </AlignBase>
      </BaseScreen>
      <BaseScreen>
        <AlignBase>
          <Routes>
            <Route path="write" element={<MealWrite />} />
            <Route path="edit/:wr_id" element={<MealEdit />} />
          </Routes>
          <Navigation />
        </AlignBase>
      </BaseScreen>
    </>
  );
}

export default UserMealRoute;
