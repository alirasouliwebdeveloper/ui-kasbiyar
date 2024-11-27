'use client'

import { Card, CardContent } from '@/components/ui/card'
import { BadgeGrid } from '@/app/components/badges/BadgeGrid'
import { getUserBadges } from '@/app/utils/badges'
import { useEffect, useState } from 'react'
import { UserBadge } from '@/types/badge'
import { LoadingState } from '@/app/components/shared/LoadingState'

interface UserBadgesProps {
  id: string
}

export function UserBadges({ id }: UserBadgesProps) {
  const [badges, setBadges] = useState<UserBadge[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadBadges = async () => {
      try {
        const userBadges = await getUserBadges(id)
        setBadges(userBadges)
      } catch (error) {
        console.error('Error loading badges:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadBadges()
  }, [id])

  if (isLoading) {
    return <LoadingState text="در حال بارگذاری نشان‌ها..." />
  }

  return (
    <Card>
      <CardContent className="p-6">
        {badges.length === 0 ? (
          <p className="text-center text-muted-foreground">هنوز نشانی کسب نشده است</p>
        ) : (
          <BadgeGrid badges={badges} />
        )}
      </CardContent>
    </Card>
  )
}
