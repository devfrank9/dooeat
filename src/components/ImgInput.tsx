import {CustomFile} from '../lib/Hook/useImgInput';
import React, {RefObject} from 'react';
import styled from 'styled-components';
import {FileRectengle} from '../styles/FileInputStyled';

export interface IFileInput {
  name: string;
  attributes?: Record<string, unknown>;
  multiple?: boolean;
  hidden?: boolean;
  imgFiles: CustomFile;
  preview?: string[];
  isError: boolean;
  fileRef: RefObject<HTMLInputElement>;
  handleClickOnFileInput: () => void;
  handleUploadFile: (
    e: React.ChangeEvent<HTMLInputElement>,
    additional?: number,
  ) => void;
  removeSeletedPreview: (e: React.MouseEvent, selected: string) => void;
  removePreview?: (e: React.MouseEvent, selected: string) => void;
}

const ImgInput = ({
  name,
  fileRef,
  attributes,
  hidden,
  imgFiles,
  preview,
  isError,
  handleClickOnFileInput,
  handleUploadFile,
  removeSeletedPreview,
  removePreview,
}: IFileInput) => {
  const initInputValue = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    target.value = '';
  };

  return (
    <FileAlign>
      {Object.keys(imgFiles).length === 0
        ? [...Array(2)].map(item => (
            <FileRectengle htmlFor="file1" onClick={handleClickOnFileInput}>
              <input
                style={{display: 'none'}}
                accept="image/*"
                ref={fileRef}
                type="file"
                hidden={hidden}
                name={name}
                onClick={e => initInputValue(e)}
                onChange={e => handleUploadFile(e, preview?.length ?? 0)}
              />
            </FileRectengle>
          ))
        : (!!preview?.length || !!Object.keys(imgFiles).length) && (
            <>
              {preview?.map(preview => (
                <ImgContainer key={preview}>
                  {/* {data.wr_5 === undefined ? <></> : <div>{data.wr_5}</div>} */}
                  <UploadedImg src={preview} alt="미리보기 이미지" />
                  <Delete
                    onClick={e => !!removePreview && removePreview(e, preview)}
                  />
                </ImgContainer>
              ))}
              {Object.entries(imgFiles).map(files => {
                const [hash, file] = files;
                return (
                  <ImgContainer key={hash}>
                    {/* {data.wr_5 === undefined ? <></> : <div>{data.wr_5}</div>} */}
                    <UploadedImg
                      src={URL.createObjectURL(file)}
                      alt="미리보기 이미지"
                    />
                    <Delete onClick={e => removeSeletedPreview(e, hash)} />
                  </ImgContainer>
                );
              })}
              {Object.keys(imgFiles).length === 2 ? (
                <></>
              ) : (
                <FileRectengle htmlFor="file1" onClick={handleClickOnFileInput}>
                  <input
                    style={{display: 'none'}}
                    accept="image/*"
                    ref={fileRef}
                    type="file"
                    hidden={hidden}
                    name={name}
                    onClick={e => initInputValue(e)}
                    onChange={e => handleUploadFile(e, preview?.length ?? 0)}
                  />
                </FileRectengle>
              )}
            </>
          )}
    </FileAlign>
  );
};

const ImgContainer = styled.div`
  position: relative;
  display: block;
  border-radius: 10px;
  margin-bottom: 21px;
  width: 150px;
  div:first-child {
    position: absolute;
    width: 68px;
    height: 32px;
    border-radius: 16px;
    background-color: rgb(51, 51, 51, 0.6);
    left: 12px;
    top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => prop.theme.fontColor3};
    font-size: 15px;
    font-weight: 300;
    z-index: 3;
  }
`;
const UploadedImg = styled.img`
  position: relative;
  display: block;
  width: 150px;
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
const FileAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ImgInput;
