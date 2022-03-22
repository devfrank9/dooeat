import React, {ReactNode, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {ColoredBtn, LongBtn, MiddleBtn} from '../../../styles/BtnStyled';
import {Common} from '../../../styles/InputStyled';

const Excer = () => {
  const [main, setMain] = useState(false);
  const [main2, setMain2] = useState(false);
  const [main3, setMain3] = useState(false);
  const [select, setSelect] = useState<string[]>([]);

  const [renderList, setRenderList] = useState<ReactNode[]>([]);
  const [detailList, setDetailList] = useState<ReactNode[]>([]);
  const nextId = useRef(0);

  useEffect(() => {}, []);

  const handleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (main === true) {
      setMain2(false);
      setMain3(false);
    }
    if (main2 === true) {
      setMain(false);
      setMain3(false);
    }
    if (main3 === true) {
      setMain(false);
      setMain2(false);
    }
  };

  const clickEvent = (value: string) => {
    const btn = {
      id: nextId.current,
      content: '',
      checked: false,
    };
    setRenderList(renderList.concat(btn));
    nextId.current += 1;
  };

  /*   const clickEvent = (value: string) => {
    !select.includes(value)
      ? setSelect(select => [...select, value])
      : setSelect(select.filter(button => button !== value));
    let thisArray = [...renderList];
    thisArray.push(select);
    setRenderList(thisArray);
  }; */
  const renderExSubject = () => {
    if (main === true) {
      console.log(renderList);
      return renderList.map((item, index) => (
        <div key={'EE' + index}>
          <Subject>{item} 운동</Subject>
          <ExcerAlign>
            <ExcerKindBtn onClick={() => renderDetailEx}>
              운동 종류 등록
            </ExcerKindBtn>
            <ExcerKindBtn>이전 기록 불러오기</ExcerKindBtn>
          </ExcerAlign>
        </div>
      ));
    }
  };

  const exerDetailClickEvent = () => {};

  const renderDetailEx = () => {
    return (
      <>
        <Input value="런지" />
        <div style={{height: '30px'}} />
        <ExInputAlign>
          <ExInput>
            <Subject>무게</Subject>
            <input type="text" />
            <label htmlFor="">kg</label>
          </ExInput>
          <ExInput>
            <Subject>갯수</Subject>
            <input type="text" />
            <label htmlFor="">회</label>
          </ExInput>
        </ExInputAlign>
        <div style={{height: '30px'}} />
        <Subject>세트</Subject>
        <div
          style={{
            position: 'relative',
            borderBottom: '1px solid rgb(233,233,233',
          }}
        >
          <Label>set</Label>
          <Input2 />
          <div style={{height: '50px'}} />
        </div>
      </>
    );
  };

  return (
    <>
      <Subject>운동 종류</Subject>
      <BtnAlign>
        <LongBtn
          isActive={main === false ? false : true}
          onClick={e => {
            setMain(prev => !prev);
            handleBtn(e);
          }}
        >
          헬스
        </LongBtn>
        <LongBtn
          isActive={main2 === false ? false : true}
          onClick={e => {
            setMain2(prev => !prev);
            handleBtn(e);
          }}
        >
          홈트
        </LongBtn>
        <LongBtn
          isActive={main3 === false ? false : true}
          onClick={e => {
            setMain3(prev => !prev);
            handleBtn(e);
          }}
        >
          기타
        </LongBtn>
      </BtnAlign>
      <div style={{height: '30px'}} />
      <Subject>운동 부위</Subject>
      <BtnAlign>
        <MiddleBtn
          onClick={() => clickEvent('가슴')}
          isActive={select.includes('가슴') ? true : false}
        >
          가슴
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('어깨')}
          isActive={select.includes('어깨') ? true : false}
        >
          어깨
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('팔')}
          isActive={select.includes('팔') ? true : false}
        >
          팔
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('등')}
          isActive={select.includes('등') ? true : false}
        >
          등
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('하체')}
          isActive={select.includes('하체') ? true : false}
        >
          하체
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('전신')}
          isActive={select.includes('전신') ? true : false}
        >
          전신
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('유산소')}
          isActive={select.includes('유산소') ? true : false}
        >
          유산소
        </MiddleBtn>
        <MiddleBtn
          onClick={() => clickEvent('스트레칭')}
          isActive={select.includes('스트레칭') ? true : false}
        >
          스트레칭
        </MiddleBtn>
      </BtnAlign>
      <div style={{height: '30px'}} />
      {renderExSubject()}

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
const ExInputAlign = styled.div`
  display: flex;
  justify-content: flex-between;
  width: 100%;
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
const Label = styled.label`
  position: absolute;
  top: 15px;
  right: 31px;
  font-size: 15px;
  font-weight: 500;
  color: ${prop => prop.theme.mainColor};
  font-family: ${prop => prop.theme.roboto};
`;
const Input2 = styled(Common)`
  padding-left: 30px;
`;
const ExInput = styled.div`
  position: relative;
  input {
    border: 1px solid rgb(223, 223, 223);
    width: 100px;
    height: 52px;
    text-align: center;
    font-size: 16px;
  }
  label {
    position: absolute;
    color: ${prop => prop.theme.mainColor};
    bottom: 5px;
    right: -24px;
  }
  margin-right: 50px;
`;
const Input = styled(Common)`
  padding-left: 30px;
  background: url('/image/Icon ionic-ios-close-circle-outline1.png') no-repeat
    95% 50%;
  box-sizing: border-box;
`;
const ExcerAlign = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const ExcerKindBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${prop => prop.theme.pointColor3};
  min-width: 156px;
  width: 48.902%;
  min-height: 48px;
  font-size: 15px;
  color: ${prop => prop.theme.mainColor};
  border-radius: 8px;
  border: 0.1px solid ${prop => prop.theme.pointColor1};
  font-weight: 500;
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

export default Excer;
