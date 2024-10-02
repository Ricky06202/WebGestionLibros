<script lang="ts">
  import LibroGrande from "./LibroGrande.svelte";
  import LibroMediano from "./LibroMediano.svelte";
  import LibroPequeo from "./LibroPequeño.svelte";
  import {
    bookListSize,
    bookList,
    bookListFiltered,
  } from "@library/store/bookStore";
  import { onMount } from "svelte";
  import type { autor, tema } from "@library/constants/ApiLibrosTypes";
  import { getAuthors, getTopics } from "@library/services/apiLibros.ts";

  let libros = bookList;
  let librosFiltrados = bookListFiltered;
  let tamano = bookListSize;
  let librosAMostrar = $librosFiltrados.length === 0 ? libros : librosFiltrados;

  let autores: autor[];
  let temas: tema[];

  librosFiltrados.subscribe((value) => {
    librosAMostrar = $librosFiltrados.length === 0 ? libros : librosFiltrados;
  });

  onMount(() => {
    getAuthors().then((autoresAPI: autor[]) => {
      autores = autoresAPI;
    });
    getTopics().then((temasAPI: tema[]) => {
      temas = temasAPI;
    });
  });
</script>

<section class="flex flex-wrap gap-4 justify-center">
  {#if $librosAMostrar.length === 0 || autores === undefined || temas === undefined}
    <span class="text-3xl font-bold h-screen text-center"> Loading... </span>
  {:else}
    {#each $librosAMostrar as libro}
      {#if $tamano == 1}
        <LibroGrande
          {libro}
          autor={autores.filter((autor) => autor.id == libro.autor[0])[0]
            .nombre}
        />
      {:else if $tamano == 2}
        <LibroMediano
          {libro}
          autor={autores.filter((autor) => autor.id == libro.autor[0])[0]
            .nombre}
          {temas}
        />
      {:else}
        <LibroPequeo
          {libro}
          autor={autores.filter((autor) => autor.id == libro.autor[0])[0]
            .nombre}
        />
      {/if}
    {/each}
  {/if}
</section>
