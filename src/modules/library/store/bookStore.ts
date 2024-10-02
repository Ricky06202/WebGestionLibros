import type { autor, libro, tema } from "@library/constants/ApiLibrosTypes";
import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const bookList = persistentAtom<libro[]>("bookList", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
export const bookListSize = atom(1);
export const bookListFiltered = atom<libro[]>([]);

export const authorList = persistentAtom<autor[]>("authorList", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
export const topicList = persistentAtom<tema[]>("topicList", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
