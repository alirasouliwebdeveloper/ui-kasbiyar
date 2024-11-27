import { AvatarOption } from "@/types/avatar"

export const mockAvatarOptions: AvatarOption[] = [
  {
    id: "hair-1",
    category: "HAIR",
    name: "موی کوتاه",
    imageUrl: "/images/avatars/hair/short.svg",
    unlockRequirement: 0,
    isUnlocked: true
  },
  {
    id: "hair-2",
    category: "HAIR",
    name: "موی بلند",
    imageUrl: "/images/avatars/hair/long.svg",
    unlockRequirement: 10,
    isUnlocked: false
  },
  // Add more options for each category...
]
