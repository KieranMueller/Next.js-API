import { addPost, getPosts } from '@/lib/data'
import { NextResponse } from 'next/server'

export const GET = async (req: Request, res: Response) => {
    try {
        const posts = getPosts()
        return NextResponse.json(posts)
    } catch (e) {
        return NextResponse.json(
            { message: 'error... ', e },
            {
                status: 500,
            }
        )
    }
}

export const POST = async (req: Request, res: Response) => {
    const { title, desc } = await req.json()
    try {
        const post = {
            title,
            desc,
            date: new Date().toString(),
            id: Date.now().toString(),
        }
        addPost(post)
        return NextResponse.json(post, { status: 201 })
    } catch (e) {
        return NextResponse.json(
            { message: 'error... ', e },
            {
                status: 500,
            }
        )
    }
}
