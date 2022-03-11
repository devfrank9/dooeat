import {Route, Routes} from 'react-router-dom';
import HealthMain from './HealthMain';
import ScaleGraph from './ScaleGraph';
import HealthEdit from './HealthEdit';

function SearchMento() {
  return (
    <Routes>
      <Route path="/" element={<HealthMain />} />
      <Route path="scale-graph" element={<ScaleGraph />} />
      <Route path="edit" element={<HealthEdit />} />
      <Route path=":date" element={<HealthEdit />} />
    </Routes>
  );
}

export default SearchMento;
