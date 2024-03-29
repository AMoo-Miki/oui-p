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

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ReactWrapper } from 'enzyme';
import { Component } from 'react';

interface TakeMountedSnapshotOptions {
  hasArrayOutput?: boolean;
}

/**
 * Use this function to generate a Jest snapshot of components that have been fully rendered
 * using Enzyme's `mount` method. Typically, a mounted component will result in a snapshot
 * containing both React components and HTML elements. This function removes the React components,
 * leaving only HTML elements in the snapshot.
 */
export const takeMountedSnapshot = (
  mountedComponent: ReactWrapper<any, {}, Component>,
  options: TakeMountedSnapshotOptions = {}
) => {
  const opts: TakeMountedSnapshotOptions = {
    hasArrayOutput: false,
    ...options,
  };
  const html = mountedComponent.html();
  const template = document.createElement('template');
  template.innerHTML = html;
  const snapshot = template.content.firstChild;
  if (opts.hasArrayOutput) {
    const snapshotArray: ChildNode[] = [];
    template.content.childNodes.forEach((el) => {
      snapshotArray.push(el);
    });
    return snapshotArray;
  }
  return snapshot;
};
