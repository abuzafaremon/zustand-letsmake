import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const counterStore = (set) => ({
  counterValue: 0,
  increaseCounterValue: (val) => {
    set((state) => ({
      counterValue: state.counterValue + val,
    }));
  },
  decreaseCounterValue: (val) => {
    set((state) => ({
      counterValue: state.counterValue - val,
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(counterStore, {
      name: "counterValue",
    })
  )
);
export default useCourseStore;
