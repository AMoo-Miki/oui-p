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

import React, { ReactChild } from 'react';
import { mount } from 'enzyme';
import { OuiContext } from '../context';
import { OuiI18n, useOuiI18n } from './i18n';

/* eslint-disable local/i18n */

describe('OuiI18n', () => {
  describe('default rendering', () => {
    describe('rendering to dom', () => {
      it('renders a basic string to the dom', () => {
        const component = mount(
          <OuiI18n token="test" default="This is a basic string." />
        );
        expect(component).toMatchSnapshot();
      });

      it('renders a string with placeholders to the dom', () => {
        const component = mount(
          <OuiI18n
            token="test"
            default="This is a {type} with {special}."
            values={{ type: 'string', special: 'values' }}
          />
        );
        expect(component).toMatchSnapshot();
      });

      it('calls a function and renders the result to the dom', () => {
        const values = { type: 'callback', special: 'values' };
        const renderCallback = jest.fn(
          ({ type, special }) => `This is a ${type} with ${special}.`
        );
        const component = mount(
          <OuiI18n token="test" default={renderCallback} values={values} />
        );
        expect(component).toMatchSnapshot();

        expect(renderCallback).toHaveBeenCalledWith(values);
      });

      it('renders when value is null', () => {
        const component = mount(
          <OuiI18n token="test" default="{arg}" values={{ arg: null }} />
        );
        expect(component).toMatchSnapshot();
      });
    });

    describe('render prop with single token', () => {
      it('renders render prop result to the dom', () => {
        const component = mount(
          <OuiI18n token="test" default="This is a basic string.">
            {(result: ReactChild) => `A nifty thing: ${result}`}
          </OuiI18n>
        );
        expect(component).toMatchSnapshot();
      });

      it('renders render prop result with placeholders to the dom', () => {
        const component = mount(
          <OuiI18n
            token="test"
            default="This is a {type} with {special}."
            values={{ type: 'string', special: 'values' }}>
            {(result: ReactChild) => `Here's something cool: ${result}`}
          </OuiI18n>
        );
        expect(component).toMatchSnapshot();
      });

      it('calls a function and renders render prop result to the dom', () => {
        const values = { type: 'callback', special: 'values' };
        const renderCallback = jest.fn(
          ({ type, special }) => `This is a ${type} with ${special}.`
        );
        const component = mount(
          <OuiI18n token="test" default={renderCallback} values={values}>
            {(result: string) => `Here's something neat: ${result}`}
          </OuiI18n>
        );
        expect(component).toMatchSnapshot();

        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });

    describe('render prop with multiple tokens', () => {
      it('renders render prop result to the dom', () => {
        const component = mount(
          <OuiI18n
            tokens={['test1', 'test2']}
            defaults={[
              'This is the first basic string.',
              'This is the second basic string.',
            ]}>
            {([one, two]: ReactChild[]) => (
              <div>
                {one} {two}
              </div>
            )}
          </OuiI18n>
        );
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('reading values from context', () => {
    describe('rendering to dom', () => {
      it('renders a mapped basic string to the dom', () => {
        const component = mount(
          <OuiContext i18n={{ mapping: { test: 'An overridden string.' } }}>
            <OuiI18n token="test" default="This is a basic string." />
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });

      it('renders a mapped string with placeholders to the dom', () => {
        const component = mount(
          <OuiContext
            i18n={{
              mapping: { test: 'An overridden {type} with {special}.' },
            }}>
            <OuiI18n
              token="test"
              default="This is a {type} with {special}."
              values={{ type: 'string', special: 'values' }}
            />
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });

      it('calls a mapped function and renders the result to the dom', () => {
        const values = { type: 'callback', special: 'values' };
        const renderCallback = jest.fn(
          ({ type, special }) => `This is a mapped ${type} with ${special}.`
        );
        const component = mount(
          <OuiContext i18n={{ mapping: { test: renderCallback } }}>
            <OuiI18n token="test" default={() => ''} values={values} />
          </OuiContext>
        );
        expect(component).toMatchSnapshot();

        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });

    describe('render prop with single token', () => {
      it('renders mapped render prop result to the dom', () => {
        const component = mount(
          <OuiContext i18n={{ mapping: { test: 'An overridden string.' } }}>
            <OuiI18n token="test" default="This is a basic string.">
              {(result: ReactChild) => `A nifty thing: ${result}`}
            </OuiI18n>
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });

      it('renders mapped render prop result with placeholders to the dom', () => {
        const component = mount(
          <OuiContext
            i18n={{
              mapping: { test: 'An overridden {type} with {special}.' },
            }}>
            <OuiI18n
              token="test"
              default="This is a {type} with {special}."
              values={{ type: 'string', special: 'values' }}>
              {(result: ReactChild) => `Here's something cool: ${result}`}
            </OuiI18n>
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });

      it('calls a mapped function and renders render prop result to the dom', () => {
        const values = { type: 'callback', special: 'values' };
        const renderCallback = jest.fn(
          ({ type, special }) => `This is a ${type} with ${special}.`
        );
        const component = mount(
          <OuiContext i18n={{ mapping: { test: renderCallback } }}>
            <OuiI18n token="test" default={renderCallback} values={values}>
              {(result: ReactChild) => `Here's something neat: ${result}`}
            </OuiI18n>
          </OuiContext>
        );
        expect(component).toMatchSnapshot();

        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });

    describe('render prop with multiple tokens', () => {
      it('renders mapped render prop result to the dom', () => {
        const component = mount(
          <OuiContext
            i18n={{
              mapping: {
                test1: 'This is the first mapped value.',
                test2: 'This is the second mapped value.',
              },
            }}>
            <OuiI18n
              tokens={['test1', 'test2']}
              defaults={[
                'This is the first basic string.',
                'This is the second basic string.',
              ]}>
              {([one, two]: ReactChild[]) => (
                <div>
                  {one} {two}
                </div>
              )}
            </OuiI18n>
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });
    });

    describe('mappingFunc', () => {
      it('calls the mapping function with the source string', () => {
        const component = mount(
          <OuiContext
            i18n={{
              mapping: {
                test1: 'This is the mapped value.',
              },
              mappingFunc: (value: string) => value.toUpperCase(),
            }}>
            <OuiI18n token="test1" default="This is the basic string.">
              {(one: string) => <div aria-label={one}>{one}</div>}
            </OuiI18n>
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('useOuiI18n', () => {
    describe('unmapped', () => {
      it('handles single token without values', () => {
        const Component = () => {
          const value = useOuiI18n('token', 'placeholder');
          return <p>{value}</p>;
        };
        const component = mount(<Component />);
        expect(component).toMatchSnapshot();
      });

      it('handles single token with values', () => {
        const Component = () => {
          const value = useOuiI18n('myToken', 'first {first}, then {second}', {
            first: 'apples',
            second: 'aardvarks',
          });
          return <p>{value}</p>;
        };
        const component = mount(<Component />);
        expect(component).toMatchSnapshot();
      });

      it('handles multiple tokens', () => {
        const Component = () => {
          const [first, second] = useOuiI18n(
            ['test1', 'test2'],
            ['the first placeholder', 'the second placeholder']
          );
          return (
            <p>
              <span>{first}</span>
              <span>{second}</span>
            </p>
          );
        };
        const component = mount(<Component />);
        expect(component).toMatchSnapshot();
      });

      it('calls a function and renders the result to the dom', () => {
        const values = { type: 'callback', special: 'values' };
        const renderCallback = jest.fn(({ type, special }) => (
          <p>
            This is a {type} with {special}.
          </p>
        ));
        const Component = () => (
          <div>{useOuiI18n('test', renderCallback, values)}</div>
        );
        const component = mount(<Component />);
        expect(component).toMatchSnapshot();

        expect(renderCallback).toHaveBeenCalledWith(values);
      });
    });
  });

  describe('mapped tokens', () => {
    it('handles single token without values', () => {
      const Component = () => {
        const value = useOuiI18n('token', 'placeholder');
        return <p>{value}</p>;
      };
      const component = mount(
        <OuiContext
          i18n={{
            mapping: {
              token: 'This is the mapped value.',
            },
          }}>
          <Component />
        </OuiContext>
      );
      expect(component).toMatchSnapshot();
    });

    it('handles single token with values', () => {
      const Component = () => {
        const value = useOuiI18n('myToken', 'first {first}, then {second}', {
          first: 'apples',
          second: 'aardvarks',
        });
        return <p>{value}</p>;
      };
      const component = mount(
        <OuiContext
          i18n={{
            mapping: {
              myToken: 'In reverse order: {second}, then {first}',
            },
          }}>
          <Component />
        </OuiContext>
      );
      expect(component).toMatchSnapshot();
    });

    it('handles multiple tokens', () => {
      const Component = () => {
        const [first, second] = useOuiI18n(
          ['test1', 'test2'],
          ['the first placeholder', 'the second placeholder']
        );
        return (
          <p>
            <span>{first}</span>
            <span>{second}</span>
          </p>
        );
      };
      const component = mount(
        <OuiContext
          i18n={{
            mapping: {
              test1: 'first value',
              test2: 'second value',
            },
          }}>
          <Component />
        </OuiContext>
      );
      expect(component).toMatchSnapshot();
    });

    describe('mappingFunc', () => {
      it('calls the mapping function with the source string', () => {
        const Component = () => {
          const value = useOuiI18n('test1', 'placeholder');
          return <div aria-label={value}>{value}</div>;
        };
        const component = mount(
          <OuiContext
            i18n={{
              mapping: {
                test1: 'This is the mapped value.',
              },
              mappingFunc: (value: string) => value.toUpperCase(),
            }}>
            <Component />
          </OuiContext>
        );
        expect(component).toMatchSnapshot();
      });
    });
  });
});
