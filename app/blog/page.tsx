import { getPosts } from '@/lib/content-api'

export const revalidate = 10 // ISR: refresh cache after 10 seconds (testing)

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main style={{ padding: 24 }}>
      <h1>Blog</h1>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`}>{p.title}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
