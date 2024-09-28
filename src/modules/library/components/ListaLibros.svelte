<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import LibroGrande from "./LibroGrande.svelte";
  import LibroMediano from "./LibroMediano.svelte";
  import LibroPequeo from "./LibroPequeño.svelte";

  export let libros: libro[];
  let tamano: number = 3;
</script>

<section class="flex flex-wrap gap-4 justify-center">
  {#each libros as libro}
    {#if tamano === 1}
      <LibroGrande {libro} />
    {:else if tamano === 2}
      <LibroMediano {libro} />
    {:else}
      <LibroPequeo {libro} />
    {/if}
  {/each}
</section>
