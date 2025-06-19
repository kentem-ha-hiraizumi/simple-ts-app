import { prefixTitle } from "./prefixTitle";

const button = document.querySelector<HTMLButtonElement>("button");
const input = document.querySelector<HTMLInputElement>("input#prefix");
const title = document.querySelector<HTMLHeadingElement>("h1");

button?.addEventListener("click", () => {
  const prefix = input?.value;
  if (title && input) {
    document.title = prefixTitle(prefix ?? "");
    title.textContent = prefixTitle(prefix ?? "");
    input.value = "";
  }
});
