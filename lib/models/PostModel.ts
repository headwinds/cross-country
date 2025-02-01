export type PostModel = {
  title: string;
  description: string;
  content: string;
  blogpost_type: string;
  slug: string;
  user_account_id: string;
  status: string;
};

export const createPost = (data: Partial<PostModel> = {}): PostModel => ({
  title: data.title ?? "",
  description: data.description ?? "",
  content: data.content ?? "",
  blogpost_type: data.blogpost_type ?? "",
  slug: data.slug ?? "",
  user_account_id: data.user_account_id ?? "",
  status: data.status ?? "",
});
