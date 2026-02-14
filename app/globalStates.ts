import { create } from "zustand";

export enum pageEnum {
  LOGIN = "login",
  REGISTER = "register",
}

type usePageType = {
  page: pageEnum;
  setPage: (value: pageEnum) => void;
};

export const usePage = create<usePageType>((set) => ({
  page: pageEnum.LOGIN,
  setPage: (value: pageEnum) => set(() => ({ page: value })),
}));
