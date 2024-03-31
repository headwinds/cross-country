import React from "react";
import {
  Wallpaper,
  Wrapper,
  Column,
  TextInput,
  Link,
  List,
  ListItem,
  Row,
  Paragraph,
} from "../../../";

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

interface BlogProps {
  // Define your component props here
}

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

  const blopostListItems = [
    <BlogpostListItem postModel={defaultBlogpostModel} />,
    <BlogpostListItem postModel={defaultBlogpostModel} />,
    <BlogpostListItem postModel={defaultBlogpostModel} />,
  ];

  return (
    <Wrapper>
      <Wallpaper>
        <Column>
          <List>{blopostListItems}</List>
        </Column>
      </Wallpaper>
    </Wrapper>
  );
};

export default Blog;
