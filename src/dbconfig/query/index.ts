import { client } from "..";

export const getPosts = async () => {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
};

export const getBanner = async () => {
  const posts = await client.fetch('*[_type == "banner"]');
  return posts;
};

export const getServices = async () => {
  const posts = await client.fetch('*[_type == "services"]');
  return posts;
};

export const getsectionList = async () => {
  const data = await client.fetch('*[_type == "section2List"]');
  return data;
};

export const getSection2Heading = async () => {
  const data = await client.fetch('*[_type == "section2"]');
  return data;
};


export const getAllHomeData = async () => {
  const data = await client.fetch(`
    {
      'services':*[_type == "services"],
      'sectionList':*[_type == "section2List"],
      'sections': *[_type == "section2"],
      'banner': *[_type == "banner"],
      'post': *[_type == "post"],
      'events': *[_type == "events"],
      'author': *[_type == "author"],
      'pages': *[_type == "pages"],
      'homecontent': *[_type == "homecontent"],
    }
  `);

  return data;
};
