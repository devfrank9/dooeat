import {Route, Routes} from 'react-router-dom';
import MealMain from './MealMain';
import MealWrite from './MealWrite';
import MealEdit from './MealEdit';

function SearchMento() {
  return (
    <Routes>
      <Route path="/" element={<MealMain />} />
      <Route path="write" element={<MealWrite />} />
      <Route path="edit/:wr_id" element={<MealEdit />} />
    </Routes>
  );
}

export default SearchMento;
