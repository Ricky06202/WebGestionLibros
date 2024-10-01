import {
  create
} from "zustand";

const useTamanoStore = create((set) => ({
  tamano: 1, // Valor inicial
  setTamano: (newTamano) => set({
    tamano: newTamano
  }),
}));

export default useTamanoStore;