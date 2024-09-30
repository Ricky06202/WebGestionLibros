import React, { useState, useEffect } from "react";
import axios from "axios";

function ListaLibros() {
  const [libros, setLibros] = useState([]);
  const [buscarLibros, setbuscarLibros] = useState("");

  const URL = "http://127.0.0.1:8000/Libros";
  // const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchLibros = async () => {
      await axios
        .get(URL)
        .then((response) => {
          setLibros(response.data);
          console(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchLibros();
  }, []);

  return (
    <div className="items-center grid m-9">
      <input
        // value={buscarLibros}
        type="text"
        placeholder="Buscar libro"
        className="form-control md:w-1/2 justify-self-center"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th>Titulo</th>
            <th>Subtitulo</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <th>
            {libros.map((libro) => (
              <li key={libro.id}>
                {libro.titulo}, {libro.subtitulo}, {libro.rating}
              </li>
            ))}
          </th>
          {/* <th>
            {libros.map((libro) => (
              <li key={libro.id}>
                {libro.name}, {libro.username}, {libro.email}
              </li>
            ))}
          </th> */}
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
