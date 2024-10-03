<script lang="ts">
  import type { autor, libro, tema } from "@library/constants/ApiLibrosTypes";
  import Icon from "@iconify/svelte";
  import { bookList, authorList, topicList } from "@library/store/bookStore";
  import { onMount } from "svelte";
  import { getAuthors, getBooks, getTopics } from "@library/services/apiLibros";

  export let id;
  let libro: libro;
  let autor: autor;
  let temas: tema[];
  bookList.subscribe((value) => {
    libro = $bookList.filter((libro) => libro.id == id)[0];
  });
  authorList.subscribe((value) => {
    autor = $authorList.filter((autor) => autor.id == libro.autor)[0];
    if (autor === undefined) {
      autor = {
        id: 0,
        nombre: "",
      };
    }
  });
  topicList.subscribe((value) => {
    temas = [...$topicList];
  });
  onMount(() => {
    if (
      $bookList.length === 0 ||
      $bookList.filter((libro) => libro.id == id) === undefined
    ) {
      getBooks().then((librosAPI: libro[]) => {
        bookList.set(librosAPI);
      });
    }
    if ($authorList.length === 0) {
      getAuthors().then((autoresAPI) => {
        authorList.set(autoresAPI);
      });
    }
    if ($topicList.length === 0) {
      getTopics().then((temasAPI) => {
        topicList.set(temasAPI);
      });
    }
  });
</script>

{#if $bookList.length === 0 || $authorList.length === 0 || $topicList.length === 0}
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
          <span
            class="px-4 py-2 rounded text-center text-xl font-bold border-2 flex justify-center gap-1 bg-gray-200 items-center"
          >
            <Icon class="text-3xl" icon="healthicons:dollar" />
            {libro.precio}
          </span>
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
        by <a class="text-blue-700 underline" href="#">{autor.nombre}</a>
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
        {temas
          .filter((tema) => libro.temas.includes(tema.id))
          .map((tema) => " " + tema.tema)}
      </p>
    </main>
  </div>
{/if}
