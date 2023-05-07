import { client } from ".."

export  const getPosts = async () =>  {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export  const getBanner = async () =>  {
  const posts = await client.fetch('*[_type == "banner"]')
  return posts
}


export  const getServices = async () =>  {
  const posts = await client.fetch('*[_type == "services"]')
  return posts
}

export  const getsectionList = async () =>  {
  const data = await client.fetch('*[_type == "section2List"]')
  return data
}

export  const getSection2Heading = async () =>  {
  const data = await client.fetch('*[_type == "section2"]')
  return data
}