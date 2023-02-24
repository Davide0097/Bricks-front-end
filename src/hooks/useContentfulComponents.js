//Overview: hook to use contentful content 

import { createClient } from "contentful"

const useContentfulComponents = () => {

  const client = createClient({
    space: "e607chaai2ar",
    accessToken: process.env.REACT_APP_SECRET_ACCESS_TOKEN,
    host: "preview.contentful.com"
  })

  const getComponents = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "component",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const component = item.fields.componentName.fields;
        return {
          ...item.fields,
          component
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching templates ${error}`);
    }
  };
  return { getComponents }
}

export default useContentfulComponents