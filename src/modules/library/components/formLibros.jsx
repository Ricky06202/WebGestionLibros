import { useState, useEffect } from "react";
import {
  getBooks,
  getAuthors,
  getTopics,
  postBook,
} from "@library/services/apiLibros";
import { getElementsPositionInDocument } from "astro/runtime/client/dev-toolbar/apps/utils/highlight.js";
function Formulario({ accion, titulo }) {
  const [libros, setLibros] = useState([]);
  const [autores, setAutores] = useState([]);
  const [temas, setTemas] = useState([]);

  const [temaPost, setTemaPost] = useState([]);

  const [idTitulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [portada, setPortada] = useState("");
  const [añoPublicacion, setAñoPublicacion] = useState("");
  const [editorial, setEditorial] = useState("");
  const [paginas, setPaginas] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [linkReferencia, setLinkReferencia] = useState("");
  const [rating, setRating] = useState("");
  const [autor, setAutor] = useState("");
  const [idTemas, setIdTemas] = useState("");

  const URL = "http://127.0.0.1:8000/Libros/";

  useEffect(() => {
    getBooks().then((librosApi) => {
      setLibros(librosApi);
    });
    getAuthors().then((autoresApi) => {
      setAutores(autoresApi);
    });
    getTopics().then((temasApi) => {
      setTemas(temasApi);
    });
  }, []);

  const handleButtonClick = () => {
    let datos = {
      titulo: idTitulo,
      subtitulo,
      descripcion,
      portada,
      añoPublicacion,
      editorial,
      paginas,
      disponibilidad,
      precio,
      linkReferencia,
      rating,
      autor,
      temas: idTemas,
    };
    datos = {
      titulo: "a",
      subtitulo: "a",
      descripcion: "a",
      portada: "https://www.blackbox.ai",
      añoPublicacion: 0,
      editorial: "a",
      paginas: 0,
      disponibilidad: true,
      precio: "0",
      linkReferencia: "https://www.blackbox.ai",
      rating: "1",
      autor: [{ id: 1, nombre_autor: "Eric Robertson" }],
      temas: [
        { id: 1, nombre_tema: "Self-help" },
        { id: 2, nombre_tema: "personal development" },
      ],
    };
    postBook(datos);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="flex flex-col m-4 text-lg">{accion + " " + titulo}</h3>
      </div>

      <form
        action=""
        className="grid w-1/2 justify-center content-center mx-auto gap-4"
      >
        <div className="grid grid-auto-rows grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Título"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Subtítulo"
            id="subtitulo"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Descripción"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Año de publicación"
            id="añoPublicacion"
            value={añoPublicacion}
            onChange={(e) => setAñoPublicacion(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Editorial"
            id="editorial"
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="justify-self-center flex gap-2 items-center">
            <input
              type="checkbox"
              placeholder="Disponbilidad"
              id="disponibilidad"
              value={disponibilidad}
              onChange={(e) => setDisponibilidad(e.target.value)}
            />
            <label htmlFor="disponibilidad">Disponibilidad</label>
          </span>
          <input
            type="number"
            placeholder="Páginas"
            id="paginas"
            value={paginas}
            onChange={(e) => setPaginas(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Precio"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="url"
            placeholder="Link de la portada"
            id="portada"
            value={portada}
            onChange={(e) => setPortada(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="url"
            placeholder="Link de Amazon"
            id="amazon"
            value={linkReferencia}
            onChange={(e) => setLinkReferencia(e.target.value)}
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
                {autores.map((autor) => (
                  <option key={autor.id}>{autor.nombre}</option>
                ))}
              </select>
            </span>
          )}
          <input
            type="number"
            step="0.01"
            min="1"
            max="5"
            placeholder="Rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          {temas.length === 0 ? (
            "Cargando ..."
          ) : (
            <span className="grid grid-col1">
              Seleccionar tema
              <div
                id="dropdownSearch"
                className="z-10  bg-white rounded-lg shadow w-60 dark:bg-gray-700"
              >
                <div className="p-3">
                  <label htmlFor="input-group-search" className="sr-only">
                    Tema
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  </div>
                </div>
                <ul
                  className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownSearchButton"
                  id="temas"
                  value={temas}
                  onChange={(e) => setIdTemas(e.target.value)}
                >
                  {temas.map((tema) => (
                    <li key={tema.id}>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="checkbox-item-11"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          htmlFor="checkbox-item-11"
                          className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          {tema.tema}
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
            id="btn"
            onClick={handleButtonClick}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            {accion}
          </button>
        </div>
      </form>
    </>
  );
}

export default Formulario;
