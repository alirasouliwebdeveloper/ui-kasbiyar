import { UserBadge } from "./badge"
import { UserAvatar } from "./avatar"

export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  joinDate: Date;
  reviewCount: number;
  photoCount: number;
  followers: number;
  following: number;
  isVerified: boolean;
  lastActive: Date;
  badges?: UserBadge[];
  customAvatar?: UserAvatar;
  totalInteractions?: number;
}
