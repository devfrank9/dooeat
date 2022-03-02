import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {RequestSetMember} from '../lib/GQL/GQLInterfaces';

const ProfileImgUp = () => {
  const [signup, setSignup] = useState<RequestSetMember>({});
  const [preview, setPreview] = useState(undefined);

  return (
    <PicAlign>
      <input
        type="file"
        id="fileinput"
        onChange={e => {
          let FR = new FileReader();
          FR.addEventListener('load', () => {
            // @ts-ignore
            setSignup({
              ...signup,
              mb_img: FR.result as string,
            });
          });
          // @ts-ignore
          setPreview(FR.readAsDataURL(e.target.files[0]));
        }}
      />
      {preview !== undefined ? (
        <img src={preview} alt="" />
      ) : (
        <label htmlFor="fileinput" />
      )}
    </PicAlign>
  );
};

const PicAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${props => props.theme.btnColor1};
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: url('/image/Icon feather-plus.png') no-repeat 50% 50%;
  }
  img {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }
`;

export default ProfileImgUp;
