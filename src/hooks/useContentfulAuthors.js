//Overview: hook to use contentful content 

import { createClient } from "contentful"

const useContentfulAuthors = () => {

  const client = createClient({
    space: "e607chaai2ar",
    accessToken: process.env.REACT_APP_SECRET_ACCESS_TOKEN,
    host: "preview.contentful.com"
  })

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const author = item.fields.authorName.fields;
        return {
          ...item.fields,
          author
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };
  return { getAuthors }
}

export default useContentfulAuthors