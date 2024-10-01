<script lang="ts">
  import type { libro, tema } from "@library/constants/ApiLibrosTypes";
  import axios from "axios";
  import { onMount } from "svelte";

  export let id;
  let libro: libro;
  let autor: string;
  let temas: tema[];

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

    axios
      .get(`http://localhost:8000/Autores/${id}/`)
      .then((res) => res.data)
      .then((data) => {
        autor = data.nombre_autor;
      });

    axios
      .get(`http://localhost:8000/Temas/`)
      .then((res) => res.data)
      .then((data) => {
        temas = data.map((d: any) => ({
          id: d.id,
          tema: d.nombre_tema,
        }));
      });
  });
</script>

{#if libro === undefined || autor === undefined || temas === undefined}
  <span class="text-3xl font-bold h-screen text-center"> Loading... </span>
{:else}
  <div class="grid h-screen grid-cols-[1fr_3fr] p-6 gap-6">
    <aside class="flex flex-col">
      <div class="border border-gray-400 rounded-lg flex flex-col p-4 gap-4">
        <img
          class="rounded-md"
          src={libro.portada}
          alt={"Portada del libro " + libro.titulo}
        />
        {#if libro.disponibilidad}
          <a
            href={libro.linkReferencia}
            class="bg-emerald-600 px-4 py-2 rounded text-center text-xl font-bold border-2 border-emerald-500 text-white hover:bg-emerald-500 hover:border-emerald-400"
            >Comprar</a
          >
        {:else}
          <a
            href="#"
            class="bg-red-600 px-4 py-2 rounded text-center text-xl font-bold border-2 border-red-500 text-white hover:bg-red-500 hover:border-red-400"
            >Agotado</a
          >
        {/if}
      </div>
    </aside>
    <main class="flex flex-col">
      <h2 class="text-3xl font-bold">{libro.titulo}</h2>
      <h3 class="text-xl italic text-gray-700">{libro.subtitulo}</h3>
      <span class="mb-4 block">
        by <a class="text-blue-700 underline" href="#">{autor}</a>
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
          <a class="text-blue-700 underline" href="#">
            {temas.filter((t) => t.id == tema)[0].tema}
          </a>{", "}
        {/each}
      </p>
    </main>
  </div>
{/if}
