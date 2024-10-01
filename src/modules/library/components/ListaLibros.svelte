<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import LibroGrande from "./LibroGrande.svelte";
  import LibroMediano from "./LibroMediano.svelte";
  import LibroPequeo from "./LibroPequeño.svelte";
  import { bookListSize, bookList } from "@library/store/bookStore";
  import { onMount } from "svelte";
  import { librosMock } from "@library/constants/librosMock";

  let libros = bookList;
  let tamano = bookListSize;
  onMount(() => {
    libros.set(
      librosMock.map((libro) => ({
        id: libro.id,
        titulo: libro.titulo,
        subtitulo: libro.subtitulo,
        descripcion: libro.descripcion,
        portada: libro.link_portada,
        añoPublicacion: libro.año_publicacion,
        editorial: libro.editorial,
        paginas: libro.paginas,
        disponibilidad: libro.esta_disponible,
        precio: parseFloat(libro.precio),
        linkReferencia: libro.link_referencia,
        rating: parseFloat(libro.rating),
        autor: libro.autor,
        temas: libro.nombreTema,
      })),
    );
  });
</script>

<section class="flex flex-wrap gap-4 justify-center">
  {#each $libros as libro}
    {#if $tamano === 1}
      <LibroGrande {libro} />
    {:else if $tamano === 2}
      <LibroMediano {libro} />
    {:else}
      <LibroPequeo {libro} />
    {/if}
  {/each}
</section>
