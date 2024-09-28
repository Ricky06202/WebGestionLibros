<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import Icon from "@iconify/svelte";

  export let libro: libro;
</script>

<a
  class="flex w-full rounded-lg gap-2 shadow-xl bg-zinc-300 group overflow-hidden"
  href={"/" + libro.id}
>
  <div class="flex justify-center bg-zinc-200 w-40">
    <img src={libro.portada} alt={"Portada de libro: " + libro.titulo} />
  </div>
  <div class="flex flex-col justify-between">
    <div class="flex flex-col gap-2">
      <h3 class="text-lg group-hover:underline">{libro.titulo}</h3>
      <span class="block font-light">
        <strong class="font-bold">Autor: </strong>
        {libro.autor}
      </span>
      <span class="block font-light">
        <strong class="font-bold">Publicado: </strong>
        {libro.añoPublicacion}
      </span>
      <span class="block font-light">
        <strong class="font-bold">Temas: </strong>
        {libro.temas}
      </span>
    </div>
    <div class="flex gap-2">
      <div class="flex items-center gap-2">
        <Icon class="text-3xl" icon="healthicons:register-book" />
        <span><strong class="font-bold">Paginas: </strong>{libro.paginas}</span>
      </div>
      <div class="flex items-center gap-2">
        <Icon class="text-3xl" icon="healthicons:dollar" />
        <span><strong class="font-bold">Valor: </strong>${libro.precio}</span>
      </div>
      <div class="flex items-center gap-2">
        <Icon class="text-3xl" icon="healthicons:star-medium" />
        <span
          ><strong class="font-bold">Valoracion: </strong>{libro.rating}</span
        >
      </div>
    </div>
  </div>
</a>
