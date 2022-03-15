import {Route, Routes} from 'react-router-dom';
import MealMain from './MealMain';
import MealWrite from './MealWrite';
import MealEdit from './MealEdit';
import {useRecoilState} from 'recoil';
import {__me} from '../../lib/atom';
import {useLQueryForGetMe} from '../../lib/GQL/CommunicationMap';
import {useEffect} from 'react';

function UserMealRoute() {
  const [loginData, loginDataResult] = useLQueryForGetMe();
  const [getMe, setMe] = useRecoilState(__me);

  useEffect(() => {
    //@ts-ignore
    loginData({variables: sessionStorage.getItem('currentLoginSession')});
    if (loginDataResult.data && loginDataResult.data.getMe) {
      setMe(loginDataResult.data.getMe);
    }
  }, [UserMealRoute]);

  return (
    <Routes>
      <Route path="/" element={<MealMain />} />
      <Route path="write" element={<MealWrite />} />
      <Route path="edit/:wr_id" element={<MealEdit />} />
    </Routes>
  );
}

export default UserMealRoute;
