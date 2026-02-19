export type PostModel = {
  post_id?: string;
  user_account_id: string;
  title: string | null;
  content: string | null;
  description?: string;
  post_type: string;
  status: string;
  markup_type: string;
  url?: string | null;
  app?: string | null;
  involved?: string | null;
  jsonb?: any;
  
  // Thread/AI conversation specific fields
  thread_external_id?: string | null;
  ai_model?: string | null;
  token_count?: number | null;
  message_count?: number;
  tags?: string | null;
  
  // Timestamps
  created_at?: string;
  updated_at?: string;
  
  // Legacy fields (for backward compatibility)
  blogpost_type?: string;
  slug?: string;
};

export type CommentModel = {
  comment_id?: number;
  post_id: string;
  user_account_id?: string | null;
  text: string;
  
  // Message-specific fields for AI conversations
  role?: 'user' | 'assistant' | 'system' | null;
  message_external_id?: string | null;
  token_count?: number | null;
  citations?: any[] | null;
  metadata?: any | null;
  
  // Timestamps
  created_at?: string;
  updated_at?: string;
};

export const createPost = (data: Partial<PostModel> = {}): PostModel => ({
  post_id: data.post_id,
  user_account_id: data.user_account_id ?? "",
  title: data.title ?? null,
  content: data.content ?? null,
  description: data.description ?? "",
  post_type: data.post_type ?? "thread",
  status: data.status ?? "draft",
  markup_type: data.markup_type ?? "text",
  url: data.url ?? null,
  app: data.app ?? null,
  involved: data.involved ?? null,
  jsonb: data.jsonb,
  thread_external_id: data.thread_external_id ?? null,
  ai_model: data.ai_model ?? null,
  token_count: data.token_count ?? null,
  message_count: data.message_count ?? 0,
  tags: data.tags ?? null,
  created_at: data.created_at,
  updated_at: data.updated_at,
  // Legacy
  blogpost_type: data.blogpost_type,
  slug: data.slug,
});

export const createComment = (data: Partial<CommentModel> = {}): CommentModel => ({
  comment_id: data.comment_id,
  post_id: data.post_id ?? "",
  user_account_id: data.user_account_id ?? null,
  text: data.text ?? "",
  role: data.role ?? null,
  message_external_id: data.message_external_id ?? null,
  token_count: data.token_count ?? null,
  citations: data.citations ?? null,
  metadata: data.metadata ?? null,
  created_at: data.created_at,
  updated_at: data.updated_at,
});
