import {useLocation} from 'react-router-dom';
import * as Styled from '../styles/components/BmiResult';

interface Prop {
  HeaderText?: string;
  HeaderColor?: string;
  gram?: string;
  result?: string | number;
  text?: string;
  statu?: string;
}

const BmiResult = ({
  HeaderText,
  HeaderColor,
  gram,
  result,
  text,
  statu,
}: Prop) => {
  const {pathname} = useLocation();
  return (
    <>
      {pathname === '/join-user/6' ? (
        <Styled.ContentBox>
          <Styled.Header>
            <p>BMI(신체질량지수)</p>
          </Styled.Header>
          <Styled.BmiCalc>
            <p>{result}</p>
          </Styled.BmiCalc>
          <Styled.HealthResult>
            <p>{statu}</p>
          </Styled.HealthResult>
          <Styled.BmiGraph>
            <div>저체중</div>
            <div>정상</div>
            <div>과체중</div>
            <div>경도비만</div>
            <div>중등비만</div>
          </Styled.BmiGraph>
          <Styled.BmiIndicator>
            <div>0</div>
            <div>18.5</div>
            <div>23</div>
            <div>25</div>
            <div>30</div>
          </Styled.BmiIndicator>
        </Styled.ContentBox>
      ) : (
        <Styled.ContentBox2>
          <Styled.Header2 HeaderColor={HeaderColor}>
            <p>{HeaderText}</p>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Styled.Label>kg</Styled.Label>
              <Styled.KgInput type="text" value={gram} />
            </div>
          </Styled.Header2>
          <Styled.BmiCalc2 HeaderColor={HeaderColor}>
            <p>{text} BMI</p>
            <p>{result}</p>
          </Styled.BmiCalc2>
          <Styled.HealthResult2>
            <p>{statu}</p>
          </Styled.HealthResult2>
          <Styled.BmiGraph2>
            <div>저체중</div>
            <div>정상</div>
            <div>과체중</div>
            <div>경도비만</div>
            <div>중등비만</div>
          </Styled.BmiGraph2>
          <Styled.BmiIndicator2>
            <div>0</div>
            <div>18.5</div>
            <div>23</div>
            <div>25</div>
            <div>30</div>
          </Styled.BmiIndicator2>
          <div style={{flex: 1}}></div>
        </Styled.ContentBox2>
      )}
    </>
  );
};

export default BmiResult;
