import {useCallback, useState} from 'react';
import styled from 'styled-components';
import {ColoredBtn} from '../../../styles/BtnStyled';
import ModalLayout from '../ModalLayout';
import {
  Arm,
  Back,
  Body,
  Chest,
  IExKindSelect,
  Leg,
  Running,
  Shoulder,
  Stretch,
} from '../../../components/Modal/HealthModal/HealthKindList';

interface KindRegiModalProps {
  toggleModal: () => void;
  selected?: number;
  headerText?: string;
  progressOk?: boolean;
}

const KindRegiModal = ({
  toggleModal,
  selected,
  progressOk,
}: KindRegiModalProps) => {
  const [legExer, setLegExer] = useState<IExKindSelect>(Leg);
  const [chestExer, setChestExer] = useState<IExKindSelect>(Chest);
  const [shoulderExer, setShoulderExer] = useState<IExKindSelect>(Shoulder);
  const [armExer, setArmExer] = useState<IExKindSelect>(Arm);
  const [backExer, setBackExer] = useState<IExKindSelect>(Back);
  const [bodyExer, setBodyExer] = useState<IExKindSelect>(Body);
  const [runningExer, setRunningExer] = useState<IExKindSelect>(Running);
  const [stretchExer, setStretchExer] = useState<IExKindSelect>(Stretch);

  const onToggleStar = useCallback(
    (id: number) => {
      console.log(legExer);
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
      ))}
      <ColoredBtn>선택하기</ColoredBtn>
      <div />
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
  height: 21.4px;
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
