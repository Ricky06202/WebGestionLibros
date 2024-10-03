import axios from "axios";

export async function getAuthors() {
  return axios
    .get(`http://localhost:8000/Autores/`)
    .then((res) => res.data)
    .then((data) => {
      return data.map((autor: any) => ({
        id: autor.id,
        nombre: autor.nombre_autor,
      }));
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAuthor(id: number): Promise<any> {
  return axios
    .get(`http://localhost:8000/Autores/${id}/`)
    .then((res) => res.data)
    .then((data) => {
      return { id: data.id, nombre: data.nombre_autor };
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getTopics() {
  return axios
    .get(`http://localhost:8000/Temas/`)
    .then((res) => res.data)
    .then((data) => {
      return data.map((tema: any) => ({
        id: tema.id,
        tema: tema.nombre_tema,
      }));
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getTopic(id: number): Promise<any> {
  return axios
    .get(`http://localhost:8000/Temas/${id}/`)
    .then((res) => res.data)
    .then((data) => {
      return { id: data.id, tema: data.nombre_tema };
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getBooks() {
  return axios
    .get("http://127.0.0.1:8000/Libros/")
    .then((response) => {
      return response.data.map((data: any) => ({
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
      }));
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getBook(id: number): Promise<any> {
  return axios
    .get(`http://localhost:8000/Libros/${id}/`)
    .then((res) => res.data)
    .then((data: any) => ({
      id: data.id,
      titulo: data.titulo,
      subtitulo: data.subtitulo,
      descripcion: data.descripcion,
      portada: data.link_portada,
      añoPublicacion: data.año_publicacion,
      editorial: data.editorial,
      paginas: data.paginas,
      disponibilidad: data.esta_disponible,
      precio: parseFloat(data.precio),
      linkReferencia: data.link_referencia,
      rating: parseFloat(data.rating),
      autor: data.autor,
      temas: data.nombreTema,
    }))
    .catch((error) => {
      console.log(error);
    });
}

export async function postBook(librosData: any): Promise<any>{
  return axios.post("http://127.0.0.1:8000/Libros/", {
    titulo: librosData.idTitulo,
    subtitulo: librosData.subtitulo,
    descripcion: librosData.descripcion,
    link_portada: librosData.portada,
    año_publicacion: librosData.añoPublicacion,
    editorial: librosData.editorial,
    paginas: librosData.paginas,
    esta_disponible: librosData.disponibilidad,
    precio: librosData.precio,
    link_referencia: librosData.amazon,
    rating: librosData.rating,
    autor: librosData.autor,
    nombreTema: librosData.idTemas,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
    if (error.response.status === 500) {
      console.error('Error interno del servidor');}
  });
}
