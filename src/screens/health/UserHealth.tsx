import {Route, Routes} from 'react-router-dom';
import HealthMain from './HealthMain';
import HealthMain2 from './HealthMain2';
import ScaleGraph from './ScaleGraph';
import HealthEdit from './HealthEdit';

function SearchMento() {
  return (
    <Routes>
      <Route path="/" element={<HealthMain />} />
      <Route path="2" element={<HealthMain2 />} />
      <Route path="scale-graph" element={<ScaleGraph />} />
      <Route path="edit" element={<HealthEdit />} />
    </Routes>
  );
}

export default SearchMento;
