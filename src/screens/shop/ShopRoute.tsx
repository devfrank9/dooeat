import {Route, Routes} from 'react-router-dom';
import ShopMain from './ShopMain';
import ShopDetail from './ShopDetail';

function ProProfile() {
  return (
    <Routes>
      <Route path="/" element={<ShopMain />} />
      <Route path=":id" element={<ShopDetail />} />
    </Routes>
  );
}

export default ProProfile;
