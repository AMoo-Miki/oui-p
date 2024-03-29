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
import { setTime, cloneDate, newDate } from "../src/date_utils";
import TimeComponent from "../src/time";

function cloneDateWithTime(date, time) {
  return setTime(cloneDate(date), time);
}

describe("TimeComponent", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should only enable times specified in includeTimes props", () => {
    const today = utils.getStartOfDay(utils.newDate());
    const timeComponent = mount(
      <TimeComponent
        includeTimes={[
          utils.addMinutes(cloneDate(today), 60),
          utils.addMinutes(cloneDate(today), 120),
          utils.addMinutes(cloneDate(today), 150)
        ]}
      />
    );

    const disabledItems = timeComponent.find(
      ".react-datepicker__time-list-item--disabled"
    );
    expect(disabledItems).to.have.length(45);
  });
});
