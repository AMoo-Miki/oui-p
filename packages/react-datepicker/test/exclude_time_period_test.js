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

import React from "react";
import { mount } from "enzyme";
import * as utils from "../src/date_utils";
import DatePicker from "../src/index.jsx";

describe("DatePicker", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should only display times between minTime and maxTime", () => {
    var now = utils.newDate();
    var datePicker = mount(
      <DatePicker
        showTimeSelect
        selected={now}
        onChange={() => null}
        minTime={utils.setTime(utils.cloneDate(now), { hours: 17, minutes: 0 })}
        maxTime={utils.setTime(utils.cloneDate(now), { hours: 18, minutes: 0 })}
      />
    );
    var times = datePicker.find("li.react-datepicker__time-list-item");
    expect(times).to.exist;
  });
});
