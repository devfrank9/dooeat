import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPageComm = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="내가 쓴 댓글" />
        <div style={{height: '110px'}} />
        <PicAlign>
          {[...Array(12)].map((item, index) => (
            <div onClick={() => navigate(':id')} />
          ))}
        </PicAlign>
      </AlignBase>
    </BaseScreen>
  );
};
const PicAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    display: block;
    min-width: 103px;
    width: 32.29%;
    padding-bottom: 32.29%;
    border-radius: 6px;
    margin-bottom: 5px;
    background: url('/image/hi.png') no-repeat 50% 50%;
    background-size: cover;
  }
  img {
    display: block;
    min-width: 103px;
    width: 32.29%;
    border-radius: 6px;
    margin-bottom: 5px;
  }
`;

export default UserMyPageComm;
