import styled from 'styled-components';
import {useState} from 'react';
import axios from 'axios';

interface config {
  Headers: string;
}

const ImgUpload = () => {
  const [files, setFiles] = useState('');

  const onLoadFile = (event: {target: {files: any}}) => {
    const file = event.target.files;
    const formdata = new FormData();
    formdata.append('uploadImage', files[0]);
    console.log(file);
    setFiles(file);
    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
  };

  return (
    <>
      <FileLabel htmlFor="file1"></FileLabel>
      <FileInput type="file" id="file1" accept="img/*" onChange={onLoadFile} />
      <div className="img__box"></div>
    </>
  );
};

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 48px;
  border: 0.1rem solid ${props => props.theme.pointColor2};
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon feather-plus-circle.png') no-repeat 93% 50%;
  box-sizing: border-box;
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  font-weight: 500;
`;
export const FileInput = styled.input`
  display: none;
`;
export const FileRectengle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
`;

export default ImgUpload;
