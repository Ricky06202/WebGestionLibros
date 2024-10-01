import type { libro } from "@library/constants/ApiLibrosTypes";
import { atom } from "nanostores";

export const bookListSize = atom(1);
export const bookList = atom<libro[]>([]);
export const bookListFiltered = atom<libro[]>([]);
