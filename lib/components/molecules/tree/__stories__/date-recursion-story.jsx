import Tree from "../tree";
import { useState } from "react";

/*
const json = {
  a: 1,
  date: `Fri, 02 Feb 2024 02:07:54 GMT`,
  children: [
    {
      b: 2,
      createAt: `Fri, 02 Feb 2024 02:07:54 GMT`,
      third: {
        c: 3,
        updatedAt: `Fri, 02 Feb 2024 02:07:54 GMT`,
      },
    },
    {
      b: 2,
      createAt: `Fri, 02 Feb 2024 02:07:54 GMT`,
      third: {
        c: 3,
        updatedAt: `Fri, 02 Feb 2024 02:07:54 GMT`,
      },
    },
  ],
};
*/

const json = {
    a: 1,
    date: `Fri, 02 Feb 2024 02:07:54 GMT`,
    second: {
        b: 2,
        createAt: `Fri, 02 Feb 2024 02:07:54 GMT`,
        third: {
            c: 3,
            updatedAt: `Fri, 02 Feb 2024 02:07:54 GMT`,
        },
    }
};
// https://www.youtube.com/watch?v=uaLDj8uyXi0

const DateRecursionTreeStory = () => {

 const updateJson = (obj) => {
    // exit if the node is date
    if (isIsoDate(obj)) {
        return new Date(obj)
    }
    // a or b
    if (typeof obj === 'string' ) {
        return obj;
    }
    // recurse
    const nextObj = {};
    if ( const [key, value] of Object.entries(obj)) {
        nextObj[key] = updateJson(value);
    };
     
    return nextObj;
 }

 const updatedJson = updateJson(json);

  return <div>tree here</div>;
};

export default DateRecursionTreeStory;
