// import { revalidatePath } from 'next/cache'
// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   const { secret, slug } = await request.json()

//   // simple security
//   if (secret !== process.env.REVALIDATE_SECRET) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   // revalidate blog list + specific post
//   revalidatePath('/blog')
//   revalidatePath(`/blog/${slug}`)

//   return NextResponse.json({ revalidated: true })
// }
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { secret, slug } = await req.json()

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  revalidatePath('/blog')
  revalidatePath(`/blog/${slug}`)

  return NextResponse.json({ ok: true })
}
