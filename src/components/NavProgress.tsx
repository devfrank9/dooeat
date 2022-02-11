import styled from 'styled-components';
interface Prop {
    pageNumber? : number
}
const NavProgress = ({pageNumber = 1}) => {
  return (
    <NavContainer>
      <ArrowContainer>
        <BackArrow src="image/Icon ionic-ios-arrow-round-back.png" alt="" />
      </ArrowContainer>
      <NumContainer>
        <p>{pageNumber}/8</p>
      </NumContainer>
    </NavContainer>
  );
};
const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const NumContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;
const BackArrow = styled.img`
  width: 2rem;
  height: 1.3333rem;
`;
const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  p {
    font-size: 1.3333rem;
  }
`;

export default NavProgress;
