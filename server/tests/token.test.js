const { newToken, tokenInfo } = require("../utils/token.utils");
const expect = require("chai").expect;

describe("Token Functions", () => {
  it("Creates a token with days", () => {
    let token = newToken(1000);
    expect(token[7]).to.equal("2");
    // expect(token[7]).toEqual(1)
  });
  it("Returns days in token", () => {
    let days = tokenInfo(17688021);
    expect(days).to.equal("1");
  });
});
