import { LeftOverItem, Restaurant, User } from "@/utils/types";
import { enableMapSet, produce } from "immer";
import { create } from "zustand";

enableMapSet();

interface GeneralState {
  currentUser: User | Restaurant | undefined;
  setCurrentUser: (user: User | Restaurant) => void;
}

export const GeneralStore = create<GeneralState>((set, get) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
