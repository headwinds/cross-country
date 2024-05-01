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
} from "../../../";
import BlogPostList from "./blog-post-list";
import type BlogType from "./blog.types";
/*
What do I want from a blog?

I want the ability to:
- Create a blog post which could be free text or listicle
- Edit a blog post
- Delete a blog post
- View a blog post
- View a list of blog posts
- Blog needs to auto save drafts so I don't lose my work or only lose a little bit of it

You can either see the blog posts route or the blog post details page 

/blogposts

OR

/blogposts/[blogpostId]

*/

const defaultBlogpostModel = {
  url: "default",
  title: "default",
  updated_at: "March 19, 2024",
};

interface BlogProps {
  // Define your component props here
}

const Blog = (props: BlogProps) => {
  // get from route
  const isBlogPostDetail = false;

  if (isBlogPostDetail) {
    return (
      <Wrapper>
        <Wallpaper>
          <Column>put post here</Column>
        </Wallpaper>
      </Wrapper>
    );
  }

  const blogPostList: BlogType[] = [
    defaultBlogpostModel,
    defaultBlogpostModel,
    defaultBlogpostModel,
  ];

  return (
    <Wrapper>
      <Wallpaper>
        <Row>
          <Column>
            <SubHeadline>Write</SubHeadline>
          </Column>
          <Column>
            <BlogPostList blogPostList={blogPostList} />
          </Column>
        </Row>
      </Wallpaper>
    </Wrapper>
  );
};

export default Blog;
