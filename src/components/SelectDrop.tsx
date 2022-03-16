import {useCallback, useState} from 'react';
import styled from 'styled-components';
import {DateSelect} from '../Dummy/Dummy';

interface Prop {
  items?: {id: number; name: string[]}[];
  value?: string;
  onChange?: (value: string) => void;
}

const SelectDrop = ({items}: Prop) => {
  const [isActive, setIsActive] = useState(false);
  const [item, setItem] = useState('');
  const example = items ? items : DateSelect;

  const onActiveToggle = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);
  const onSelectItem = (e: any) => {
    const targetId = e.target.id;
    let inner = e.target.parentElement.innertText;
    let inner2 = e.target.innerText;
    if (targetId === 'item_name') {
      setItem(inner);
    } else if (targetId === 'item') {
      setItem(inner2);
    }
    setIsActive(prev => !prev);
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
              <DropdownSelect>1일</DropdownSelect>
            </>
          )}
        </DropdownBody>
        <DropdownMenu isActive={isActive}>
          {example.map(item => (
            <DropdownItemContainer
              id="item"
              key={item.id}
              onClick={onSelectItem}
            >
              <ItemName id="item_name">{item.name}</ItemName>
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

export default SelectDrop;
