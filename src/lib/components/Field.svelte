<script>
   /** @type {string} */
   export let title;
   let animation = `animate-[start_3s_steps(${ title.length },end)]`;
</script>

<fieldset class={`text-amber-50 border border-amber-600 p-3 w-full ${ $$restProps.class }`}>
   <legend class={`text-amber-500 px-2 ml-1 -mb-2 uppercase animate-typewritter`}>{ title }</legend>
   <slot />
</fieldset>