import React, { useState, useEffect } from "react";
import axios from "axios";

import LibrosComponente from "../../components/ListaLibros.svelte";

function ListaLibros() {
  const [libros, setLibros] = useState([]);
  const [buscarLibros, setbuscarLibros] = useState("");
  const [tamano, setTamano] = useState(1);

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

  const librosFiltrados = libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(buscarLibros.toLowerCase()) ||
      libro.subtitulo.toLowerCase().includes(buscarLibros.toLowerCase()),
  );

  const cambiarTamano = (event) => {
    setTamano(event.target.value);
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
          className="md:w-1/2 justify-self-center"
          onChange={cambiarTamano}
        >
          <option value="1">Grande</option>
          <option value="2">Mediano</option>
          <option value="3">Pequeño</option>
        </select>
      </div>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th>Titulo</th>
            <th>Subtitulo</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {librosFiltrados.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.subtitulo}</td>
              <td>{libro.rating}</td>
            </tr>
          ))}
          {libros.length === 0 && (
            <tr>
              <td colSpan="3">Cargando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaLibros;
