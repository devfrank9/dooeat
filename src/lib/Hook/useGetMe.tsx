import {useRecoilState} from 'recoil';
import {__me, __session} from '../atom';
import {useEffect} from 'react';
import {useLQueryForGetMe} from '../GQL/CommunicationMap';
import {useLocalStorage} from 'react-use-storage';
import Constants from '../Constants';

const useGetMe = () => {
  const [me, setMe] = useRecoilState(__me);
  const [session, setSession] = useRecoilState(__session);
  const [_, _2, resetValue] = useLocalStorage(
    Constants.storage.autoLoginSession,
    '',
  );

  const [commGetMe, commGetMeResult] = useLQueryForGetMe();

  const refreshMe = () => {
    if (session !== '') {
      commGetMe({variables: {session}}).catch(() => {
        //Todo : Error Display
        setSession('');
      });
    }
  };

  useEffect(() => {
    if (commGetMeResult.data) {
      setMe(commGetMeResult.data.getMe);
    }
    if (
      commGetMeResult.error?.graphQLErrors &&
      commGetMeResult.error.graphQLErrors.length > 0
    ) {
      setMe(undefined);
      setSession('');
      resetValue();
    }
  }, [commGetMeResult.data, commGetMeResult.error]);

  useEffect(() => {
    refreshMe();
  }, [session]);

  return () => refreshMe();
};

export default useGetMe;
