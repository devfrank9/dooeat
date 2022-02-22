import {Route, Routes} from 'react-router-dom';
import ProProfileMain from './ProProfileMain';
import ProProfileEdit from './ProProfileEdit';

function ProProfile() {
  return (
    <Routes>
      <Route path="/" element={<ProProfileMain />} />
      <Route path="/edit" element={<ProProfileEdit />} />
    </Routes>
  );
}

export default ProProfile;
