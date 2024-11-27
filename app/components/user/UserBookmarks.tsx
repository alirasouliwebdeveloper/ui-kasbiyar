'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { BusinessCard } from '@/app/components/business/BusinessCard'
import { getUserBookmarks } from '@/app/utils/bookmarks'
import { Business } from '@/types/business'
import { LoadingState } from '@/app/components/shared/LoadingState'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface UserBookmarksProps {
  id: string
}

export function UserBookmarks({ id }: UserBookmarksProps) {
  const [bookmarks, setBookmarks] = useState<Business[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState('recent')

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const userBookmarks = await getUserBookmarks(id, sortBy)
        setBookmarks(userBookmarks)
      } catch (error) {
        console.error('Error loading bookmarks:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadBookmarks()
  }, [id, sortBy])

  if (isLoading) {
    return <LoadingState text="در حال بارگذاری ذخیره‌شده‌ها..." />
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">کسب‌وکارهای ذخیره شده</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">جدیدترین</SelectItem>
            <SelectItem value="rating">امتیاز</SelectItem>
            <SelectItem value="name">نام</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {bookmarks.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">
              هنوز کسب‌وکاری ذخیره نشده است
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarks.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      )}
    </div>
  )
}
