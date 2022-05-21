import sum from "utils/sum1";

describe("sum", () => {
  it("可以做加法", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
