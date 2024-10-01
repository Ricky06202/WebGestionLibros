<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import Icon from "@iconify/svelte";

  export let libro: libro;
  export let autor: string;
</script>

<a
  class="grid grid-cols-8 w-full items-center rounded-lg gap-2 shadow-xl bg-zinc-300 group overflow-hidden"
  href={"/" + libro.id}
>
  <div class="flex justify-center bg-zinc-200">
    <img src={libro.portada} alt={"Portada de libro: " + libro.titulo} />
  </div>
  <h3 class=" group-hover:underline">{libro.titulo}</h3>
  <span class=" font-light flex flex-col items-center">
    <strong class="font-bold">Autor</strong>
    {autor}
  </span>
  <span class=" font-light flex flex-col items-center">
    <strong class="font-bold">Publicado</strong>
    {libro.añoPublicacion}
  </span>

  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <Icon class="text-2xl" icon="healthicons:register-book" />
      <strong class="font-bold">Paginas</strong>
    </div>
    <span>{libro.paginas}</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <Icon class="text-2xl" icon="healthicons:dollar" />
      <strong class="font-bold">Valor</strong>
    </div>
    <span>{libro.precio}</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <Icon class="text-2xl" icon="healthicons:star-medium" />
      <strong class="font-bold">Valoracion</strong>
    </div>
    <span>{libro.rating}</span>
  </div>
</a>
