// Packages
import {useNavigate} from 'react-router-dom';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
import BmiResult2 from '../../components/BmiResult2';
// Styles
import * as Styled from '../../styles/joinUser/styled';

const JoinUser8 = () => {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={8} />
        <Styled.GoalFirstSubject>
          <p>닉네임 님의 목표,</p>
          <Styled.Inline>
            <Styled.UnderLine>함께 이뤄드릴께요!</Styled.UnderLine>
          </Styled.Inline>
        </Styled.GoalFirstSubject>
        <BmiResult2 HeaderText="현재 체중" HeaderColor="black" />
        <Styled.Arrow>
          <img src="/image/Icon awesome-arrow-down.png" alt="" />
        </Styled.Arrow>
        <BmiResult2 HeaderText="목표 체중" HeaderColor="rgb(239,144,167)" />
        <Styled.GoalTextAlign>
          <p>총 감량 목표</p>
          <Styled.DietGoalInput>
            <Styled.DietGoalLabel>kg</Styled.DietGoalLabel>
            <Styled.DietGoalKgInput
              placeholder="입력해주세요."
              type="text"
              value={7}
            />
          </Styled.DietGoalInput>
        </Styled.GoalTextAlign>
        <Styled.ColoredBtn onClick={() => navigate('/search-mento/1')}>
          동네 운동 멘토 찾기
        </Styled.ColoredBtn>
        <div style={{height: '12px'}} />
        <Styled.UnColoredBtn onClick={() => navigate('/user/meal')}>
          아니오, 괜찮습니다!
        </Styled.UnColoredBtn>
        <div style={{height: '38px'}} />
      </AlignBase>
    </BaseScreen>
  );
};

export default JoinUser8;
