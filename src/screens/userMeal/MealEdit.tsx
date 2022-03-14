import {useParams} from 'react-router-dom';
import BaseScreen, {AlignBase} from '../BaseScreen';

const MealEdit = () => {
  const {wr_id} = useParams();
  return (
    <BaseScreen>
      <AlignBase></AlignBase>
    </BaseScreen>
  );
};

export default MealEdit;
