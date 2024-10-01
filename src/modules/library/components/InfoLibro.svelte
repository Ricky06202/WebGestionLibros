<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import axios from "axios";
  import { onMount } from "svelte";

  export let id;

  let libro: libro;

  onMount(() => {
    axios
      .get(`http://localhost:8000/Libros/${id}/`)
      .then((res) => res.data)
      .then((data) => {
        libro = {
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
        };
      })
      .catch((error) => console.error(error));
  });
</script>

{#if libro === undefined}
  loading...
{:else}
  <div class="grid h-screen grid-cols-[1fr_3fr] p-6 gap-6">
    <aside class="bg-lime-100">
      <img src={libro.portada} alt={"Portada del libro " + libro.titulo} />
    </aside>
    <main class="bg-red-100">
      <h2 class="text-3xl font-bold">{libro.titulo}</h2>
      <h3 class="text-xl italic text-gray-700">{libro.subtitulo}</h3>
      <span class="mb-4 block">
        by <a class="text-blue-700 underline" href="#">{libro.autor}</a>
      </span>
      <p class="mb-8">{libro.descripcion}</p>
      <ul class="grid grid-cols-3 gap-2 px-4 mb-4">
        <li
          class="flex flex-col items-center border border-gray-400 rounded-md py-1 text-sm text-gray-700 gap-1"
        >
          Fecha de Publicacion <div class="text-base text-black">
            {libro.añoPublicacion}
          </div>
        </li>
        <li
          class="flex flex-col items-center border border-gray-400 rounded-md py-1 text-sm text-gray-700 gap-1"
        >
          Editorial <div class="text-base text-black">{libro.editorial}</div>
        </li>
        <li
          class="flex flex-col items-center border border-gray-400 rounded-md py-1 text-sm text-gray-700 gap-1"
        >
          Paginas <div class="text-base text-black">{libro.paginas}</div>
        </li>
      </ul>
      <p>
        Temas:
        {#each libro.temas as tema}
          <a class="text-blue-700 underline" href="#">{tema}</a>{", "}
        {/each}
      </p>
    </main>
  </div>
{/if}
