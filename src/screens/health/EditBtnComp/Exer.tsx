import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';
import {ColoredBtn, LongBtn, MiddleBtn} from '../../../styles/BtnStyled';
import {Common} from '../../../styles/InputStyled';
import ExerKindRegi from './ExerKindRegi';

interface Prop {
  exers: {
    id: number;
    content: string;
    active: boolean;
  }[];
  exersDetail: {
    id: number;
    content: string;
    active: boolean;
  }[];
  onToggleExers: (id: number) => void;
  onToggleDetail: (id: number) => void;
}

const Exer = ({exers, exersDetail, onToggleExers, onToggleDetail}: Prop) => {
  const [select, setSelect] = useState<string[]>([]);
  const [renderList, setRenderList] = useState<ReactNode[]>([]);
  const [pass, setPass] = useState(false);

  const clickEvent = (value: string) => {
    !select.includes(value)
      ? setSelect(select => [...select, value])
      : setSelect(select.filter(button => button !== value));
    let thisArray = [...renderList];
    console.log(renderList);
    thisArray.push(select);
    setRenderList(thisArray);
  };

  return (
    <>
      <Subject>운동 종류</Subject>
      <BtnAlign>
        {exers.map(item => {
          return (
            <LongBtn
              key={item.id}
              isActive={item.active === false ? false : true}
              onClick={e => {
                onToggleExers(item.id);
                setPass(item.active === false ? true : false);
              }}
            >
              {item.content}
            </LongBtn>
          );
        })}
      </BtnAlign>
      {exers[2].active === true ? (
        <Common placeholder="기타 운동 이름을 작성해주세요." />
      ) : (
        <></>
      )}
      <Space30 />
      {pass === false ? (
        <Subject>운동 종류를 먼저 선택해주세요</Subject>
      ) : (
        <Subject>운동 부위</Subject>
      )}
      <BtnAlign>
        {pass === false
          ? exersDetail.map(item => {
              return (
                <MiddleBtn
                  key={item.id}
                  style={{backgroundColor: 'white', color: 'black'}}
                  disabled
                >
                  {item.content}
                </MiddleBtn>
              );
            })
          : exersDetail.map(item => {
              return (
                <MiddleBtn
                  key={item.id}
                  isActive={item.active === false ? false : true}
                  onClick={() => {
                    onToggleDetail(item.id);
                    clickEvent(item.content);
                  }}
                >
                  {item.content}
                </MiddleBtn>
              );
            })}
      </BtnAlign>
      <ExerKindRegi renderList={renderList} />
      <div>
        <CheckInput>
          <input type="checkbox" id="check3" />
          <label htmlFor="check3" />
          <p>운동 기록을 내 전문가와 공유</p>
        </CheckInput>
      </div>
      <ColoredBtn style={{width: '100%'}}>기록하기</ColoredBtn>
    </>
  );
};

const Space30 = styled.div`
  height: 30px;
`;
const CheckInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    margin-top: 50px;
  }
  &:last-child {
    margin-bottom: 29px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  input {
    display: none;
  }
  input + label {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid rgb(223, 223, 223);
    position: relative;
    margin-right: 16px;
  }
  input:checked + label::after {
    content: '✔';
    font-size: 15px;
    width: 24px;
    height: 24px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
const BtnAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  button {
    margin-bottom: 8px;
  }
`;
const Subject = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export default Exer;
