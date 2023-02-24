//Overview: hook to use contentful content 

import { createClient } from "contentful"

const useContentful = () => {
  const aa = process.env.REACT_APP_SECRET_ACCESS_TOKEN;
  const client = createClient({
    space: "e607chaai2ar",
    accessToken: process.env.REACT_APP_SECRET_ACCESS_TOKEN || aa,

    host: "preview.contentful.com"
  })

  const getPosts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "post",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const post = item.fields.postTitle.fields;
        return {
          ...item.fields,
          post
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching posts ${error}`);
    }
  };
  return { getPosts }
}

export default useContentful





