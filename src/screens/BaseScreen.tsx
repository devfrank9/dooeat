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
  flex-direction: column;
  max-width: 480px;
`;
export const AlignBase = styled.div`
  flex: 1;
  display: flex;
  padding: 0 28px;
  flex-direction: column;
`;
export const Space = styled.div`
  flex: 1;
`;

export default BaseScreen;
