import {Route, Routes} from 'react-router-dom';
import ProManageMain from './ProManageMain';
import ProManageMain2 from './ProManageMain2';
import ProManageLecture from './ProManageLecture';
import ProManageWrite from './ProManageWrite';
import ProManageComm from './ProManageComm';
import ProManageAll from './ProManageAll';
import ProManageGram from './ProManageGram';

function proManageRoutes() {
  return (
    <Routes>
      <Route path="/2" element={<ProManageMain />}></Route>
      <Route path="/" element={<ProManageMain2 />} />
      <Route path="lecture" element={<ProManageLecture />} />
      <Route path="lecture/write" element={<ProManageWrite />} />
      <Route path="lecture/commEdit" element={<ProManageComm />} />
      <Route path="lecture/all" element={<ProManageAll />} />
      <Route path="lecture/gram" element={<ProManageGram />} />
    </Routes>
  );
}

export default proManageRoutes;
