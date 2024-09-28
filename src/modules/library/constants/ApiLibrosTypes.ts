export interface libro {
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
  rating: number;
  autor: number[];
  temas: number[];
}

export interface autor {
  id: number;
  nombre: string;
}

export interface tema {
  id: number;
  nombre: string;
}
