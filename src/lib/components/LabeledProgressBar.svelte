<script>
   import { onMount } from "svelte";

   /** @type {number} */
   export let percentage;

   /** @type {string} */
   export let label;

   let progressBar;
   
   onMount(() => {
      progressBar.style.borderLeftWidth = `${ (percentage / 100) * 5 }rem`;
   })
</script>

<div class="inline-flex justify-between w-full">
   <span class="uppercase text-amber-600">{ label.padEnd(38, '.') }</span>
   <div class="inline-flex items-center gap-x-2">
      <span class="text-amber-100">{ percentage }%</span>
      <span bind:this={progressBar} class="flex bg-amber-600 w-[5rem] h-4 border-l-amber-500 border border-amber-500 bg-transparent"></span>
   </div>
</div>