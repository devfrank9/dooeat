import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {DummySelect} from '../Dummy/Dummy';

interface Prop {
  items?: {name: string; state: string[]}[];
  value?: string;
  onChange?: (value: string) => void;
  location?: string;
}

const DropDown = ({items}: Prop) => {
  /* useEffect(()=>{
    
  },[item,item2]) */
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [item, setItem] = useState('');
  const [item2, setItem2] = useState('');
  const example = items ? items : DummySelect;

  const onActiveToggle = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);
  const onActiveToggle2 = useCallback(() => {
    setIsActive2(prev => !prev);
  }, []);

  const onSelectItem = (e: any) => {
    const targetId = e.target.id;
    if (targetId === 'item_name') {
      setItem(e.target.parentElement.innertText);
    } else if (targetId === 'item') {
      setItem(e.target.innerText);
    }
    setIsActive(prev => !prev);
  };
  const onSelectItem2 = (e: any) => {
    const targetId = e.target.id;
    if (targetId === 'item_name2') {
      setItem2(e.target.parentElement.innertText);
    } else if (targetId === 'item2') {
      setItem2(e.target.innerText);
    }
    setIsActive2(prev => !prev);
  };

  return (
    <>
      <DropdownContainer>
        <DropdownBody onClick={onActiveToggle} isActive={isActive}>
          {item ? (
            <>
              <DropdownSelect>{item}</DropdownSelect>
            </>
          ) : (
            <>
              <DropdownSelect>광역시도</DropdownSelect>
            </>
          )}
        </DropdownBody>
        <DropdownMenu isActive={isActive}>
          {example.map((item, index) => (
            <DropdownItemContainer id="item" key={index} onClick={onSelectItem}>
              <ItemName id="item_name">{item.name}</ItemName>
            </DropdownItemContainer>
          ))}
        </DropdownMenu>
      </DropdownContainer>
      <div style={{height: '12px'}} />
      <DropdownContainer>
        <DropdownBody onClick={onActiveToggle2} isActive={isActive2}>
          {item2 ? (
            <>
              <DropdownSelect>{item2}</DropdownSelect>
            </>
          ) : (
            <>
              <DropdownSelect>시군구</DropdownSelect>
            </>
          )}
        </DropdownBody>
        <DropdownMenu isActive={isActive2}>
          {example.map((item, index) => (
            <DropdownItemContainer
              id="item2"
              key={index}
              onClick={onSelectItem2}
            >
              <ItemName id="item_name2">{item.state}</ItemName>
            </DropdownItemContainer>
          ))}
        </DropdownMenu>
      </DropdownContainer>
    </>
  );
};
export const Select = styled.select`
  width: 100%;
  height: 48px;
  border: 1px solid ${props => props.theme.pointColor2};
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon ionic-ios-arrow-up.png') no-repeat 95% 50%;
  box-sizing: border-box;
  background-color: ${props => props.theme.pointColor3};
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  padding-left: 30px;
  font-weight: bold;
  &::-ms-expand {
    display: none;
  }
`;
const DropdownContainer = styled.div`
  width: 100%;
  max-width: 480px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
const DropdownBody = styled.div<{isActive: boolean}>`
  background: url('/image/Icon ionic-ios-arrow-up.png') no-repeat 95% 50%;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 30px;
  border: 1px solid ${props => props.theme.pointColor2};
  color: ${prop => prop.theme.mainColor};
  background-color: ${props => props.theme.pointColor3};
  border-radius: ${props => (!props.isActive ? '8px' : `8px 8px 0px 0px`)};
`;
const DropdownSelect = styled.p`
  font-weight: bold;
`;
const DropdownMenu = styled.ul<{isActive: boolean}>`
  display: ${props => (props.isActive ? `block` : `none`)};
  position: absolute;
  border: 1px solid ${props => props.theme.pointColor2};
  border-radius: 0 0 8px 8px;
  width: 50%;
  z-index: 3;
  top: 48px;
  max-width: 480px;
  width: 100%;
`;
const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.btnColor1};
  border-top: none;
  height: 48px;
  max-width: 480px;
  width: 100%;
  &:last-child {
    border-bottom: none;
  }
  background-color: white;
`;
const ItemName = styled.p`
  font-size: 14px;
  padding-left: 30px;
`;
export default DropDown;
