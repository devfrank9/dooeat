import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Navigation} from '../../components/Navigation';
import {StatusBar} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const CommuFavor = () => {
  const [isActive, setIsActive] = useState(false);
  const onActiveToggle = () => setIsActive(prev => !prev);

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
        <Taps>
          <Tap isActive={!isActive} onClick={onActiveToggle}>
            인기
          </Tap>
          <Tap isActive={isActive} onClick={onActiveToggle}>
            전체
          </Tap>
        </Taps>
        <Contents to="/community/:id">
          <div>
            <p>다이어트 후 사후관리는 어떻게 하죠? 요요가...</p>
            <BackImg />
            <p>#급찐급빠 #단기다이어트 #요요방지</p>
            <NickLine>
              <img src="/image/body.png" alt="" />
              <p>회원 닉네임</p>
              <LikeAlign>
                <button />
                <p>120</p>
                <button />
                <p>20</p>
              </LikeAlign>
            </NickLine>
          </div>
          <Triangle />
          <CommentTop>
            <CommentHeader>
              <img src="/image/commentPic.png" alt="" />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>전문가 답변</span>
                <span>김건강 트레이너</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button />
                <span style={{fontFamily: 'roboto', fontSize: '12px'}}>
                  120
                </span>
              </div>
              <BestBtn>Best</BestBtn>
              <img src="/image/Icon awesome-crown.png" alt="" />
            </CommentHeader>
            <CommentBox>
              다이어트 성공 축하드립니다!! 단기간 다이어트의 경우 칼로리 제한을
              통해 체지방을 감소하기 때문에 다이어트 후 바로 일반식을 먹게 되면
              요요 현상이 올…
            </CommentBox>
          </CommentTop>
          <div style={{height: '10px'}} />
          <CommentTop>
            <CommentHeader>
              <img src="/image/commentPic.png" alt="" />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>전문가 답변</span>
                <span>박건강 트레이너</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button />
                <span style={{fontFamily: 'roboto', fontSize: '12px'}}>
                  102
                </span>
              </div>
            </CommentHeader>
            <CommentBox>
              다이어트 성공 축하드립니다!! 단기간 다이어트의 경우 칼로리 제한을
              통해 체지방을 감소하기 때문에 다이어트 후 바로 일반식을 먹게 되면
              요요 현상이 올…
            </CommentBox>
          </CommentTop>
          <div style={{height: '10px'}} />
          <CommentTop>
            <CommentHeader>
              <img src="/image/commentPic.png" alt="" />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>전문가 답변</span>
                <span>나건강 트레이너</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button />
                <span style={{fontFamily: 'roboto', fontSize: '12px'}}>89</span>
              </div>
            </CommentHeader>
            <CommentBox>
              다이어트 성공 축하드립니다!! 단기간 다이어트의 경우 칼로리 제한을
              통해 체지방을 감소하기 때문에 다이어트 후 바로 일반식을 먹게 되면
              요요 현상이 올…
            </CommentBox>
          </CommentTop>
        </Contents>
        <Contents to="/community/:id">
          <div>
            <p>원푸드 다이어트 괜찮나요?</p>
            <BackImg />
            <p>#원푸드 #1끼1바나나 #될까요</p>
            <NickLine>
              <img src="/image/body.png" alt="" />
              <p>회원 닉네임</p>
              <LikeAlign>
                <button />
                <p>110</p>
                <button />
                <p>10</p>
              </LikeAlign>
            </NickLine>
          </div>
          <Triangle />
          <CommentTop>
            <CommentHeader>
              <img src="/image/commentPic.png" alt="" />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>전문가 답변</span>
                <span>김건강 트레이너</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button />
                <span style={{fontFamily: 'roboto', fontSize: '12px'}}>
                  120
                </span>
              </div>
              <BestBtn>Best</BestBtn>
              <img src="/image/Icon awesome-crown.png" alt="" />
            </CommentHeader>
            <CommentBox>
              다이어트 성공 축하드립니다!! 단기간 다이어트의 경우 칼로리 제한을
              통해 체지방을 감소하기 때문에 다이어트 후 바로 일반식을 먹게 되면
              요요 현상이 올…
            </CommentBox>
          </CommentTop>
          <div style={{height: '10px'}} />
          <CommentTop>
            <CommentHeader>
              <img src="/image/commentPic.png" alt="" />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>전문가 답변</span>
                <span>김건강 트레이너</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button />
                <span style={{fontFamily: 'roboto', fontSize: '12px'}}>
                  120
                </span>
              </div>
            </CommentHeader>
            <CommentBox>
              다이어트 성공 축하드립니다!! 단기간 다이어트의 경우 칼로리 제한을
              통해 체지방을 감소하기 때문에 다이어트 후 바로 일반식을 먹게 되면
              요요 현상이 올…
            </CommentBox>
          </CommentTop>
          <div style={{height: '10px'}} />
          <CommentTop>
            <CommentHeader>
              <img src="/image/commentPic.png" alt="" />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>전문가 답변</span>
                <span>김건강 트레이너</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button />
                <span style={{fontFamily: 'roboto', fontSize: '12px'}}>
                  120
                </span>
              </div>
            </CommentHeader>
            <CommentBox>
              다이어트 성공 축하드립니다!! 단기간 다이어트의 경우 칼로리 제한을
              통해 체지방을 감소하기 때문에 다이어트 후 바로 일반식을 먹게 되면
              요요 현상이 올…
            </CommentBox>
          </CommentTop>
        </Contents>
        <BtnAlign>
          <EditBtn to={'/community/edit'} />
        </BtnAlign>
        <div style={{height: '100px'}}></div>
        <Navigation />
      </AlignBase>
    </BaseScreen>
  );
};
const BtnAlign = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 90px;
  width: 100%;
  max-width: 480px;
`;
const EditBtn = styled(Link)`
  width: 48px;
  height: 48px;
  background: url('/image/healthEdit.png') no-repeat 50% 50%;
  background-size: cover;
  background-color: ${prop => prop.theme.mainColor};
  border: none;
  border-radius: 24px;
  position: absolute;
  right: 29px;
  bottom: 0;
`;
const CommentBox = styled.div`
  position: absolute;
  display: flex;
  margin: 0 28px;
  font-size: 14px;
  line-height: 25px;
  top: 74px;
`;
const BestBtn = styled.div`
  position: absolute;
  left: 141px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 18px;
  background-color: rgb(179, 80, 248);
  color: white;
  border-radius: 14px;
  font-size: 12px;
  font-family: ${prop => prop.theme.roboto};
`;
const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 22px solid rgb(245, 245, 245);
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
`;
const CommentHeader = styled.div`
  display: flex;
  img {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 30px;
    left: 28px;
  }
  img:last-child {
    position: absolute;
    width: 17.5px;
    height: 14px;
    top: 18px;
    left: 33px;
  }
  div:nth-child(2) {
    position: absolute;
    top: 20px;
    left: 66px;
    span:first-child {
      font-size: 12px;
      font-weight: 500;
      color: ${prop => prop.theme.fontColor2};
    }
    span:last-child {
      font-size: 15px;
      font-weight: 500;
    }
  }
  div:nth-child(3) {
    position: absolute;
    top: 20px;
    right: 28px;
    button {
      background: url('/image/heart.png') no-repeat 50% 50%;
      border: none;
      width: 32px;
      height: 32px;
    }
  }
`;
const CommentTop = styled.div`
  position: relative;
  background-color: rgb(245, 245, 245);
  margin: 0 -28px;
  height: 174px;
  z-index: -6;
`;
const LikeAlign = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  button {
    width: 32px;
    height: 32px;
    background: url('/image/emptyHeart.png') no-repeat 50% 50%;
    border: none;
  }
  button:nth-child(3) {
    margin-left: 20px;
    background: url('/image/blob.png') no-repeat 50% 50%;
  }
  p:last-child {
    margin-right: 10px;
  }
`;
const NickLine = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 6px;
  }
`;
const BackImg = styled.div`
  margin: 0 -28px;
  height: 350px;
  z-index: -6;
  background: url('/image/hi.png') no-repeat 50% 50%;
  background-size: cover;
`;
const Contents = styled(Link)`
  position: relative;
  height: 1060px;
  color: black;
  p:first-child {
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 12px;
  }
  p:nth-child(3) {
    font-size: 12px;
    font-weight: 300;
    color: ${prop => prop.theme.mainColor};
    margin-top: 12px;
    margin-bottom: 8px;
  }
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`;
const Tap = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid
    ${props =>
      props.isActive ? props.theme.mainColor : props.theme.fontColor2};

  min-width: 187px;
  width: 100%;
  height: 60px;
  color: ${props =>
    props.isActive ? props.theme.mainColor : props.theme.fontColor2};
`;
const Taps = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  margin: 0 -28px;
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
export default CommuFavor;
