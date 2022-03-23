import {useCallback, useState} from 'react';
import styled from 'styled-components';
import {ColoredBtn} from '../../../styles/BtnStyled';
import ModalLayout from '../ModalLayout';

interface KindRegiModalProps {
  toggleModal: () => void;
  selected?: number;
  headerText?: string;
}

const KindRegiModal = ({toggleModal, selected}: KindRegiModalProps) => {
  const [legExer, setLegExer] = useState([
    {
      id: 1,
      content: '스쿼트',
      active: false,
    },
    {
      id: 2,
      content: '런지',
      active: false,
    },
    {
      id: 3,
      content: '백 익스텐션',
      active: false,
    },
    {
      id: 4,
      content: '레그 컬',
      active: false,
    },
  ]);

  const onToggleStar = useCallback(
    (id: number) => {
      setLegExer(
        legExer.map(star =>
          star.id === id ? {...star, active: !star.active} : star,
        ),
      );
    },
    [legExer],
  );

  return (
    <ModalLayout toggleModal={toggleModal} headerText={'운동 종류 등록'}>
      {legExer.map(item => (
        <>
          <CheckInput key={item.id}>
            <div>
              <input type="checkbox" id={item.id as unknown as string} />
              <label htmlFor={item.id as unknown as string} />
            </div>
            <div>
              <p>{item.content}</p>
            </div>
            <div>
              <StarBtn
                onClick={() => onToggleStar(item.id)}
                isActive={item.active === false ? false : true}
              />
            </div>
          </CheckInput>
        </>
      ))}
      <ColoredBtn>선택하기</ColoredBtn>
    </ModalLayout>
  );
};

const StarBtn = styled.button<{isActive?: boolean}>`
  background: ${prop =>
      prop.isActive === false
        ? `url('/image/unIcon ionic-ios-star.png')`
        : `url('/image/Icon ionic-ios-star.png')`}
    no-repeat 50% 50%;
  width: 23px;
  height: 21.4px;
  border: none;
  background-color: inherit;
`;
const CheckInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  div:first-child {
    position: absolute;
    left: 0;
  }
  div:nth-child(2) {
    position: absolute;
    left: 36px;
  }
  div:nth-child(3) {
    position: absolute;
    right: 0;
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
    border: 1px solid ${prop => prop.theme.btnColor2};
    border-radius: 4px;
    position: relative;
    margin-right: 11.8px;
  }
  input:checked + label::after {
    content: url('/image/Icon feather-check_pink.png');
    font-size: 15px;
    width: 23px;
    height: 16px;
    text-align: center;
    position: absolute;
    left: 7px;
    bottom: 10px;
  }
`;

export default KindRegiModal;
