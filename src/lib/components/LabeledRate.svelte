<script>
   import { onMount } from "svelte";

   /** @type {string} */
   export let label;

   /** @type {number} */
   export let rate;

   /** @type {number} */
   export let rateLimit = 5;

   /** @type {Array<number>} */
   let rateArray = [];

   onMount(() => {
      rateArray = [
         ...Array(rate).fill(1),
         ...Array(rateLimit - rate).fill(0)
      ];
   })
</script>

<div class="flex flex-row justify-between items-center">
   <span class="text-amber-600 uppercase animate-typewritter">{ label.padEnd(26, '.') }</span>
   <div class="flex flex-row gap-x-1">
      {#each rateArray as rateUnit}
         {#if rateUnit === 1}
            <span class="block h-3 w-2 border border-transparent bg-amber-500 animate-blink"></span>
         {:else}
            <span class="block h-3 w-2 border border-amber-800"></span>
         {/if}
         {/each}
      </div>
</div>