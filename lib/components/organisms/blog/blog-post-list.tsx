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
import { BlogType } from "./blog.types";

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
  blogPostList: BlogType[];
}

const BlogPostList = ({ blogPostList }: BlogPostListProps) => {
  // get from route

  const blogPostListItems = blogPostList.map((postModel) => (
    <BlogpostListItem postModel={postModel} />
  ));

  return <List>{blogPostListItems}</List>;
};

export default BlogPostList;
