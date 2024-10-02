import { useState, useEffect } from "react";
import axios from "axios";
function Formulario({ texto }) {
  const [libros, setLibros] = useState([]);

  const URL = "http://127.0.0.1:8000/Libros/";

  useEffect(() => {
    const fetchLibros = async () => {
      await axios
        .get(URL)
        .then((response) => {
          setLibros(
            response.data.map((data) => ({
              id: data.id,
              titulo: data.titulo,
              subtitulo: data.subtitulo,
              descripcion: data.descripcion,
              portada: data.link_portada,
              añoPublicacion: data.año_publicacion,
              editorial: data.editorial,
              paginas: data.paginas,
              disponibilidad: data.esta_disponible,
              precio: data.precio,
              linkReferencia: data.link_referencia,
              rating: data.rating,
              autor: data.autor,
              temas: data.nombreTema,
            })),
          );
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    };

    fetchLibros();
  }, []);

  return (
    <form
      action=""
      class="grid w-1/2 justify-center content-center mx-auto gap-4"
    >
      <div class="grid grid-auto-rows grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Título"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Subtítulo"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Descripción"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Año de publicación"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Editorial"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <span class="justify-self-center">
          Disponibilidad <input type="checkbox" placeholder="Disponbilidad" />
        </span>
        <input
          type="number"
          placeholder="Páginas"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Precio"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="url"
          placeholder="Link de la portada"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="url"
          placeholder="Link de Amazon"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <span class="grid grid-col1">
          Seleccionar autor
          <select
            name="autor"
            id="autor"
            defaultValue="defaultAutor"
            class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
            multiple
          >
            <option value="defaultAutor" disabled selected hidden>
              autores
            </option>
            {libros.map((libro) => (
              <option key={libro.id}>{libro.autor}</option>
            ))}
          </select>
        </span>
        <input
          type="number"
          step="0.01"
          min="1"
          max="5"
          placeholder="Rating por defecto"
          class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <span class="grid grid-col1">
          Seleccionar tema
          <select
            name="tema"
            id="tema"
            defaultValue="defaultTema"
            class="block w-full p-2 text-gray-900 border border-sky-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
            multiple
          >
            <option value="defaultTema" disabled selected hidden>
              temas
            </option>
            {libros.map((libro) => (
              <option key={libro.id}>{libro.tema}</option>
            ))}
          </select>
        </span>
      </div>
      <div class="mt-10 justify-center content-center mx-auto">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          {texto}
        </button>
      </div>
    </form>
  );
}

export default Formulario;
