'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Bell, MessageCircle } from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockUser } from '@/app/data/mockUser'

export function DesktopHeader() {
  const [searchQuery, setSearchQuery] = useState('')
  const isLoggedIn = true // TODO: Replace with actual auth state

  return (
    <div className="container h-16 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="کسبیار"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <div className="relative flex items-center">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی کسب و کارها..."
            className="w-[400px] pl-10"
          />
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        </div>

        <Button variant="outline" className="gap-2">
          <MapPin className="h-4 w-4" />
          <span>تهران</span>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>
                      {mockUser.fullName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{mockUser.fullName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>حساب کاربری</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/user/profile">پروفایل من</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/user/reviews">نظرات من</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/user/bookmarks">نشان‌شده‌ها</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/user/settings">تنظیمات</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  خروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/auth/login">ورود</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/auth/signup">ثبت نام</Link>
            </Button>
          </>
        )}

        <Button variant="outline" asChild>
          <Link href="/biz">ثبت کسب و کار</Link>
        </Button>
      </div>
    </div>
  )
}
