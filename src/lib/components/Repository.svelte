<script>
   import LabeledProgressBar from "$lib/components/LabeledProgressBar.svelte";
   import { slide } from "svelte/transition";

   /** @type {string} */
   export let title;

   /** @type {string} */
   export let detail;

   /** @type {Array<string>} */
   export let stack;

   /** @type {string} */
   export let ssh;

   /** @type {string} */
   export let link;

   $: isStackExpanded = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-col">
   <div class="flex flex-col border border-amber-900 hover:bg-amber-950 transition-all p-4" on:click={() => isStackExpanded = !isStackExpanded }>
      <div class="flex flex-col">
         <h3 class="uppercase text-amber-600 animate-typewritter">{ title }</h3>
         <p class="text-amber-800 animate-typewritter" >{ ssh }</p>
      </div>
      <p class="my-3">{ detail }</p>
      <!-- <p class="text-amber-800 border-t border-t-amber-800 pt-3 animate-typewritter">{ stack.join(' | ') }</p> -->
      {#if isStackExpanded}   
         <div class="border-t border-t-amber-700 pt-3 mt-3" transition:slide>
            {#each stack as lang}
               <LabeledProgressBar {...lang} />
            {/each}
         </div>
      {/if}
   </div>
   <a class="border border-amber-800 border-t-0 px-3 w-full py-1 text-center hover:bg-amber-500 hover:border-amber-500 transition-all" href={ link } target="_blank">VISIT</a>
</div>