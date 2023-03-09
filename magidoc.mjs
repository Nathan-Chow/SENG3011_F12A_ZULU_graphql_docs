export default {
    introspection: {
      type: 'sdl',
      paths: ['./schema.graphqls'],
    },
    website: {
      template: 'carbon-multi-page',
      options: {
        appTitle: 'F12A_ZULU GraphQL documentation',
        pages: [{
          title: 'F12A_ZULU Financial data export GraphQL documentation',
          content: `
            This documents our teams GraphQL schema to assist with querying our service.
            `
        }],
      },
    },
  }