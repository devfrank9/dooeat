import {Route, Routes} from 'react-router-dom';
import MealMain from './MealMain';
import MealEdit from './MealEdit';

function SearchMento() {
  return (
    <Routes>
      <Route path="/" element={<MealMain />} />
      <Route path="edit" element={<MealEdit />} />
    </Routes>
  );
}

export default SearchMento;
