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

import { AST } from './ast';
import moment from 'moment/moment';
import { dateValue } from './date_value';
import { Granularity } from './date_format';
import { astToEsQueryDsl } from './ast_to_es_query_dsl';

describe('astToEsQueryDsl', () => {
  test("ast - ''", () => {
    const query = astToEsQueryDsl(AST.create([]));
    expect(query).toMatchSnapshot();
  });

  test("ast - 'john -sales'", () => {
    const query = astToEsQueryDsl(
      AST.create([AST.Term.must('john'), AST.Term.mustNot('sales')])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - '-group:es group:kibana -group:beats group:logstash'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Field.mustNot.eq('group', 'es'),
        AST.Field.must.eq('group', 'kibana'),
        AST.Field.mustNot.eq('group', 'beats'),
        AST.Field.must.eq('group', 'logstash'),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - 'is:online group:kibana john'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Is.must('online'),
        AST.Field.must.eq('group', 'kibana'),
        AST.Term.must('john'),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - 'john -doe is:online group:eng group:es -group:kibana -is:active'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Term.must('john'),
        AST.Term.mustNot('doe'),
        AST.Is.must('online'),
        AST.Field.must.eq('group', 'eng'),
        AST.Field.must.eq('group', 'es'),
        AST.Field.mustNot.eq('group', 'kibana'),
        AST.Is.mustNot('active'),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - 'john group:(eng or es) -group:kibana'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Term.must('john'),
        AST.Field.must.eq('group', ['eng', 'es']),
        AST.Field.mustNot.eq('group', 'kibana'),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test('ast - \'john group:(eng or "marketing org") -group:"kibana team"', () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Term.must('john'),
        AST.Field.must.eq('group', ['eng', 'marketing org']),
        AST.Field.mustNot.eq('group', 'kibana team'),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test('ast - count>3', () => {
    const query = astToEsQueryDsl(AST.create([AST.Field.must.gt('count', 3)]));
    expect(query).toMatchSnapshot();
  });

  test('ast - -count<=4 size<5 age>=3 -number>9', () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Field.mustNot.lte('count', 4),
        AST.Field.must.lt('size', 5),
        AST.Field.must.gte('age', 3),
        AST.Field.mustNot.gt('number', 9),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - date>='2004-03-22'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Field.must.gte(
          'date',
          dateValue(moment.utc('2004-03-22'), Granularity.DAY)!
        ),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - date:'2004-03' -date<'2004-03-10'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Field.must.eq(
          'date',
          dateValue(moment.utc('2004-03'), Granularity.MONTH)!
        ),
        AST.Field.mustNot.lt(
          'date',
          dateValue(moment.utc('2004-03-10'), Granularity.DAY)!
        ),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test("ast - date>'2004-02' -otherDate>='2004-03-10'", () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Field.must.gt(
          'date',
          dateValue(moment.utc('2004-02'), Granularity.MONTH)!
        ),
        AST.Field.mustNot.gte(
          'date',
          dateValue(moment.utc('2004-03-10'), Granularity.DAY)!
        ),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test('ast - (name:john)', () => {
    const query = astToEsQueryDsl(
      AST.create([AST.Group.must([AST.Field.must.eq('name', 'john')])])
    );
    expect(query).toMatchSnapshot();
  });

  test('ast - (name:john OR name:fred)', () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Group.must([
          AST.Field.must.eq('name', 'john'),
          AST.Field.must.eq('name', 'fred'),
        ]),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test('ast - name:john (is:enrolled OR Teacher)', () => {
    const query = astToEsQueryDsl(
      AST.create([
        AST.Field.must.eq('name', 'john'),
        AST.Group.must([AST.Is.must('enrolled'), AST.Term.must('Teacher')]),
      ])
    );
    expect(query).toMatchSnapshot();
  });

  test('ast - name:"First \\"Nickname\\" Last"', () => {
    const query = astToEsQueryDsl(
      AST.create([AST.Field.must.eq('name', 'First "Nickname" Last')])
    );
    expect(query).toMatchSnapshot();
  });
});
