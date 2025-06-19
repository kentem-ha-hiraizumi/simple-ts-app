import { prefixTitle } from "./prefixTitle.js";

test("タイトルがプレフィックスで始まること", () => {
  expect(prefixTitle("テスト")).toBe("テスト - Simple TS");
});

test("入力がない場合、タイトルがプレフィックスで始まらないこと", () => {
  expect(prefixTitle("")).toBe("Simple TS");
});
