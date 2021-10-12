import React from "react";
import rendered from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";

import Column from "../Column";
import { STATUSES } from "../../../../../types/enums";

afterEach(cleanup);

describe("Column", () => {
  it("column with render", () => {
    const columnComponent = rendered.create(<Column title={""} status={STATUSES.TODO} items={[]} />);
    const tree = columnComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });
});