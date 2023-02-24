//Overview: hook to use contentful content 

import { createClient } from "contentful"

const useContentfulTemplates = () => {

  const client = createClient({
    space: "e607chaai2ar",
    accessToken: process.env.REACT_APP_SECRET_ACCESS_TOKEN,
    host: "preview.contentful.com"
  })

  const getTemplates = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "template",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const template = item.fields.templateTitle.fields;
        return {
          ...item.fields,
          template
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching templates ${error}`);
    }
  };
  return { getTemplates }
}

export default useContentfulTemplates