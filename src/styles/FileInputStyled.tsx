import styled from 'styled-components';
import {useState} from 'react';

interface Prop {
  file?: string;
}

const ImgUpload = () => {
  const [files, setFiles] = useState('');
  const saveFile = (e: any) => {
    setFiles(URL.createObjectURL(e.target.files[0]));
  };
  const deleteFile = (e: any) => {
    URL.revokeObjectURL(files);
    setFiles('');
  };

  return (
    <>
      <FileLabel htmlFor="file1" />
      <FileInput type="file" id="file1" accept="image/*" onChange={saveFile} />
      {files && (
        <img
          alt="sample"
          src={files}
          style={{margin: '0 auto', width: '150px', height: '150px'}}
        />
      )}
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
  display: block;
  min-width: 150px;
  width: 47.022%;
  padding-bottom: 47.022%;
  border: 1px solid ${props => props.theme.btnColor2};
  border-radius: 10px;
  background: url('/image/IIcon feather-plus-circle.png') no-repeat 50% 50%;
`;

export default ImgUpload;
