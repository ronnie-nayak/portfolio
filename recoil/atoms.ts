import { atom } from "recoil";

export const ActiveState = atom({
  key: "ActiveState",
  default: "hero",
});

export const PageScrollState = atom({
  key: "PageScrollState",
  default: true,
});
