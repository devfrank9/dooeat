import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
interface Prop {
  pageNumber?: number;
}

const NavProgress = ({pageNumber = 1}: Prop) => {
  let navigate = useNavigate();

  return (
    <NavContainer>
      <ArrowContainer>
        <BackArrow
          onClick={() => {
            navigate(-1);
          }}
        />
      </ArrowContainer>
      <NumContainer>
        <p>{pageNumber}/8</p>
      </NumContainer>
    </NavContainer>
  );
};
const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-left: 30px;
`;
const NumContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  font-size: 16px;
`;
const BackArrow = styled.button`
  border: none;
  background-color: inherit;
  background: url('/image/Icon ionic-ios-arrow-round-back.png') no-repeat 50%
    50%;
  width: 24px;
  height: 16px;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 -28px;
`;

export default NavProgress;
