import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {DummySelect} from '../lib/Dummys';

export const SelectTest = () => <Select></Select>;

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
interface Prop {
  items?: {id: number; name: string}[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const DropDown = ({
  items,
  value,
  onChange,
  placeholder = '선택해주세요',
}: Prop) => {
  const [isActive, setIsActive] = useState(false);
  const [item, setItem] = useState('');
  const example = items ? items : DummySelect;

  const onActiveToggle = useCallback(() => {
    setIsActive(prev => !prev);
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

  return (
    <DropdownContainer>
      <DropdownBody onClick={onActiveToggle} isActive={isActive}>
        {item ? (
          <>
            <DropdownSelect>{item}</DropdownSelect>
          </>
        ) : (
          <>
            <DropdownSelect>선택해주세요.</DropdownSelect>
          </>
        )}
      </DropdownBody>
      <DropdownMenu isActive={isActive}>
        {example.map(item => (
          <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
            <ItemName id="item_name">{item.name}</ItemName>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const DropdownBody = styled.div<{isActive: boolean}>`
  background: url('/image/Icon ionic-ios-arrow-up.png') no-repeat 95% 50%;
  display: flex;
  justify-content: space-between;
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
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.btnColor1};
  border-top: none;
  height: 48px;
  max-width: 480px;
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
