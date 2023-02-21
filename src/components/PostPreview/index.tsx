import Link from 'next/link'
import Author from '@/interfaces/author'
import DateFormatter from '@/components/DateFormatter'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <hr />
        </>
    )
}

export default PostPreview