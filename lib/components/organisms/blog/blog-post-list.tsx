import { Link, List, ListItem, Paragraph, Row } from "../../..";
import { BlogPostProps } from "./blog-post/blog-post.types";

const defaultBlogpostModel: Partial<BlogPostProps> = {
  url: "default",
  title: "default",
  updated_at: "March 19, 2024",
};

const BlogpostListItem = ({ postModel = defaultBlogpostModel }) => {
  const { url, title, updated_at } = postModel;
  return (
    <ListItem>
      <Row>
        <Link url={url}>{title}</Link>
        <Paragraph customStyle={{ marginLeft: 8, fontSize: 12 }}>
          {updated_at}
        </Paragraph>
      </Row>
    </ListItem>
  );
};

interface BlogPostListProps {
  blogPostList: BlogPostProps[];
}

const BlogPostList = ({ blogPostList }: BlogPostListProps) => {
  // get from route

  const blogPostListItems = blogPostList.map((postModel) => (
    <BlogpostListItem postModel={postModel} />
  ));

  return <List>{blogPostListItems}</List>;
};

export default BlogPostList;
