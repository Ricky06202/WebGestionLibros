import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import {
  bookList,
  bookListSize,
  bookListFiltered,
} from "@library/store/bookStore";
import { getBooks } from "@library/services/apiLibros";

function ListaLibros() {
  const handleClick = () => {
    window.location.href = "/gestorLibros";
    console.log("Click");
  };

  const $libros = useStore(bookList);
  const libros = bookList;
  const [buscarLibros, setbuscarLibros] = useState("");
  const tamano = bookListSize;
  const listaLibrosFiltrados = bookListFiltered;

  useEffect(() => {
    getBooks().then((booksApi) => {
      libros.set(booksApi);
    });
  }, []);

  useEffect(() => {
    if (buscarLibros.trim() === "") listaLibrosFiltrados.set([]);
    listaLibrosFiltrados.set(librosFiltrados);
  }, [buscarLibros]);

  const librosFiltrados = $libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(buscarLibros.toLowerCase()) ||
      libro.subtitulo.toLowerCase().includes(buscarLibros.toLowerCase()),
  );

  const cambiarTamano = (event) => {
    tamano.set(event.target.value);
  };

  return (
    <div className="items-center grid m-9">
      <div className="grid grid-flow-col">
        <input
          value={buscarLibros}
          onChange={(e) => setbuscarLibros(e.target.value)}
          type="text"
          placeholder="Buscar libro"
          className="form-control md:w-1/2 justify-self-center"
        />
        <select
          name="tamaño"
          id="id_tamaño"
          className="md:w-1/2 justify-self-center ml-10"
          onChange={cambiarTamano}
        >
          <option value={1}>Grande</option>
          <option value={2}>Mediano</option>
          <option value={3}>Pequeño</option>
        </select>
        <button
          type="button"
          onClick={handleClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm justify-self-end mr-20 md:w-1/2 w-36 ml-10"
        >
          Añadir Libro
        </button>
      </div>
    </div>
  );
}

export default ListaLibros;