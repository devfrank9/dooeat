import {
  Common,
  InputCommonShort,
  InputCheckNone,
  InputCheckOk,
  InputCheckErr,
  InputContent,
} from '../components/InputStyled';
import BaseScreen from './BaseScreen';

import {
  BtnShort,
  BtnMiddle,
  BtnLong,
  BtnLongLine,
  BtnMain,
  BtnMain2,
  BtnMain3,
} from '../components/BtnStyled';

import {SelectTest} from '../components/SelectStyled';

const CompTest = () => {
  return (
    <BaseScreen>
      <Common placeholder="hidasdfsf" />
      <InputCommonShort />
      <InputCheckNone />
      <InputCheckOk />
      <InputCheckErr />
      <InputContent />
      <BtnShort>hihi</BtnShort>
      <BtnMiddle>hihi</BtnMiddle>
      <BtnLong>hihi</BtnLong>
      <BtnLongLine>hihi</BtnLongLine>
      <BtnMain>btn 넘김</BtnMain>
      <BtnMain2>btn 넘김</BtnMain2>
      <BtnMain3>btn 넘김</BtnMain3>
      <SelectTest></SelectTest>
    </BaseScreen>
  );
};

export default CompTest;
