import {Record} from "immutable";
// import QuestModel from "./QuestModel";

const BookModel = Record({
  title: 'generic book',
  synopsis: '',  
  started_at: new Date(),
  completed_at: new Date(),
  progress: 0,
  chapterSet: [], 
});

export default BookModel;