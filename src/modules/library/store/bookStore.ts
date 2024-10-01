import type { libro } from "@library/constants/ApiLibrosTypes";
import { create } from "zustand";
interface booksState {
  bookListSize: number;
  setBookListSize: (size: number) => void;
  bookList: libro[];
  setBookList: (bookList: libro[]) => void;
}
const useBookStore = create<booksState>()((set) => ({
  bookListSize: 1,
  setBookListSize: (size: number) => {
    set({ bookListSize: size });
  },
  bookList: [],
  setBookList: (bookList: libro[]) => {
    set({ bookList });
  },
}));
