// const contentful = require('contentful')
import { createClient , ContentfulClientApi } from 'contentful'

const config = {
    space: 'aoglh7t49eu5',
    accessToken: 'W57H2oIuWAlbOrjyiBwAlxFb5zHpLk0tlRRSuUuHsuk'
};

class Contentful {

  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: config.space,
      accessToken: config.accessToken
    });
  }

}

export default Contentful;