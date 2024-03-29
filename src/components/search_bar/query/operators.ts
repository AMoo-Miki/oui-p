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

import { dateFormat, dateGranularity } from './date_format';
import { isDateValue } from './date_value';
import {
  isArray,
  isBoolean,
  isNumber,
  isString,
  isDateLike,
  isNil,
} from '../../../services/predicate';
import moment from 'moment';
import { Value } from './ast';

export type FieldValue =
  | string
  | number
  | boolean
  | any[]
  | Date
  | moment.Moment
  | null
  | undefined;

export type ClauseValue = Value | Date | moment.Moment | null | undefined;

const utc = moment.utc;

const resolveValueAsDate = (value: FieldValue) => {
  if (moment.isMoment(value)) {
    return value;
  }
  if (moment.isDate(value) || isNumber(value)) {
    return moment(value);
  }
  return dateFormat.parse(String(value));
};

type Options = Partial<{
  exactMatch: boolean;
  ignoreCase: boolean;
}>;

const defaultEqOptions: Options = {
  ignoreCase: true,
};

export const eq = (
  fieldValue: FieldValue,
  clauseValue: ClauseValue,
  options: Options = {}
): boolean => {
  options = { ...defaultEqOptions, ...options };

  if (isNil(fieldValue) || isNil(clauseValue)) {
    return fieldValue === clauseValue;
  }

  if (isBoolean(fieldValue)) {
    return clauseValue === fieldValue;
  }

  if (isArray(fieldValue)) {
    if (fieldValue.length > 0) {
      return fieldValue.some((item) => eq(item, clauseValue, options));
    } else {
      return eq('', clauseValue, options);
    }
  }

  if (isDateValue(clauseValue)) {
    const dateFieldValue = resolveValueAsDate(fieldValue);
    if (clauseValue.granularity) {
      return clauseValue.granularity.isSame(
        dateFieldValue,
        clauseValue.resolve()
      );
    }
    return dateFieldValue.isSame(clauseValue.resolve());
  }

  if (isString(fieldValue)) {
    if (options.exactMatch === true) {
      return options.ignoreCase
        ? fieldValue.toLowerCase() === clauseValue.toString().toLowerCase()
        : fieldValue === clauseValue.toString();
    } else {
      return options.ignoreCase
        ? fieldValue
            .toLowerCase()
            .includes(clauseValue.toString().toLowerCase())
        : fieldValue.includes(clauseValue.toString());
    }
  }

  if (isNumber(fieldValue)) {
    clauseValue = Number(clauseValue);
    return fieldValue === clauseValue;
  }

  if (isDateLike(fieldValue)) {
    const date = resolveValueAsDate(clauseValue);
    if (!date.isValid()) {
      return false;
    }
    const granularity = dateGranularity(date);
    if (!granularity) {
      return utc(fieldValue).isSame(date);
    }
    return granularity.isSame(fieldValue as moment.Moment, date);
  }

  return false; // unknown value type
};

export const exact = (
  fieldValue: FieldValue,
  clauseValue: ClauseValue,
  options = {}
) => {
  return eq(fieldValue, clauseValue, { ...options, exactMatch: true });
};

const greaterThen = (
  fieldValue: FieldValue,
  clauseValue: ClauseValue,
  inclusive = false
): boolean => {
  if (isDateValue(clauseValue)) {
    const clauseDateValue = clauseValue.resolve();

    const fieldValueAsMomentInput = fieldValue as moment.MomentInput;

    if (!clauseValue.granularity) {
      return inclusive
        ? utc(fieldValueAsMomentInput).isSameOrAfter(clauseDateValue)
        : utc(fieldValueAsMomentInput).isAfter(clauseDateValue);
    }

    if (inclusive) {
      return utc(fieldValueAsMomentInput).isSameOrAfter(
        clauseValue.granularity.start(clauseDateValue)
      );
    }
    return utc(fieldValueAsMomentInput).isSameOrAfter(
      clauseValue.granularity.startOfNext(clauseDateValue)
    );
  }

  if (isString(fieldValue)) {
    const str = String(clauseValue);
    return inclusive ? fieldValue >= str : fieldValue > str;
  }

  if (isNumber(fieldValue)) {
    const number = Number(clauseValue);
    return inclusive ? fieldValue >= number : fieldValue > number;
  }

  if (isDateLike(fieldValue)) {
    const date = resolveValueAsDate(clauseValue);
    const granularity = dateGranularity(date);
    if (!granularity) {
      return inclusive
        ? utc(fieldValue).isSameOrAfter(date)
        : utc(fieldValue).isAfter(date);
    }
    if (inclusive) {
      return utc(fieldValue).isSameOrAfter(granularity.start(date));
    }
    return utc(fieldValue).isSameOrAfter(granularity.startOfNext(date));
  }

  if (isArray(fieldValue)) {
    return fieldValue.every((item) =>
      greaterThen(item, clauseValue, inclusive)
    );
  }

  return false; // unsupported value type
};

export const gt = (fieldValue: FieldValue, clauseValue: ClauseValue) => {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return false;
  }
  return greaterThen(fieldValue, clauseValue);
};

export const gte = (fieldValue: FieldValue, clauseValue: ClauseValue) => {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return fieldValue === clauseValue;
  }
  return greaterThen(fieldValue, clauseValue, true);
};

export const lt = (fieldValue: FieldValue, clauseValue: ClauseValue) => {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return false;
  }
  return !greaterThen(fieldValue, clauseValue, true);
};

export const lte = (fieldValue: FieldValue, clauseValue: ClauseValue) => {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return fieldValue === clauseValue;
  }
  return !greaterThen(fieldValue, clauseValue);
};
