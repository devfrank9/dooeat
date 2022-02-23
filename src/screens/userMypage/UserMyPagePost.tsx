import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const UserMyPagePost = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="내가 쓴 글" />
        <div style={{height: '110px'}} />
        <PicAlign>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
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

export default UserMyPagePost;
