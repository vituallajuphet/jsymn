import { client } from ".."

export  const getPosts = async () =>  {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}