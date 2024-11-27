import { User } from "@/types/user"
import { mockBadges } from "./mockBadges"

export const mockUser: User = {
  id: "1",
  email: "test@example.com",
  username: "ali_tehrani",
  fullName: "علی تهرانی",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ali",
  bio: "عاشق کشف رستوران‌های جدید و به اشتراک گذاری تجربیاتم با دیگران",
  location: "تهران",
  joinDate: new Date("2023-01-01"),
  reviewCount: 42,
  photoCount: 156,
  followers: 230,
  following: 185,
  isVerified: true,
  lastActive: new Date("2024-03-10"),
  badges: mockBadges.slice(0, 3).map(badge => ({
    ...badge,
    earnedAt: new Date(),
    progress: 100
  }))
}
