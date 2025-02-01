export type BookModel = {
  title: string;
  synopsis: string;
  started_at: Date;
  completed_at: Date;
  progress: number;
  chapterSet: any[]; // You might want to specify a more specific type for chapters
};
