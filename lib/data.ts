export type Post = {
    id: string
    title: string
    desc: string
    date: string
}

let posts: Post[] = []

export const getPosts = () => posts

export const getPostById = (id: string) => {
    return posts.find(post => post.id === id)
}

export const addPost = (post: Post) => {
    posts.push(post)
    return post
}

export const updatePost = (
    id: string,
    title: string = '',
    desc: string = ''
) => {
    let thePost
    for (let post of posts) {
        if (post.id === id) thePost = post
    }
    if (!thePost) throw new Error('Unable to find post')
    if (title) thePost.title = title
    if (desc) thePost.desc = desc
}

export const deletePost = (id: string) => {
    posts = posts.filter(post => post.id !== id)
    return 'Success'
}
