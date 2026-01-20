// export type Post = {
//   slug: string
//   title: string
//   content: string
// }

// export async function getPosts(): Promise<Post[]> {
//   const res = await fetch(`${process.env.CONTENT_API_URL}/api/posts`)
//   if (!res.ok) return []
//   return res.json()
// }

// export async function getPost(slug: string): Promise<Post | null> {
//   const res = await fetch(`${process.env.CONTENT_API_URL}/api/posts/${slug}`)
//   if (!res.ok) return null
//   return res.json()
// }
export type Post = {
  slug: string
  title: string
  content: string
}

const BASE = process.env.CONTENT_API_URL!

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE}/api/posts`, {
    next: { revalidate: 60 },
  })
  return res.json()
}

export async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(`${BASE}/api/posts/${slug}`, {
    next: { revalidate: 60 },
  })
  return res.json()
}
