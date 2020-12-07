import React from 'react';
import styled from 'styled-components';

import Box from '~/components/Box';
import Button from '~/components/Button';
import Text from '~/components/Text';

const ModalContainer = styled(Box)`
  position: absolute;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  background: #fff;
  z-index: 1000;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
`;

const ModalContent = styled.div`
  margin-right: 15px;
  width: 80%;
`;

const Title = styled(Text)`
  font-weight: 700;
`;

const Modal = ({ onClose = () => {}, title = '', text = '' }) => {
  return (
    <ModalContainer p={4}>
      <ModalContent>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      </ModalContent>
      <Button onClick={onClose}>Alles klar, ich bin bereit!</Button>
    </ModalContainer>
  );
};

export default Modal;
