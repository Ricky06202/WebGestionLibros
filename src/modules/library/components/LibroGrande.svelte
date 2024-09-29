<script lang="ts">
  import type { libro } from "@library/constants/ApiLibrosTypes";
  import Icon from "@iconify/svelte";

  export let libro: libro;
</script>

<a
  class="grid w-60 rounded-lg gap-2 shadow-xl bg-zinc-300 group overflow-hidden"
  href={"/" + libro.id}
>
  <div class="flex justify-center bg-zinc-200 h-60">
    <img src={libro.portada} alt={"Portada de libro: " + libro.titulo} />
  </div>
  <div class="px-4">
    <h3 class="text-lg text-center group-hover:underline">{libro.titulo}</h3>
    <span class="text-center block font-light">by {libro.autor}</span>
  </div>
  <div class="flex justify-between px-4">
    <div class="flex flex-col items-center">
      <Icon class="text-3xl" icon="healthicons:register-book" />
      <span>{libro.paginas}</span>
    </div>
    <div class="flex flex-col items-center">
      <Icon class="text-3xl" icon="healthicons:dollar" />
      <span>{libro.precio}</span>
    </div>
    <div class="flex flex-col items-center">
      <Icon class="text-3xl" icon="healthicons:star-medium" />
      <span>{Math.trunc(libro.rating)}</span>
    </div>
  </div>
</a>
