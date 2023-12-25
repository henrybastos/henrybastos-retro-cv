<script>
   /** @type {string} */
   export let label;

   /** @type {string} */
   export let detail;
</script>

<div class="flex flex-row justify-between">
   <span class="text-amber-600 uppercase animate-typewritter">{ label.padEnd(33 - detail.length, '.') }</span>
   <p class="whitespace-nowrap">{ detail }</p>
</div>