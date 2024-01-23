import { atom } from 'recoil';

export const ActiveState = atom({
  key: 'ActiveState',
  default: "hero",
});

export const FirstImageState = atom({
  key: 'FirstImageState',
  default: false,
});
