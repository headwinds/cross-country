import { mockResponse } from '../__mocks__/response';
import { convertToPortholeBranches } from '../../../../../utils/golds/feed-util';
const feed_responses = mockResponse.feed_responses;

/*
  {
      author: 'lea zeitoun I designboom',
      author_detail: {
        name: 'lea zeitoun I designboom',
      },
      authors: [
        {
          name: 'lea zeitoun I designboom',
        },
      ],
      comments:
        'https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/#respond',
      guidislink: false,
      id: 'https://www.designboom.com/?p=1005242',
      link: 'https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/',
      links: [
        {
          href: 'https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/',
          rel: 'alternate',
          type: 'text/html',
        },
      ],
      meta: {
        link: 'https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/',
        title: 'curiosity sculpts a blue labyrinth of onyx slabs within m-i-d’s concept store in kobe',
      },
      published: 'Fri, 14 Jul 2023 14:45:45 +0000',
      published_parsed: [2023, 7, 14, 14, 45, 45, 4, 195, 0],
      slash_comments: '0',
      summary:
        '<img src=\'\' /><br/><p>vertical slabs of different heights spread throughout the concept store, creating a playfully arbitrary layout. </p>\n<p>The post <a rel="nofollow" href="https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/">curiosity sculpts a blue labyrinth of onyx slabs within m-i-d&#8217;s concept store in kobe</a> appeared first on <a rel="nofollow" href="https://www.designboom.com">designboom | architecture &amp; design magazine</a>.</p>',
      summary_detail: {
        base: 'https://www.designboom.com/feed/',
        language: null,
        type: 'text/html',
        value:
          '<img src=\'\' /><br/><p>vertical slabs of different heights spread throughout the concept store, creating a playfully arbitrary layout. </p>\n<p>The post <a rel="nofollow" href="https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/">curiosity sculpts a blue labyrinth of onyx slabs within m-i-d&#8217;s concept store in kobe</a> appeared first on <a rel="nofollow" href="https://www.designboom.com">designboom | architecture &amp; design magazine</a>.</p>',
      },
      tags: [
        {
          label: null,
          scheme: null,
          term: 'architecture',
        },
        {
          label: null,
          scheme: null,
          term: 'interiors',
        },
        {
          label: null,
          scheme: null,
          term: 'architecture in japan',
        },
        {
          label: null,
          scheme: null,
          term: 'curiosity',
        },
        {
          label: null,
          scheme: null,
          term: 'marble and stone design',
        },
        {
          label: null,
          scheme: null,
          term: 'retail interiors',
        },
      ],
      title: 'curiosity sculpts a blue labyrinth of onyx slabs within m-i-d’s concept store in kobe',
      title_detail: {
        base: 'https://www.designboom.com/feed/',
        language: null,
        type: 'text/plain',
        value: 'curiosity sculpts a blue labyrinth of onyx slabs within m-i-d’s concept store in kobe',
      },
      wfw_commentrss:
        'https://www.designboom.com/architecture/blue-labyrinth-onyx-slabs-curiosity-m-i-d-daimaru-kobe-store-japan-07-14-2023/feed/',
    }
    },

*/

const keywords = ["cabin", "carbon", "climate", "emissions", "greenhouse", "warming", "global", "temperature", "atmosphere", "methane", "dioxide", "pollution", "energy", "fossil", "fuel", "electricity", "solar", "wind", "power", "renewable", "nuclear", "hydroelectric", "geothermal", "biofuel", "coal", "oil", "gas", "deforestation", "agriculture", "industry", "transportation", "waste", "recycling", "sustainability", "sustainable", "ecosystem", "ecosystems", "ecology", "environment", "environmental", "conservation", "conservancy"];

// we need to rank the responses by content 
const rank = (content) => {
    // how many keywords are in each property of the content
    const countMap = {
        title: 0,
        summary: 0,
        description: 0,
        text: 0,
        tags: 0,
    }
    // we need to count the number of keywords in each property of the content
    const entries = Object.entries(content);

    const updatedCountMap = (word) => {
      if (!countMap[word]) {
        countMap[word] = 1;
      } else {
          countMap[word] += 1;
      }
    }

    for (const [key, value] of entries) {
        if (key === "title") {
            const words = value.split(" ");
            words.forEach((word) => {
                if (keywords.includes(word)) {
                    countMap[key] += 1;
                    updatedCountMap(word)
                }
            });
        }
        // count the keywords in the summary
        if (key === "summary" || key === "description" || key === "text") {
            const words = value.split(" ");
            words.forEach((word) => {
                if (keywords.includes(word)) {
                    countMap[key] += 1;
                    updatedCountMap(word)
                }
            });
        }
        // count the keywords in the tags
        if (key === "tags") {
            value.forEach(({term}) => {
                if (term && keywords.includes(term)) {
                    countMap[key] += 1;
                    updatedCountMap(term)
                }
            });
        }

    }

    console.log(countMap)

    const finalCount = Object.values(countMap).reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    if (typeof finalCount === "number" && !isNaN(finalCount)) {
        return finalCount;
    }
    return 0;
} 

const createDataset = () => {

    // filter out any posts that are published before 2022
    const filtered = feed_responses.filter((item) => {
        const date = new Date(item.published);
        return date?.getFullYear() > 2022;
    });
    
    // sorty feed_responses by date published
    const sortedByPublishedDate = filtered.sort((a, b) => {
        return new Date(a.published) - new Date(b.published);
    });

    // convert the feed_responses to porthole branches
    const branches = convertToPortholeBranches(sortedByPublishedDate);
    
    return branches.map((item) => {
       
      return {x: item.publishedDate, y: rank(item), model: item};
    });
}

export const dataset = createDataset();
