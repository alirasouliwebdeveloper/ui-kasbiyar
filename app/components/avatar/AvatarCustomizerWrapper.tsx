"use client"

import { AvatarCustomizer } from "./AvatarCustomizer"
import { User } from "@/types/user"
import { AvatarOption, UserAvatar } from "@/types/avatar"
import { updateUserAvatar } from "@/app/utils/avatar"

interface AvatarCustomizerWrapperProps {
  user: User
  options: AvatarOption[]
}

export function AvatarCustomizerWrapper({ user, options }: AvatarCustomizerWrapperProps) {
  const handleSave = async (avatar: UserAvatar) => {
    try {
      await updateUserAvatar(user.id, avatar)
      // You could add a success toast here
    } catch (error) {
      console.error('Error saving avatar:', error)
      // You could add an error toast here
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">شخصی‌سازی آواتار</h1>
      <AvatarCustomizer
        user={user}
        options={options}
        onSave={handleSave}
      />
    </div>
  )
}
