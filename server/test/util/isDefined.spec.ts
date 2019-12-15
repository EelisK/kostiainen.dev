import isDefined from "../../src/util/isDefined";

describe("util/isDefined", () => {
  it("returns false when parameter is undefined", () => {
    expect(isDefined(undefined)).toBe(false);
  });
  it("returns true when parameter is not undefined", () => {
    ["", {}, null, 1, 0, []].forEach(param => {
      expect(isDefined(param)).toBe(true);
    });
  });
});
