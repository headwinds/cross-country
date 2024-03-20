import * as React from "react";
import { useState } from "react";
import styles from "./blog-post.module.css";
import PostModel from "../../../../models/PostModel";
import { Card, TextArea, Button, Form, Column, Paragraph } from "../../..";
import { BlogPostProps } from "./blog-post.types";
import blogPostMachine from "./blog-post-machine";

const initialState = {
  text: "",
};

const BlogPost = ({
  goldLeafModel = null,
  dataTestId = "golf-leaf-view",
  user,
}: BlogPostProps) => {
  const [state, setState] = useState(initialState);
  const onTextChange = (text) => {
    // https://www.perplexity.ai/search/Can-you-provide-BfNAuexFRJG2xaFX8._qFg?s=c
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const plainText = doc.body.textContent;

    setState({ ...state, text: plainText });
  };

  // POST the blog
  const postBlog = async (text, id) => {
    if (!user) {
      // dispatch an event to show a message to the user
      return null;
    }
    const url = `http://127.0.0.1:5000/api/blog`;

    const newBlog = new PostModel({
      title: "Hello",
      description: "description here",
      content: text,
      blogpost_type: "common",
      slug: "french",
      user_account_id: id,
      status: "draft",
    });

    const plainObject = newBlog.toObject();

    console.log("sending plainObject: ", plainObject);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newBlog.toObject()),
    };
    try {
      const response = await fetch(url, options);
      console.log("response: ", response);
      if (response?.ok) {
        // const { blogposts } = await response.json();
        //return blogposts;
      }
    } catch (err) {
      console.log("error creating the post ", err);
      return [];
    }
  };

  // GET the blog
  const getBlog = async (id) => {
    if (!user) {
      // dispatch an event to show a message to the user
      return null;
    }
    const url = `http://127.0.0.1:5000/api/blog?blogId=${id}`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      if (response?.ok) {
        const { blogposts } = await response.json();
        return blogposts;
      }
    } catch (err) {
      console.log("error getting the response in the post ", err);
      return [];
    }
  };

  const onSaveClick = () => {
    console.log("GoldLeafPost about to save...", state);
    const { text } = state;
    const { id } = { id: "1" };
    postBlog(text, id);
  };

  return (
    <Form>
      <Card
        customClass={styles.blogPost}
        dataTestId={dataTestId}
        customStyle={{ height: "auto", width: 370, background: "whitesmoke" }}
      >
        <TextArea onTextChange={onTextChange} value={state.text} />
        <Button onClick={onSaveClick}>Save</Button>
      </Card>
      <Card>
        About to send...
        <Column>
          <Paragraph>Text: {state.text}</Paragraph>
        </Column>
      </Card>
    </Form>
  );
};
export default BlogPost;
