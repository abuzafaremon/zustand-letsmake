import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const nameStore = (set) => ({
  name: "",
  changeName: (val) => {
    set(() => ({
      name: val,
    }));
  },
});

const useNameStore = create(
  devtools(
    persist(nameStore, {
      name: "myName",
    })
  )
);
export default useNameStore;
