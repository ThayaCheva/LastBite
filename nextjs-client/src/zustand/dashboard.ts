import { LeftOverItem } from "@/utils/types";
import { enableMapSet, produce } from "immer";
import { create } from "zustand";

enableMapSet();

interface DashboardState {
  itemList: LeftOverItem[];

  addItem: (props: LeftOverItem) => void;
}

export const DashboardStore = create<DashboardState>((set, get) => ({
  itemList: [],
  // addItem: (item) => {
  //   const list = get().itemList;
  //   set({ itemList: [...list, item] });
  // },
  addItem: (item) => {
    set(
      produce((state: DashboardState) => {
        state.itemList.push(item);
      })
    );
  },
}));
