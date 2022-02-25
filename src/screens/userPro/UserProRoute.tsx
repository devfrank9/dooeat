import {Route, Routes} from 'react-router-dom';
import UserProMain from './UserProMain';
import UserProApply from './UserProApply';
import UserProProfile from './UserProProfile';
import UserProReview from './UserProReview';
import UserProStory from './UserProStory';

function SearchMento() {
  return (
    <Routes>
      <Route path="/" element={<UserProMain />} />
      <Route path="profile" element={<UserProProfile />} />
      <Route path="profile/story" element={<UserProStory />} />
      <Route path="apply" element={<UserProApply />} />
      <Route path="review" element={<UserProReview />} />
    </Routes>
  );
}

export default SearchMento;
