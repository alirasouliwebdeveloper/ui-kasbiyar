'use client'

import { useState } from 'react'
import { Menu, Search, Mic, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SearchOverlay } from './SearchOverlay'
import { DesktopHeader } from './DesktopHeader'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="container px-4 h-14 flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <nav className="flex flex-col gap-4">
                <Link href="/auth/signup" className="text-lg">ثبت نام</Link>
                <Link href="/auth/login" className="text-lg">ورود</Link>
                <Link href="/nearby" className="text-lg">نزدیک من</Link>
                {/* ... other menu items ... */}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="کسبیار"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          <Button size="sm" className="bg-primary">
            نصب اپلیکیشن
          </Button>
        </div>

        <div className="px-4 py-2">
          <div 
            className="flex items-center gap-2 p-3 bg-muted rounded-lg"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">جستجو در کسبیار...</span>
            <div className="mr-auto flex gap-2">
              <Mic className="h-5 w-5 text-muted-foreground" />
              <Camera className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        <SearchOverlay 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
        />
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </header>
  )
}
