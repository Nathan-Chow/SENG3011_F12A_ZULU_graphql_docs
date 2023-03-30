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
**F12A_ZULU FinConnect Guide**

**Fetch API** 🐕\n
This API lets you fetch historical data from a company from a given start date and return a dataset json object. (Note: The earliest start date is from 01-01-2010.) 
An example query is as follows:\n
    {
      "companyTicker": "googl",
      "start_date": "2010-01-01"
    }

**Upload API** ⬆️\n
This API will upload the dataset json object which you have requested from fetch. It will also now allow you to query the data for specific attributes from our export service using GraphQL.
Guide for this is to just copy or take the data retrieved from the Fetch API and just set it as the body of the request to upload. No need to change the data here.

**Export API** ⛴️\n
This API is queried using GraphQL and will query and resolve the specific data you want granted that it exists in the database. (So you will firstly need to call fetch then upload the data to the database using the Fetch API and then the Upload API.)
An example query is as follows:\n
    {
      "query": "{company(companyTicker:\"googl\", start: "2020-01-01", end: "2023-01-01) 
      {events {attribute {open, high, low, close, date}}}}"
    }

The query will return the desired data attributes for google between the dates 2020-01-01 to 2023-01-01.\n

*Note: Dates should be parsed in the format (YYYY-MM-DD).*

*PS: We currently plan on combining the Fetch and Upload into a single endpoint however there are some issues with lambda timeouts so we will most likely deliver this some time next sprint.*
            `
        }],
      },
    },
  }