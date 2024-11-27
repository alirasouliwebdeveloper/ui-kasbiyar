"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "@/types/user"
import Link from "next/link"
import { Pencil1Icon } from "@radix-ui/react-icons"

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative">
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.avatar} alt={user.fullName} />
            <AvatarFallback>{user.fullName[0]}</AvatarFallback>
          </Avatar>
          <Link 
            href={`/profile/${user.username}/customize-avatar`}
            className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1"
          >
            <Pencil1Icon className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{user.fullName}</h2>
          <p className="text-muted-foreground">@{user.username}</p>
          {user.isVerified && (
            <span className="text-blue-500">✓ تأیید شده</span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div>
            <div className="font-bold">{user.reviewCount}</div>
            <div className="text-sm text-muted-foreground">نظرات</div>
          </div>
          <div>
            <div className="font-bold">{user.photoCount}</div>
            <div className="text-sm text-muted-foreground">تصاویر</div>
          </div>
          <div>
            <div className="font-bold">{user.followers}</div>
            <div className="text-sm text-muted-foreground">دنبال‌کنندگان</div>
          </div>
          <div>
            <div className="font-bold">{user.following}</div>
            <div className="text-sm text-muted-foreground">دنبال‌شده</div>
          </div>
        </div>
        
        {user.bio && (
          <p className="mb-4">{user.bio}</p>
        )}
        
        <div className="flex gap-2">
          <Button variant="outline">ویرایش پروفایل</Button>
          <Button>دنبال کردن</Button>
        </div>
      </CardContent>
    </Card>
  )
}
