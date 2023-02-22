import Link from "next/link";
import Author from "@/interfaces/author";
import DateFormatter from "@/components/DateFormatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  //   coverImage,
  date,
  excerpt,
  //   author,
  slug,
}: Props) => {
  return (
    <>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <hr />
    </>
  );
};

export default PostPreview;
