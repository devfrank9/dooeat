import {__isLoading} from '../lib/atom';
import {useRecoilValue} from 'recoil';
import LoadingScreen from './includes/LoadingScreen';
import styled from 'styled-components';

interface Prop {
  children: any;
}
const BaseScreen = ({children}: Prop) => {
  const isLoading = useRecoilValue(__isLoading);
  return (
    <Base>
      {isLoading && <LoadingScreen />}
      {children}
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default BaseScreen;
