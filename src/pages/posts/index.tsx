import { getAllPosts } from "@/lib/fileSystemApi"
import Post from '@/interfaces/posts'
import PostPreview from "@/components/PostPreview"

type Props = {
    allPosts: Post[]
}

const Posts = ({ allPosts }: Props) => {

    return (
        <>
            {allPosts.map(post => (
                <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                />
            ))}
        </>
    )
}



export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}

export default Posts