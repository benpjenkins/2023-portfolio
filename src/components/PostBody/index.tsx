
type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className='markdown'>
      <div
        className={'markdown'}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    </div>
  );
};

export default PostBody;
