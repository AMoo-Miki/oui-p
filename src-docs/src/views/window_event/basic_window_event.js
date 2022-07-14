import React from 'react';

import {
  OuiModal,
  OuiModalBody,
  OuiModalHeader,
  OuiModalHeaderTitle,
} from '../../../../src/components';

import { ModalExample } from './modal_example_container';

const BasicModal = ({ onClose }) => (
  <OuiModal onClose={onClose} style={{ width: '800px' }}>
    <OuiModalHeader>
      <OuiModalHeaderTitle>
        <h1>Example modal</h1>
      </OuiModalHeaderTitle>
    </OuiModalHeader>
    <OuiModalBody>
      <p>
        This modal closes when you press ESC, using a window event listener.
      </p>
    </OuiModalBody>
  </OuiModal>
);

export const BasicWindowEvent = () => <ModalExample modal={BasicModal} />;
