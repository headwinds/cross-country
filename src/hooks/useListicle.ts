import { useEffect, useState, useCallback, useRef } from 'react';

type ListicleItems = {
  title: string;
  urls: string[];
}[];

const useListicle = ({ listicle }: { listicle: string }) => {
  const [listicleItems, setListicleItems] = useState<ListicleItems>([]);

  const parseListicle = useCallback(() => {
    console.log('useListicle.ts: listicle: ', typeof listicle);
    const arr: string[] = listicle?.split('\n\n');

    console.log('useListicle.ts: arr: ', arr);

    const listicleArray: ListicleItems = arr.map(item => {
      console.log('useListicle.ts: item ->: ', item);
      /*
      item logs as:
       ML
        https://styledrop.github.io/
        https://www.haihai.ai/gpt-gdrive/
        https://towardsdatascience.com/a-gentle-intro-to-chaining-llms-agents-and-utils-via-langchain-16cd385fca81
        https://tsmatz.wordpress.com/2023/03/07/react-with-openai-gpt-and-langchain/
        https://arxiv.org/pdf/2210.03629.pdf
        https://voyager.minedojo.org/
        the first link is the title, the rest are the urls
        so create an object with the title and the collections of urls like {title: string, urls: string[]}
      */
      const titleUrlCollection: { title: string; urls: string[] } = {
        title: '',
        urls: [],
      };
      const titleUrlArray: string[] = item.split('\n');
      titleUrlCollection.title = titleUrlArray[0];
      titleUrlCollection.urls = titleUrlArray.slice(1);
      return titleUrlCollection;
    });

    setListicleItems(listicleArray);
  }, []);

  useEffect(() => {
    if (listicle) {
      parseListicle();
    }
  }, []);

  return listicleItems;
};

export default useListicle;
