/**
 * Thread Model
 * 
 * A Thread is a container for conversations, chats, and AI interactions.
 * Similar to Perplexity threads or Slack threads.
 * 
 * Supports multi-user collaboration with role-based permissions.
 */

export type ThreadParticipant = {
  user_account_id: string;
  role: 'owner' | 'editor' | 'contributor' | 'viewer';
  joined_at?: string;
  last_viewed_at?: string | null;
};

export type ThreadModel = {
  thread_id?: string;
  user_account_id: string;
  
  // Thread metadata
  title: string | null;
  description?: string | null;
  thread_type: string; // 'chat', 'perplexity', 'email', 'support', etc.
  status: string; // 'active', 'archived', 'deleted'
  
  // Source/App information
  app?: string | null; // 'perplexity', 'openai', 'claude', 'gmail', etc.
  thread_external_id?: string | null; // External ID from source system
  url?: string | null; // Link to external thread
  
  // AI/LLM specific fields
  ai_model?: string | null; // 'sonar-pro', 'gpt-4', 'claude-3', etc.
  system_prompt?: string | null; // System prompt used for AI
  
  // Thread statistics
  message_count?: number;
  post_count?: number;
  token_count?: number | null;
  
  // Organization
  tags?: string | null; // Comma-separated tags
  involved?: string | null; // Comma-separated list of participants
  
  // Flexible metadata
  metadata?: any;
  
  // Multi-user collaboration
  participants?: ThreadParticipant[];
  
  // Timestamps
  created_at?: string;
  updated_at?: string;
  last_message_at?: string | null;
};

export type ThreadWithMessages = ThreadModel & {
  posts: Array<{
    post_id: string;
    title: string | null;
    content: string | null;
    created_at: string;
  }>;
  messages: Array<{
    comment_id: number;
    text: string;
    role: 'user' | 'assistant' | 'system' | null;
    token_count?: number | null;
    citations?: any[] | null;
    metadata?: any | null;
    created_at: string;
  }>;
};

export const createThread = (data: Partial<ThreadModel> = {}): ThreadModel => ({
  thread_id: data.thread_id,
  user_account_id: data.user_account_id ?? "",
  title: data.title ?? null,
  description: data.description ?? null,
  thread_type: data.thread_type ?? "chat",
  status: data.status ?? "active",
  app: data.app ?? null,
  thread_external_id: data.thread_external_id ?? null,
  url: data.url ?? null,
  ai_model: data.ai_model ?? null,
  system_prompt: data.system_prompt ?? null,
  message_count: data.message_count ?? 0,
  post_count: data.post_count ?? 0,
  token_count: data.token_count ?? null,
  tags: data.tags ?? null,
  involved: data.involved ?? null,
  metadata: data.metadata,
  participants: data.participants ?? [],
  created_at: data.created_at,
  updated_at: data.updated_at,
  last_message_at: data.last_message_at ?? null,
});

