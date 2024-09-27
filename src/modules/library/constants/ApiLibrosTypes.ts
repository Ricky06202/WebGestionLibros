interface libro {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  portada: string;
  añoPublicacion: number;
  editorial: string;
  paginas: number;
  disponibilidad: boolean;
  precio: number;
  linkReferencia: string;
  rating: string;
  autor: number[];
  temas: number[];
}

interface autor {
  id: number;
  nombre: string;
}

interface tema {
  id: number;
  nombre: string;
}
