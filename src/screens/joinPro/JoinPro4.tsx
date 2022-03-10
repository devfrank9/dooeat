// Packages
import styled from 'styled-components';
// Screens
import BaseScreen, {AlignBase} from '../BaseScreen';
// Components
import NavProgress from '../../components/NavProgress';
// Styles
import {FileLabel, FileInput} from '../../styles/FileInputStyled';
import {TextArea} from '../../styles/InputStyled';
import * as Styled from '../../styles/joinPro/styled';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {RequestSetMember} from '../../lib/GQL/GQLInterfaces';
import {userFormState} from '../../lib/atom';
import {useRecoilState} from 'recoil';

const JoinPro4 = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [userData, setUserData] = useRecoilState(userFormState);
  const [fileUrl, setFileUrl] = useState([]);

  const signImg = (e: any) => {
    let FR = new FileReader();
    FR.addEventListener('load', () => {
      // @ts-ignore
      setSignup({
        ...signup,
        mb_img: FR.result as string,
      });
    });
    // @ts-ignore
    FR.readAsDataURL(e.target.files[0]);
  };

  const processImage = (e: any) => {
    const imageFile = e.target.files;
    const imageUrlList = [...fileUrl];
    for (let i = 0; i < imageFile.length; i += 1) {
      const imageUrl = URL.createObjectURL(imageFile[i]);
      // @ts-ignore
      imageUrlList.push(imageUrl);
    }
    // @ts-ignore
    setFileUrl(imageUrlList);
  };
  const handleDeleteImage = (id: number) => {
    setFileUrl(fileUrl.filter((_, index) => index !== id));
  };

  const processSignup = () => {
    Object.assign(signup, userData);
    setUserData(signup);
    navigate('/join-pro/5');
  };

  return (
    <BaseScreen>
      <AlignBase>
        <NavProgress pageNumber={4} />
        <Styled.TextAlign2>
          <p>전문가님의</p>
          <p>인증 수단을 입력해주세요.</p>
        </Styled.TextAlign2>
        <Styled.LabelAlign>
          <FileLabel htmlFor="file1">전문 자격증</FileLabel>
          <FileInput
            type="file"
            id="file1"
            onChange={e => {
              signImg(e);
              processImage(e);
            }}
            accept="image/*,image/*"
            multiple
          />
          <UploadImgContainer>
            {fileUrl.map((image: any, id: any) => (
              <ImgContainer key={id}>
                <UploadedImg src={image} alt={`${image}-${id}`} />
                <Delete onClick={() => handleDeleteImage(id)} />
              </ImgContainer>
            ))}
          </UploadImgContainer>
          <FileLabel htmlFor="file2">사업자등록증</FileLabel>
          <FileInput type="file" id="file2" />
          <FileLabel htmlFor="file3">기타(별도 입력)</FileLabel>
          <FileInput type="file" id="file3" />
        </Styled.LabelAlign>
        <TextArea placeholder="내용을 입력해주세요." />
        <Styled.ColBtn onClick={processSignup}>다음</Styled.ColBtn>
      </AlignBase>
    </BaseScreen>
  );
};

const UploadImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ImgContainer = styled.div`
  position: relative;
  display: block;
  min-width: 150px;
  width: 47.022%;
  border-radius: 10px;
  margin-bottom: 21px;
`;
const UploadedImg = styled.img`
  position: relative;
  display: block;
  min-width: 150px;
  width: 100%;
  border-radius: 10px;
`;
const Delete = styled.div`
  background: url('/image/imageDelete.png') no-repeat 50% 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  top: -4px;
  right: -4px;
`;

export default JoinPro4;
