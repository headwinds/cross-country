import React, { useState, useEffect } from 'react';
import GoldLeaf from './';
import PortholeBranchModel from '../../../models/PortholeBranchModel';

const GoldLeafPostStory = ({ config }) => {
  const [state, setState] = useState({
    posts: [],
    goldLeafModel: null,
  });

  const getScoutPostsService = async id => {
    const url = `http://127.0.0.1:5000/api/blog?blogId=${id}`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(url, options);
      if (response?.ok) {
        const { blogposts } = await response.json();
        return blogposts;
      }
    } catch (err) {
      console.log('error getting the response in the post ', err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getScoutPostsService();
      console.log('got the response in the post ', posts);

      setState({ ...state, posts });
    };
    fetchData();
  }, []);
  // Or [] if effect doesn't need props or state - we need to pass something that will trigger the effect only once and not every render!
  // if we remoed the [], it would run every time the component re-renders

  const { goldLeafModel } = state;

  return <GoldLeaf goldLeafModel={goldLeafModel} config={config} />;
};

export default GoldLeafPostStory;

/*
  /*
  const getPortholeBranchModel = (posts, index) => {
    const post = posts[index];
    const { title, description } = post;
    //const images = getImagesFromDescription(description);
   
    blogpost_type:"common"
    content: "<p>is markup <a href=\"http://google.com\">cool</a>?</p>"
    created_at: "Thu, 08 Dec 2022 13:19:07 GMT"
    description: "when searching for popular (over 10+ Github stars) React-based component library, I am unable to find any feature scss modules. 
    The best I found is https://blog.harveydelaney.com/creating-your-own-react-component-library/
    I only found that has scss which is tiny-ui and one that css module being Gesalt but none have both scss modules. Many of the top libraries don't have css at all! There are all css-in-js solutions. Most are Typescript. "
    id:3
    slug: "roguelike"
    status: "draft"
    title: "Few Component Libraries Feature SCSS modules"
    updated_at: null
    user_account_id: "14d14287-106f-47aa-82ca-77dc18d8f7e4"

    const goldLeafModel = new PortholeBranchModel(title, description);
    return goldLeafModel;
  };
*/
