export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f97f5f55f447960b742ce6e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-twzy8xig',
                  apiId: 'de758c39-f80a-40eb-8bcd-f21ff8af4b44'
                },
                {
                  buildHookId: '5f97f5f502160360f8ca55db',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mfzt1xwh',
                  apiId: '7e5dae94-abb4-4f53-9fcc-6a68db500fa4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/R-MSC/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mfzt1xwh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
