// import { getPost } from '@/lib/content-api'
// import ReactMarkdown from 'react-markdown'

// export const revalidate = 10 // ISR

// export default async function PostPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params
//   const post = await getPost(slug)

//   if (!post) {
//     return (
//       <main style={{ padding: 24 }}>
//         <h1>Not found</h1>
//       </main>
//     )
//   }

//   return (
//     <main style={{ padding: 24 }}>
//       <h1>{post.title}</h1>
//       <ReactMarkdown>{post.content}</ReactMarkdown>
//     </main>
//   )
// }
import { getPost } from '@/lib/content-api'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </article>
  )
}
