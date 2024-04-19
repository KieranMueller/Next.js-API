import { deletePost, getPostById, updatePost } from '@/lib/data'
import { NextResponse } from 'next/server'

export const GET = async (req: Request, res: Response) => {
    try {
        const id = req.url.split('blogs/')[1]
        const post = getPostById(id)
        if (!post)
            return NextResponse.json(
                { message: 'Unable to find post' },
                { status: 404 }
            )
        return NextResponse.json(post)
    } catch (e) {
        return NextResponse.json({ error: 'error' }, { status: 500 })
    }
}

export const PUT = async (req: Request, res: Response) => {
    try {
        const id = req.url.split('blogs/')[1]
        const { title, desc } = await req.json()
        const post = getPostById(id)
        if (!post)
            return NextResponse.json(
                { message: 'Unable to find post' },
                { status: 404 }
            )
        updatePost(id, title, desc)
        return NextResponse.json({ post })
    } catch (e) {
        return NextResponse.json({ error: 'error' }, { status: 500 })
    }
}

export const DELETE = async (req: Request, res: Response) => {
    const id = req.url.split('blogs/')[1]
    deletePost(id)
    return NextResponse.json({ message: 'success' }, { status: 200 })
}
