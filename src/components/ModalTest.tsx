import React from 'react';
import ModalFrame from './Modal';

interface Prop {
  handleModal: () => void;
}

const ProjectModal = ({handleModal}: Prop) => {
  return (
    <ModalFrame handleModal={handleModal}>
      <h1>프로젝트 내용</h1>
    </ModalFrame>
  );
};

export default ProjectModal;
