/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React, { useState } from 'react';

import {
  OuiPinnableListGroup,
  OuiPinnableListGroupItemProps,
} from '../../../../src/components/list_group';

const someListItems: OuiPinnableListGroupItemProps[] = [
  {
    id: '1',
    label: 'Label with iconType',
    iconType: 'stop',
    pinned: false,
  },
  {
    id: '2',
    label: 'Pinned button with onClick',
    pinned: true,
    onClick: () => {},
  },
  {
    label: 'Link with href and custom pin titles',
    href: '/#',
    pinned: false,
  },
  {
    id: '3',
    label: 'Active link',
    isActive: true,
    href: '/#',
    pinned: false,
  },
  {
    id: '4',
    label: 'Custom extra actions will override pinning ability',
    extraAction: {
      iconType: 'bell',
      alwaysShow: true,
      'aria-label': 'bell',
    },
  },
  {
    id: '5',
    label: 'Item with pinnability turned off',
    pinnable: false,
  },
];

export default () => {
  const [itemList, setItemList] = useState<OuiPinnableListGroupItemProps[]>(
    someListItems
  );

  return (
    <>
      <OuiPinnableListGroup
        listItems={itemList}
        onPinClick={(selectedItem) => {
          if (selectedItem.hasOwnProperty('pinned')) {
            const newItemList = itemList.map((item) => {
              if (item.id === selectedItem.id) {
                return {
                  ...item,
                  pinned: !item.pinned,
                };
              } else {
                return item;
              }
            });

            setItemList(newItemList);
          }
        }}
        maxWidth="none"
        pinTitle={(item: OuiPinnableListGroupItemProps) => `Pin ${item.label}`}
        unpinTitle={(item: OuiPinnableListGroupItemProps) =>
          `Unpin ${item.label}`
        }
      />
    </>
  );
};
