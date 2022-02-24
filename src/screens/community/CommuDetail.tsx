import styled from 'styled-components';
import {StatusBar3} from '../../components/StatusBar';
import BaseScreen, {AlignBase} from '../BaseScreen';

const CommuDetail = () => {
  return (
    <BaseScreen>
      <AlignBase>
        <StatusBar3 Subject="상세페이지" />
        <div style={{height: '100px'}} />
        <Subject>
          다이어트 후 사후관리는 어떻게 하죠? 요요가 오지 않으려면 어떻게 해야
          할까요?
        </Subject>
        <NickTop>
          <div>
            <img src="/image/hi.png" alt="" />
            <p>회원 닉네임</p>
          </div>
          <div>
            <p>수정</p>
            <p style={{margin: '0 5px'}}>|</p>
            <p>삭제</p>
          </div>
        </NickTop>
        <BackImg />
        <Contents>
          <p>#급찐급빠 #단기다이어트 #요요방지</p>
          <p>
            6개월 다이어트를 진행해서 살을 8kg 정도 뺐는데, 한달 만에 체중이
            3kg가 다시 증량 되었습니다. 요요 방지하는 방법 잘 아시는 분 있으시면
            조언 좀 부탁드릴께요.
          </p>
          <p>2022. 01. 22 00:22</p>
          <div>
            <button />
            <button />
            <button />
          </div>
          <p>120</p>
        </Contents>
        <div
          style={{
            margin: '0 -28px',
            height: '2px',
            borderBottom: '2px solid rgb(245, 245, 245)',
          }}
        />
        <div style={{height: '20px'}} />
        <CommentHead>
          <p>댓글</p>
          <p>20</p>
        </CommentHead>
        <CommentAlign>
          <Comment>
            <div />
            <div>
              <p>작성자 닉네임</p>
              <p>댓글 내용이 작성 되어 집니다.</p>
            </div>
            <div>
              <p>21-06-01 13:22</p>
            </div>
            <div />
            <div>
              <p>답글 쓰기</p>
              <button />
              <p>102</p>
            </div>
          </Comment>
          <Comment>
            <div />
            <div>
              <p>작성자 닉네임</p>
              <p>댓글 내용이 작성 되어 집니다.</p>
            </div>
            <div>
              <p>21-06-01 13:22</p>
            </div>
            <div />
            <div>
              <p>답글 쓰기</p>
              <button />
              <p>102</p>
            </div>
          </Comment>
        </CommentAlign>
        <div style={{height: '60px'}} />
        <Send>
          <input type="text" placeholder="댓글 내용을 입력해주세요." />
          <button />
        </Send>
      </AlignBase>
    </BaseScreen>
  );
};
const CommentAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
const Comment = styled.div`
  position: relative;
  height: 90px;
  div:first-child {
    background: url('/image/body.png') no-repeat 50% 50%;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  div:nth-child(2) {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 38px;
    p:first-child {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    p:last-child {
      font-size: 14px;
      line-height: 25px;
    }
  }
  div:nth-child(3) {
    position: absolute;
    top: 56px;
    left: 38px;
    font-size: 12px;
    line-height: 14px;
    color: ${prop => prop.theme.fontColor2};
    font-family: ${prop => prop.theme.roboto};
  }
  div:nth-child(4) {
    position: absolute;
    right: 0;
    top: -2px;
    background: url('/image/option.png') no-repeat 50% 50%;
    width: 32px;
    height: 32px;
  }
  div:nth-child(5) {
    position: absolute;
    display: flex;
    align-items: center;
    top: 45px;
    right: 5px;
    p:first-child {
      font-size: 12px;
      line-height: 18px;
      color: ${prop => prop.theme.fontColor2};
    }
    button {
      border: none;
      width: 32px;
      height: 32px;
      background: url('/image/heart.png') no-repeat 50% 50%;
      margin-left: 8px;
    }
    p:last-child {
      font-size: 12px;
      line-height: 14px;
      font-family: ${prop => prop.theme.roboto};
    }
  }
`;
const Send = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0rem 0.1rem 0.5rem 0rem rgb(223, 223, 223, 0.8);
  margin: 0 -28px;
  height: 59px;
  background-color: white;
  z-index: 6;
  position: fixed;
  width: 100vw;
  max-width: 480px;
  bottom: 0;
  input {
    position: absolute;
    left: 28px;
    min-width: 220px;
    width: 55%;
    height: 36px;
    border-radius: 18px;
    background-color: rgb(245, 245, 245);
    border: none;
    padding-left: 20px;
    padding-right: 30px;
    margin-right: 8px;
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
  }
  button {
    position: absolute;
    right: 33px;
    width: 36px;
    height: 36px;
    background: url('/image/send.png') no-repeat 50% 50%;
    border: none;
  }
`;
const CommentHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p:first-child {
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
    width: 33px;
    margin-right: 4px;
  }
  p:last-child {
    font-size: 15px;
    line-height: 18px;
    color: ${prop => prop.theme.mainColor};
    font-family: ${prop => prop.theme.roboto};
  }
`;
const Contents = styled.div`
  margin-top: 12px;
  position: relative;
  height: 186px;
  p:nth-child(1) {
    color: ${prop => prop.theme.mainColor};
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    margin-bottom: 8px;
  }
  p:nth-child(2) {
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 12px;
  }
  p:nth-child(3) {
    color: ${prop => prop.theme.fontColor2};
    font-size: 12px;
    line-height: 14px;
    font-family: ${prop => prop.theme.roboto};
  }
  p:last-child {
    position: absolute;
    width: 32px;
    right: 82px;
    top: 140px;
    font-size: 12px;
    line-height: 14px;
    font-family: ${prop => prop.theme.roboto};
  }
  div {
    position: absolute;
    top: 108px;
    right: 0;
    button {
      width: 32px;
      height: 32px;
      border: none;
    }
    button:nth-child(1) {
      background: url('/image/heart.png') no-repeat 50% 50%;
    }
    button:nth-child(2) {
      background: url('/image/siren.png') no-repeat 50% 50%;
      margin-left: 16px;
    }
    button:nth-child(3) {
      background: url('/image/share.png') no-repeat 50% 50%;
      margin-left: 8px;
    }
  }
`;
const BackImg = styled.div`
  margin: 0 -28px;
  height: 440px;
  z-index: -6;
  background: url('/image/hi.png');
  background-size: cover;
`;
const NickTop = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: space-between;
  div:first-child {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
    }
    p {
      margin-left: 6px;
      font-size: 15px;
      line-height: 22px;
    }
  }
  div:last-child {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${prop => prop.theme.fontColor2};
    line-height: 18px;
  }
`;
const Subject = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
`;

export default CommuDetail;
