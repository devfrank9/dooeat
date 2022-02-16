import {useCallback, useState} from 'react';
import styled from 'styled-components';

export const SelectTest = () => <Select></Select>;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  border: 1px solid rgb(252, 216, 224);
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('/image/Icon ionic-ios-arrow-up.png') no-repeat 95% 50%;
  box-sizing: border-box;
  background-color: rgb(255, 249, 249);
  color: ${props => props.theme.mainColor};
  font-size: 15px;
  padding-left: 30px;
  font-weight: bold;
  &::-ms-expand {
    display: none;
  }
`;
/* interface Prop {
  items: {id: number; name: string}[];
  value: string;
  onChange: (value: string) => void;
} */

const DropDown = () => {
  const [isActive, setIsActive] = useState(false);
  const [item, setItem] = useState([null]);
  const example = [
    {id: 1, name: '울릉도'},
    {id: 2, name: '동남쪽'},
    {id: 3, name: '뱃길따라'},
    {id: 4, name: '이백리'},
  ];

  const onActiveToggle = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const onSelectItem = useCallback(e => {
    const targetId = e.target.id;
    if (targetId === 'item_name') {
      setItem(e.target.parentElement.innertText);
    } else if (targetId === 'item') {
      setItem(e.target.innertText);
    }
    setIsActive(prev => !prev);
  }, []);

  return (
    <DropdownContainer>
      <DropdownBody onClick={onActiveToggle} isActive={isActive}>
        {item ? (
          <>
            <ItemName>{item}</ItemName>
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
  border: 1px solid rgb(252, 216, 224);
  color: ${prop => prop.theme.mainColor};
  background-color: rgb(255, 249, 249);
  border-radius: ${props => (!props.isActive ? '8px' : `8px 8px 0px 0px`)};
`;

const DropdownSelect = styled.p`
  font-weight: bold;
`;

const DropdownMenu = styled.ul<{isActive: boolean}>`
  display: ${props => (props.isActive ? `block` : `none`)};
  background-color: white;
  position: absolute;
  border: 1px solid rgb(252, 216, 224);
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  border-top: none;
  height: 48px;
  min-width: 319px;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.p`
  font-size: 14px;
  padding-left: 30px;
`;

export default DropDown;
