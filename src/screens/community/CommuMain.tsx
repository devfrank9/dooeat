import {Routes, Route, useLocation, useParams, Link} from 'react-router-dom';
import styled from 'styled-components';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';
import CommuFavor from './CommuFavor';
import CommuAll from './CommuAll';

const CommuMain = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar
          Subject="커뮤니티"
          Img="/image/myInfo.png"
          LinkTo="/user/mypage"
        />
        <div style={{height: '110px'}} />
        <Search placeholder="검색할 내용을 입력해주세요." />
        <Tabs>
          <Tab isActive={'favor' !== null}>
            <Link to="favor">인기</Link>
          </Tab>
          <Tab isActive={'all' !== null}>
            <Link to="all">전체</Link>
          </Tab>
        </Tabs>
      </AlignBase>
      <Routes>
        <Route path={`favor`} element={<CommuFavor />} />
        <Route path={`all`} element={<CommuAll />} />
      </Routes>
    </BaseScreen>
  );
};

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const Tab = styled.span<{isActive: boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props =>
    props.isActive ? props.theme.mainColor : props.theme.fontColor2};
  a {
    display: block;
  }
`;
const Search = styled.input`
  padding-right: 50px;
  height: 48px;
  padding-left: 20px;
  border: 1px solid ${props => props.theme.btnColor2};
  font-size: 15px;
  border-radius: 24px;
  display: block;
  box-sizing: border-box;
  background: url('/image/Icon feather-search.png') no-repeat 95% 50%;
  &::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export default CommuMain;
