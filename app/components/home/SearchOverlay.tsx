'use client'

import { useState } from 'react'
import { Search, X, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در کسبیار..."
            className="flex-1"
            autoFocus
          />
        </div>

        <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-4">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">تهران، تهران</span>
          <Button variant="link" className="mr-auto">
            تغییر
          </Button>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <section>
            <h3 className="font-semibold mb-2">پیشنهادات</h3>
            {/* ... Business suggestions ... */}
          </section>

          <section>
            <h3 className="font-semibold mb-2">دسته‌بندی‌ها</h3>
            {/* ... Category suggestions ... */}
          </section>
        </div>
      </div>
    </div>
  )
}
