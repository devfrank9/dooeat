import {Route, Routes} from 'react-router-dom';
import UserMyPageEdit from './UserMyPageEdit';
import UserMyPageMain from './UserMyPageMain';
import UserMyPagePost from './UserMyPagePost';
import UserMyPageComm from './UserMyPageComm';
import UserMyPageMatchSet from './UserMyPageMatchSet';
import UserMyPageApply from './UserMyPageApply';
import UserMyPageFavor from './UserMyPageFavor';
import UserMyPageSet from './UserMyPageSet';

const UserMypageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserMyPageMain />} />
      <Route path="/edit" element={<UserMyPageEdit />} />
      <Route path="/my-post" element={<UserMyPagePost />} />
      <Route path="/my-comment" element={<UserMyPageComm />} />
      <Route path="/match-set" element={<UserMyPageMatchSet />} />
      <Route path="/match-apply" element={<UserMyPageApply />} />
      <Route path="/favor-pro" element={<UserMyPageFavor />} />
      <Route path="/alert-set" element={<UserMyPageSet />} />
    </Routes>
  );
};
export default UserMypageRoute;
