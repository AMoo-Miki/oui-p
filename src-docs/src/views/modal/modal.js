import React, { useState } from 'react';

import {
  OuiButton,
  OuiModal,
  OuiModalBody,
  OuiModalFooter,
  OuiModalHeader,
  OuiModalHeaderTitle,
  OuiCodeBlock,
} from '../../../../src/components';
import { OuiSpacer } from '../../../../src/components/spacer';

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  let modal;

  if (isModalVisible) {
    modal = (
      <OuiModal onClose={closeModal}>
        <OuiModalHeader>
          <OuiModalHeaderTitle>
            <h1>Modal title</h1>
          </OuiModalHeaderTitle>
        </OuiModalHeader>

        <OuiModalBody>
          This modal has the following setup:
          <OuiSpacer />
          <OuiCodeBlock language="html" isCopyable>
            {`<OuiModal onClose={closeModal}>
  <OuiModalHeader>
    <OuiModalHeaderTitle><h1><!-- Modal title --></h1></OuiModalHeaderTitle>
  </OuiModalHeader>

  <OuiModalBody>
    <!-- Modal body -->
  </OuiModalBody>

  <OuiModalFooter>
    <OuiButton onClick={closeModal} fill>
      Close
    </OuiButton>
  </OuiModalFooter>
</OuiModal>`}
          </OuiCodeBlock>
        </OuiModalBody>

        <OuiModalFooter>
          <OuiButton onClick={closeModal} fill>
            Close
          </OuiButton>
        </OuiModalFooter>
      </OuiModal>
    );
  }

  return (
    <div>
      <OuiButton onClick={showModal}>Show modal</OuiButton>
      {modal}
    </div>
  );
};
