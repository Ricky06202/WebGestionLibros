import { useState, useEffect } from "react";
import { getBooks } from "@library/services/apiLibros";
function Formulario({ texto }) {
  const [libros, setLibros] = useState([]);

  const URL = "http://127.0.0.1:8000/Libros/";

  useEffect(() => {
    getBooks().then((librosApi) => {
      setLibros(librosApi);
    });
  }, []);

  return (
    <form
      action=""
      className="grid w-1/2 justify-center content-center mx-auto gap-4"
    >
      <div className="grid grid-auto-rows grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Título"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Subtítulo"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Descripción"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Año de publicación"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Editorial"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="justify-self-center">
          Disponibilidad <input type="checkbox" placeholder="Disponbilidad" />
        </span>
        <input
          type="number"
          placeholder="Páginas"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Precio"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="url"
          placeholder="Link de la portada"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="url"
          placeholder="Link de Amazon"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        {libros.length === 0 ? (
          "Cargando..."
        ) : (
          <span className="grid grid-col1">
            Seleccionar autor
            <select
              name="autor"
              id="autor"
              defaultValue="defaultAutor"
              className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="defaultAutor" disabled hidden>
                autores
              </option>
              {libros.map((libro) => (
                <option key={libro.id}>{libro.autor}</option>
              ))}
            </select>
          </span>
        )}
        <input
          type="number"
          step="0.01"
          min="1"
          max="5"
          placeholder="Rating por defecto"
          className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        {libros.length === 0 ? (
          "Cargando ..."
        ) : (
          <span className="grid grid-col1">
            Seleccionar tema
            {/* <select
              name="tema"
              id="tema"
              defaultValue={["defaultTema"]}
              className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
              multiple
            >
              <option value="defaultTema"> default</option>
              <optgroup label="fruits">
                <option>Banana</option>
                <option selected>Cherry</option>
                <option>Lemon</option>
              </optgroup>
              {libros.map((libro) => (
                <option key={libro.id}>{libro.tema}</option>
              ))}
            </select> */}
            <div
              id="dropdownSearch"
              className="z-10  bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
              <div className="p-3">
                <label htmlFor="input-group-search" className="sr-only">
                  Tema
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search user"
                  />
                </div>
              </div>
              <ul
                className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton"
              >
                {libros.map((libro) => (
                  <li key={libro.id}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="checkbox-item-11"
                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        {libro.titulo}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </span>
        )}
      </div>
      <div className="mt-10 justify-center content-center mx-auto">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          {texto}
        </button>
      </div>
    </form>
  );
}

export default Formulario;
