import {useResetRecoilState, useSetRecoilState} from 'recoil';
import {__session} from '../atom';
import {useLocalStorage, useSessionStorage} from 'react-use-storage';
import Constants from '../Constants';

const useLogout = () => {
  const setSession = useResetRecoilState(__session);
  const [_, __, removeValue] = useLocalStorage(
    Constants.storage.autoLoginSession,
  );
  const [___, ____, sessionValue] = useSessionStorage(
    Constants.storage.currentLoginSession,
    '',
  );

  return () => {
    setSession();
    removeValue();
    sessionValue();
  };
};

export default useLogout;
