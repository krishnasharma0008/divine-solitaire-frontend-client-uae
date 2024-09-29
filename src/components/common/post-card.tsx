export interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => (
  <div className="w-200 bg-gray-100 lg:max-w-sm">
    <div className="p-4">
      <h4 className="text-16 font-normal text-black  justify-center items-center">
        {title}
      </h4>
      <p className="mb-2 leading-normal justify-center items-center">
        {content}
      </p>
    </div>
  </div>
);

export default PostCard;
