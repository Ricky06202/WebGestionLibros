<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import LibroGrande from "./LibroGrande.svelte";
  import LibroMediano from "./LibroMediano.svelte";
  import LibroPequeo from "./LibroPequeño.svelte";
  import { bookListSize, bookList } from "@library/store/bookStore";

  let libros = bookList;
  let tamano = bookListSize;

  console.log(libros);
</script>

<section class="flex flex-wrap gap-4 justify-center">
  {#if $libros.length === 0}
    <span class="text-3xl font-bold h-screen text-center"> Loading... </span>
  {:else}
    {#each $libros as libro}
      {#if $tamano == 1}
        <LibroGrande {libro} />
      {:else if $tamano == 2}
        <LibroMediano {libro} />
      {:else}
        <LibroPequeo {libro} />
      {/if}
    {/each}
  {/if}
</section>
