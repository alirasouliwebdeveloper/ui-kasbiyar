import { UserBadge } from "@/types/badge"
import { BadgeCard } from "./BadgeCard"

interface BadgeGridProps {
  badges: UserBadge[];
}

export function BadgeGrid({ badges }: BadgeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {badges.map((badge) => (
        <BadgeCard 
          key={badge.id} 
          badge={badge} 
          progress={badge.progress} 
        />
      ))}
    </div>
  )
}
