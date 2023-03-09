import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    introspection: {
      type: 'sdl',
      paths: ['./schema.graphqls'],
    },
    website: {
      staticAssets: path.join(__dirname, 'assets'),
      output: './assets',
      type: 'url',
      template: 'carbon-multi-page',
      options: {
        appTitle: 'F12A_ZULU GraphQL documentation',
        pages: [{
          title: 'F12A_ZULU Financial data export GraphQL documentation',
          content: `
            # F12A_ZULU Financial data export GraphQL documentation
            This documents our teams GraphQL schema to assist with querying our service.
            `
        }],
      },
    },
  }