import { librosMock } from "@library/constants/librosMock";

// Mock data for authors and topics
const authorsMock = [
  { id: 1, nombre: "Erik Robertson" },
  { id: 2, nombre: "James Clear" },
  { id: 3, nombre: "Laura Mazuani" },
  { id: 4, nombre: "Colleen Hoover" },
  { id: 5, nombre: "Ana Huang" },
  { id: 6, nombre: "HD Carlton" },
  { id: 7, nombre: "Colleen Hoover" },
  { id: 8, nombre: "Joseph Murphy" },
  { id: 9, nombre: "David Goggins" },
  { id: 10, nombre: "Ali Hazelwood" },
  { id: 11, nombre: "Alex Michaelides" },
  { id: 12, nombre: "Julia Quinn" },
  { id: 13, nombre: "Antoine de Saint-Exupéry" },
  { id: 14, nombre: "Eckhart Tolle" },
  { id: 15, nombre: "Julia Quinn" },
  { id: 16, nombre: "Franz Kafka" },
  { id: 17, nombre: "Rhonda Byrne" },
  { id: 18, nombre: "Jeff Kinney" },
  { id: 19, nombre: "Cal Newport" },
  { id: 20, nombre: "Robert Greene" },
];
const topicsMock = [
  { id: 1, tema: "Self-Help" },
  { id: 2, tema: "Personal Growth" },
  { id: 3, tema: "Mindfulness" },
  { id: 4, tema: "Emotional Intelligence" },
  { id: 5, tema: "Overthinking" },
  { id: 6, tema: "Mental Health" },
  { id: 7, tema: "Anxiety" },
  { id: 8, tema: "Human Nature" },
  { id: 9, tema: "Psychology" },
  { id: 10, tema: "Self-Improvement" },
  { id: 11, tema: "Habit Formation" },
  { id: 12, tema: "Productivity" },
  { id: 13, tema: "Goal Setting" },
  { id: 14, tema: "Success" },
  { id: 15, tema: "Behavioral Change" },
  { id: 16, tema: "Romance" },
  { id: 17, tema: "Contemporary Romance" },
  { id: 18, tema: "Fiction" },
  { id: 19, tema: "Drama" },
  { id: 20, tema: "Love" },
  { id: 21, tema: "Suspense" },
  { id: 22, tema: "New Adult" },
  { id: 23, tema: "Erotica" },
  { id: 24, tema: "Dark Romance" },
  { id: 25, tema: "Abuse" },
  { id: 26, tema: "Family" },
  { id: 28, tema: "Spiritual" },
  { id: 29, tema: "Self-Discovery" },
  { id: 30, tema: "Mind Power" },
  { id: 31, tema: "Motivation" },
  { id: 32, tema: "Determination" },
  { id: 33, tema: "University" },
  { id: 34, tema: "Mystery" },
  { id: 35, tema: "Thriller" },
  { id: 37, tema: "Overcoming Obstacles" },
  { id: 39, tema: "Literary Fiction" },
  { id: 40, tema: "Historical Romance" },
  { id: 41, tema: "Fantasy" },
  { id: 42, tema: "Spiritual Enlightenment" },
  { id: 43, tema: "Regency Romance" },
  { id: 44, tema: "Royal Romance" },
  { id: 47, tema: "Absurd" },
  { id: 48, tema: "Comedy" },
  { id: 49, tema: "Law of Attraction" },
  { id: 50, tema: "Work Ethic" },
  { id: 51, tema: "Focus" },
];

export async function getAuthors() {
  return Promise.resolve(
    authorsMock.map((autor) => ({
      id: autor.id,
      nombre: autor.nombre,
    }))
  );
}

export async function getAuthor(id: number): Promise<any> {
  const author = authorsMock.find((autor) => autor.id === id);
  return Promise.resolve(author ? { id: author.id, nombre: author.nombre } : null);
}

export async function getTopics() {
  return Promise.resolve(
    topicsMock.map((tema) => ({
      id: tema.id,
      tema: tema.tema,
    }))
  );
}

export async function getTopic(id: number): Promise<any> {
  const topic = topicsMock.find((tema) => tema.id === id);
  return Promise.resolve(topic ? { id: topic.id, tema: topic.tema } : null);
}

export async function getBooks(): Promise<any> {
  return Promise.resolve(
    librosMock.map((data) => ({
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
    }))
  );
}

export async function getBook(id: number): Promise<any> {
  const book = librosMock.find((data) => data.id === id);
  return Promise.resolve(
    book
      ? {
          id: book.id,
          titulo: book.titulo,
          subtitulo: book.subtitulo,
          descripcion: book.descripcion,
          portada: book.link_portada,
          añoPublicacion: book.año_publicacion,
          editorial: book.editorial,
          paginas: book.paginas,
          disponibilidad: book.esta_disponible,
          precio: parseFloat(book.precio),
          linkReferencia: book.link_referencia,
          rating: parseFloat(book.rating),
          autor: book.autor,
          temas: book.nombreTema,
        }
      : null
  );
}

export async function postBook(librosData: any) {
  const newId = librosMock.length > 0 ? Math.max(...librosMock.map((b) => b.id)) + 1 : 1;

  const newBook = {
    id: newId,
    titulo: librosData.titulo,
    subtitulo: librosData.subtitulo,
    descripcion: librosData.descripcion,
    link_portada: librosData.portada,
    año_publicacion: librosData.añoPublicacion,
    editorial: librosData.editorial,
    paginas: librosData.paginas,
    esta_disponible: librosData.disponibilidad,
    precio: librosData.precio,
    link_referencia: librosData.linkReferencia,
    rating: librosData.rating,
    autor: librosData.autor,
    nombreTema: librosData.temas,
  };

  librosMock.push(newBook);

  return Promise.resolve(newBook);
}

export async function deleteBook(id: number) {
  const index = librosMock.findIndex((book) => book.id === id);
  if (index !== -1) {
    librosMock.splice(index, 1);
    return Promise.resolve(true);
  } else {
    return Promise.resolve(false);
  }
}

export async function updateBook(id: number, data: any) {
  const index = librosMock.findIndex((book) => book.id === id);
  if (index !== -1) {
    librosMock[index] = {
      ...librosMock[index],
      titulo: data.titulo,
      subtitulo: data.subtitulo,
      descripcion: data.descripcion,
      link_portada: data.portada,
      año_publicacion: data.añoPublicacion,
      editorial: data.editorial,
      paginas: data.paginas,
      esta_disponible: data.disponibilidad,
      precio: data.precio,
      link_referencia: data.linkReferencia,
      rating: data.rating,
      autor: data.autor,
      nombreTema: data.temas,
    };
    return Promise.resolve(librosMock[index]);
  } else {
    return Promise.resolve(null);
  }
}