import {Route, Routes} from 'react-router-dom';
import JoinPro1 from './JoinPro1';
import JoinPro2 from './JoinPro2';
import JoinPro3 from './JoinPro3';
import JoinPro4 from './JoinPro4';
import JoinPro5 from './JoinPro5';
import JoinPro6 from './JoinPro6';
import JoinPro7 from './JoinPro7';

function JoinPro() {
  return (
    <Routes>
      <Route path="1" element={<JoinPro1 />} />
      <Route path="2" element={<JoinPro2 />} />
      <Route path="3" element={<JoinPro3 />} />
      <Route path="4" element={<JoinPro4 />} />
      <Route path="5" element={<JoinPro5 />} />
      <Route path="6" element={<JoinPro6 />} />
      <Route path="7" element={<JoinPro7 />} />
    </Routes>
  );
}

export default JoinPro;
