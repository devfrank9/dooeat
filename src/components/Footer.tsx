import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>* 전문가 매칭 시 필요한 데이터 입니다. (선택입력)</FooterStyle>
  );
};

export const FooterStyle = styled.p`
  font-size: 13px;
  color: cornflowerblue;
  margin-top: 12px;
  margin-left: 1px;
`;

export default Footer;
