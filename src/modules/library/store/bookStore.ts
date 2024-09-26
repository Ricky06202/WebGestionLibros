interface bookState {
  lista: any[];
  setLista: any;
}
const useBookStore = create<bookState>((set) => ({}));
