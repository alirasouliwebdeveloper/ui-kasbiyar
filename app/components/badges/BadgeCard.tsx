import { Badge } from "@/types/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface BadgeCardProps {
  badge: Badge;
  progress?: number;
}

export function BadgeCard({ badge, progress = 0 }: BadgeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-2">
          <img src={badge.icon} alt={badge.name} className="w-full h-full" />
        </div>
        <h3 className="font-bold">{badge.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{badge.description}</p>
        <Progress value={progress} className="w-full" />
        <p className="text-xs text-center mt-2 text-muted-foreground">
          {progress}% تکمیل شده
        </p>
      </CardContent>
    </Card>
  )
}
