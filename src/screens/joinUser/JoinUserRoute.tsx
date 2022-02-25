import {Route, Routes} from 'react-router-dom';
import JoinUser1 from './JoinUser1';
import JoinUser2 from './JoinUser2';
import JoinUser3 from './JoinUser3';
import JoinUser4 from './JoinUser4';
import JoinUser5 from './JoinUser5';
import JoinUser6 from './JoinUser6';
import JoinUser7 from './JoinUser7';
import JoinUser8 from './JoinUser8';

function JoinUser() {
  return (
    <Routes>
      <Route path="1" element={<JoinUser1 />} />
      <Route path="2" element={<JoinUser2 />} />
      <Route path="3" element={<JoinUser3 />} />
      <Route path="4" element={<JoinUser4 />} />
      <Route path="5" element={<JoinUser5 />} />
      <Route path="6" element={<JoinUser6 />} />
      <Route path="7" element={<JoinUser7 />} />
      <Route path="8" element={<JoinUser8 />} />
    </Routes>
  );
}

export default JoinUser;
