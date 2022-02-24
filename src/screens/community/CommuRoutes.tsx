import {Route, Routes} from 'react-router-dom';
import CommuAll from './CommuAll';
import CommuFavor from './CommuFavor';
import CommuMain from './CommuMain';
import CommuDetail from './CommuDetail';
import CommuEdit from './CommuEdit';

function CommuRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CommuMain />} />
      <Route path="/favor" element={<CommuFavor />} />
      <Route path="/all" element={<CommuAll />} />
      <Route path=":id" element={<CommuDetail />} />
      <Route path="edit" element={<CommuEdit />} />
    </Routes>
  );
}

export default CommuRoutes;
