import {Route, Routes} from 'react-router-dom';
import ProMyPageMain from './ProMyPageMain';

const ProMypageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProMyPageMain />} />
    </Routes>
  );
};
export default ProMypageRoute;
