import React from "react";
import {
  Wallpaper,
  Wrapper,
  Column,
  TextInput,
  SubHeadline,
  Link,
  List,
  ListItem,
  Row,
  Paragraph,
} from "../../..";


type BlogModel = {
  url: string;
  title: string;
  updated_at: string;
};

const defaultBlogpostModel = {
  url: "default",
  title: "default",
  updated_at: "March 19, 2024",
};

const BlogpostListItem = ({ postModel = defaultBlogpostModel }) => {
  const { url, title, updated_at } = postModel;
  return (
    <ListItem>
      <Row>
        <Link href={url}>{title}</Link>
        <Paragraph customStyle={{ marginLeft: 8, fontSize: 12 }}>
          {updated_at}
        </Paragraph>
      </Row>
    </ListItem>
  );
};

interface BlogPostListProps {
  blogPostList: BlogModel[];
}

const BlogPostList = ({blogPostList}) => {
  // get from route

  const blogPostListItems = blogPostList.map((postModel) => (<BlogpostListItem postModel={postModel} />);

  return <List>{blogPostListItems}</List>;
};

export default BlogPostList;
