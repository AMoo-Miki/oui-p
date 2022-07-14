import React, { useState } from 'react';
import {
  OuiButton,
  OuiDragDropContext,
  OuiDraggable,
  OuiDroppable,
  ouiDragDropReorder,
} from '../../../../src/components';
import { htmlIdGenerator } from '../../../../src/services';

const makeId = htmlIdGenerator();

const makeList = (number, start = 1) =>
  Array.from({ length: number }, (v, k) => k + start).map((el) => {
    return {
      content: `Item ${el}`,
      id: makeId(),
    };
  });

export default () => {
  const [list, setList] = useState(makeList(3));
  const onDragEnd = ({ source, destination }) => {
    if (source && destination) {
      const items = ouiDragDropReorder(list, source.index, destination.index);

      setList(items);
    }
  };
  return (
    <OuiDragDropContext onDragEnd={onDragEnd}>
      <OuiDroppable
        droppableId="DROPPABLE_AREA"
        spacing="m"
        withPanel
        grow={false}>
        {list.map(({ content, id }, idx) => (
          <OuiDraggable
            spacing="m"
            key={id}
            index={idx}
            draggableId={id}
            disableInteractiveElementBlocking>
            <OuiButton fullWidth onClick={() => {}}>
              {content}
            </OuiButton>
          </OuiDraggable>
        ))}
      </OuiDroppable>
    </OuiDragDropContext>
  );
};
