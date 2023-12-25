export const DATA = {
   PERSONAL_INFORMATION: {
      title: 'Personal information',
      items: [
         {
            label: 'NAME',
            detail: 'Henry Bastos da Silva'
         },
         {
            label: 'DATE_OF_BIRTH',
            detail: '10/09/2002'
         },
         {
            label: 'ROLE',
            detail: 'Full-Stack Developer'
         }
      ]
   },
   SKILLS: {
      title: 'SKILLS',
      rateLimit: 5,
      items: [
         {
            label: 'SVELTEKIT',
            rate: 4
         },
         {
            label: 'VUEJS',
            rate: 3
         },
         {
            label: 'REACTJS',
            rate: 2
         },
         {
            label: 'JAVASCRIPT',
            rate: 4
         },
         {
            label: 'TAILWINDCSS',
            rate: 4
         },
         {
            label: 'SHADCN-SVELTE',
            rate: 3
         },
         {
            label: 'SQLITE-3',
            rate: 2
         }
      ]
   },
   REPOSITORIES: {
      title: 'REPOSITORIES',
      items: [
         {
            title: 'shadcn-svelte-sqlite-3',
            detail: 'A simple project using shadcn-svelte and better-sqlite3, with SvelteKit.',
            stack: [
               {
                  label: 'svelte',
                  percentage: 64.5
               },
               {
                  label: 'typescript',
                  percentage: 22.7
               },
               {
                  label: 'javascript',
                  percentage: 10.1
               },
               {
                  label: 'css',
                  percentage: 2.2
               },
               {
                  label: 'html',
                  percentage: 0.5
               },
            ],
            ssh: 'git@github.com:henrybastos/shadcn-sqlite3.git',
            link: 'https://github.com/henrybastos/shadcn-sqlite3'
         },
         {
            title: 'flow-builder',
            detail: 'A graphical interface for building Puppeteer automation flows.',
            stack: [
               {
                  label: 'javascript',
                  percentage: 48.4
               },
               {
                  label: 'svelte',
                  percentage: 46.5
               },
               {
                  label: 'css',
                  percentage: 4.8
               },
               {
                  label: 'html',
                  percentage: 0.3
               }
            ],
            ssh: 'git@github.com:henrybastos/flow-builder.git',
            link: 'https://github.com/henrybastos/flow-builder'
         }
      ]
   },
   HOBBIES: {
      title: 'HOBBIES',
      items: [
         '3D_MODELING', 
         'GRAPHIC_DESIGN', 
         'CAD_DESIGN', 
         'VIDEO_EDITING', 
         'MOTION_DESIGN', 
         'GAMING', 
      ]
   }
}