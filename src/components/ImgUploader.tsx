import {useState} from 'react';
import styled from 'styled-components';

const ImgUploader = () => {
  /* const [fileUrl, setFileUrl] = useState([]);

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
  }; */

  return (
    <>
      {/* <FileLabel htmlFor="file1">전문 자격증</FileLabel>
    <FileInput
      type="file"
      id="file1"
      onChange={e => {
        processImage(e);
      }}
      accept="image/*,image/*"
      multiple
    />
    <UploadImgContainer>
      {fileUrl.map((image: any, id: any) => (
        <div key={id} style={{position: 'relative'}}>
          <UploadedImg src={image} alt={`${image}-${id}`} />
          <Delete onClick={() => handleDeleteImage(id)} />
        </div>
      ))}
    </UploadImgContainer> */}
    </>
  );
};
/* 
const UploadImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const UploadedImg = styled.img`
  display: block;
  min-width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 21px;
`;
const Delete = styled.div`
  background: url('/image/imageDelete.png') no-repeat 50% 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  top: -4px;
  right: -4px;
`;
 */
export default ImgUploader;
