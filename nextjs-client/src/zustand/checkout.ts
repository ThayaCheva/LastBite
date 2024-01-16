import { LeftOverItem } from "@/utils/types";
import { enableMapSet, produce } from "immer";
import { create } from "zustand";

enableMapSet();

interface CheckoutState {
  itemList: LeftOverItem[];

  addItem: (props: LeftOverItem) => void;
  clearCheckout: () => void;
}

export const CheckoutStore = create<CheckoutState>((set, get) => ({
  itemList: [],
  // addItem: (item) => {
  //   const list = get().itemList;
  //   set({ itemList: [...list, item] });
  // },
  addItem: (item) => {
    set(
      produce((state: CheckoutState) => {
        const index = state.itemList.findIndex((v) => v.id === item.id);
        if (index >= 0) {
          state.itemList[index].quantity += 1;
        } else {
          state.itemList.push(item);
        }
      })
    );
  },
  clearCheckout: () => set({ itemList: [] }),
}));
