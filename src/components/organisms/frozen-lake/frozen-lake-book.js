const book = {
    chapters: [
      {
        id: 1,
        type: 'chapter',
        title: 'Chapter 1',
        pages: [
          {
            id: 1,
            paragraphs: [
              {
                id: 1,
                text: 'You are the hunter. The warrior is the prey.',
                choices: [
                  {
                    text: 'Go to the next page',
                    type: 'button',
                  },
                ],
              },
            ],
            currentParagraphId: 1,
          },
        ],
        currentPageId: 1,
      },
    ],
    currentChapterId: 1,
  };
  
  export default book;