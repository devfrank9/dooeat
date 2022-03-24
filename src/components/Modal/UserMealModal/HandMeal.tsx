import styled from 'styled-components';
import ModalLayout from '../ModalLayout';

interface KindRegiModalProps {
  toggleModal: () => void;
  selected?: number;
  headerText?: string;
  progressOk?: boolean;
}

const HandMeal = ({toggleModal, selected, progressOk}: KindRegiModalProps) => {
  return (
    <ModalLayout toggleModal={toggleModal}>
      <div style={{borderBottom: '2px solid rgb(252,216,224)'}}>
        <Header>자신의 손을 참고하여</Header>
        <Header2>
          <p>한 끼 적정 식사량</p>
          <p>을 확인하세요.</p>
        </Header2>
      </div>
      <ContentAlign>
        <Content>
          <img src="" alt="" />
          <div>
            <p>단백질</p>
            <p>손바닥을 가득 채우는 크기</p>
          </div>
        </Content>
        <Content>
          <img src="" alt="" />
          <div>
            <p>채소</p>
            <p>주먹 하나 분량</p>
          </div>
        </Content>
        <Content>
          <img src="" alt="" />
          <div>
            <p>탄수화물</p>
            <p>모은 손가락과 손바닥을 가득 채우는 분량</p>
          </div>
        </Content>
        <Content>
          <img src="" alt="" />
          <div>
            <p>지방</p>
            <p>엄지손가락 하나</p>
          </div>
        </Content>
      </ContentAlign>
    </ModalLayout>
  );
};
const Content = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(223, 223, 223);
  img {
    width: 140px;
    height: 140px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }
  p:first-child {
    color: rgb(239, 144, 167);
    font-size: 18px;
    font-weight: 500;
  }
  p:last-child {
    font-size: 15px;
  }
`;
const ContentAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: 'black';
  font-size: 18px;
  font-weight: 400;
  margin-top: 36px;
`;
const Header2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: 'black';
  font-size: 18px;
  font-weight: 400;
  p:first-child {
    font-weight: 500;
  }
  margin-bottom: 20px;
`;

export default HandMeal;
