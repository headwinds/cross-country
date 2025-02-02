import React from "react";
import {
  Wallpaper,
  Wrapper,
  Column,
  SubHeadline,
  Row,
} from "@headwinds/cross-country";
import BlogPostList from "./blog-post-list";
import { BlogPostProps } from "./blog-post/blog-post.types";

/*
What do I want from a blog?

I want the ability to:
- Create a blog post which could be free text or listicle or conversation with AI!
- Edit a blog post
- Curate an image with AI
- Delete a blog post
- View a blog post
- View a list of blog posts
- Blog needs to auto save drafts so I don't lose my work or only lose a little bit of it

You can either see the blog posts route or the blog post details page 

/blogposts

OR

/blogposts/[blogpostId]

Do I want to use the word blog?! I prefer's captain's log or journal or something else. Blog is so 2000s. Even article is better for the public. 

*/

const defaultBlogpostModel = {
  url: "default",
  title: "default",
  updated_at: "March 19, 2024",
  user: null, // Add a default user property
};

export interface BlogProps {
  url: string;
  title: string;
  updated_at?: string;
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

  const blogPostList: BlogPostProps[] = [
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
