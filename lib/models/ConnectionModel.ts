export type ConnectionType = "follow" | "block" | "mute";
export type ConnectionStatus = "active" | "pending" | "declined" | "removed";

export interface ConnectionModel {
  connection_id?: string;
  follower_id?: string;
  following_id?: string;
  connection_type?: ConnectionType;
  status?: ConnectionStatus;
  group_name?: string | null;
  notify_on_posts?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ConnectionStatusResult {
  is_following: boolean;
  is_followed_by: boolean;
  is_mutual: boolean;
  is_blocked: boolean;
  is_blocked_by: boolean;
  is_muted: boolean;
}

export interface ConnectionCounts {
  follower_count: number;
  following_count: number;
}
