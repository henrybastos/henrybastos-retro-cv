<script>
   import { DATA } from "$lib/data";
   import Field from "$lib/components/Field.svelte";
   import LabeledItem from "$lib/components/LabeledItem.svelte";
   import LabeledRate from "$lib/components/LabeledRate.svelte";
   import Repository from "$lib/components/Repository.svelte";

   let activeHobbyIndex = 0;
   $: activeHobby = DATA.HOBBIES.items[activeHobbyIndex];

   setInterval(() => {
      activeHobby = DATA.HOBBIES.items[activeHobbyIndex];
      activeHobbyIndex++;
      if (activeHobbyIndex === DATA.HOBBIES.items.length) {
         activeHobbyIndex = 0;
      }
   }, 4000)
</script>

<aside class="flex flex-col justify-between min-w-[20rem]">
   <Field title={ DATA.PERSONAL_INFORMATION.title }>
      {#each DATA.PERSONAL_INFORMATION.items as item}   
         <LabeledItem {...item} />
      {/each}
   </Field>

   <Field title={ DATA.SKILLS.title }>
      {#each DATA.SKILLS.items as item}
         <LabeledRate {...item} />
      {/each}
   </Field>

   <Field title={ `${ DATA.HOBBIES.title } [${activeHobbyIndex + 1}/${DATA.HOBBIES.items.length}]` }>
      {#key activeHobby}
         <p class="animate-typewritter text-amber-600">{ activeHobby.padEnd(34, ' /') }</p>
      {/key}
   </Field>
</aside>
<main class="w-full">
   <Field title={ DATA.REPOSITORIES.title } class="flex flex-col gap-y-3">
      {#each DATA.REPOSITORIES.items as repo}
         <Repository {...repo} />
      {/each}
   </Field>
</main>