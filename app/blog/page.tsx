import { getPosts } from '@/lib/content-api'
import Link from 'next/link'

export const revalidate = 60

export default async function Blog() {
  const posts = await getPosts()

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(p => (
        <Link key={p.slug} href={`/blog/${p.slug}`}>
          {p.title}
        </Link>
      ))}
    </div>
  )
}
