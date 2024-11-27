import { AvatarCustomizerWrapper } from "@/app/components/avatar/AvatarCustomizerWrapper"
import { getUserByUsername } from "@/app/utils/user"
import { mockAvatarOptions } from "@/app/data/mockAvatarOptions"

export default async function CustomizeAvatarPage({
  params: { username }
}: {
  params: { username: string }
}) {
  const user = await getUserByUsername(username)
  
  if (!user) {
    return <div>کاربر یافت نشد</div>
  }

  // Update mock options based on user's interaction count
  const options = mockAvatarOptions.map(opt => ({
    ...opt,
    isUnlocked: opt.unlockRequirement <= (user.totalInteractions || 0)
  }))

  return <AvatarCustomizerWrapper user={user} options={options} />
}
