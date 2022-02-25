import {Route, Routes} from 'react-router-dom';
import SearchMento1 from './SearchMento1';
import SearchMento2 from './SearchMento2';
import SearchMento3 from './SearchMento3';
import SearchMento4 from './SearchMento4';

function SearchMento() {
  return (
    <Routes>
      <Route path="1" element={<SearchMento1 />} />
      <Route path="2" element={<SearchMento2 />} />
      <Route path="3" element={<SearchMento3 />} />
      <Route path="4" element={<SearchMento4 />} />
    </Routes>
  );
}

export default SearchMento;
