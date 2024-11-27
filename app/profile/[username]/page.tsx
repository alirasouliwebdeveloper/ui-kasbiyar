import { UserProfile } from "@/app/components/profile/UserProfile"
import { getUserByUsername } from "@/app/utils/user"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { UserBadges } from '@/app/components/user/UserBadges'
import { UserReviews } from '@/app/components/user/UserReviews'
import { UserPhotos } from '@/app/components/user/UserPhotos'
import { UserBookmarks } from '@/app/components/user/UserBookmarks'

export default async function ProfilePage({
  params: { username }
}: {
  params: { username: string }
}) {
  const user = await getUserByUsername(username)
  
  if (!user) {
    return <div>کاربر یافت نشد</div>
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <UserProfile user={user} />
      
      <Tabs defaultValue="reviews" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reviews">نظرات ({user.reviewCount})</TabsTrigger>
          <TabsTrigger value="photos">تصاویر ({user.photoCount})</TabsTrigger>
          <TabsTrigger value="badges">نشان‌ها ({user.badges?.length || 0})</TabsTrigger>
          <TabsTrigger value="bookmarks">ذخیره‌شده‌ها</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews">
          <UserReviews id={user.id} />
        </TabsContent>

        <TabsContent value="photos">
          <UserPhotos id={user.id} />
        </TabsContent>

        <TabsContent value="badges">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">نشان‌های کسب شده</h3>
            <p className="text-muted-foreground">
              نشان‌هایی که {user.fullName} با فعالیت در کسبیار دریافت کرده است
            </p>
          </div>
          <Separator className="my-4" />
          <UserBadges id={user.id} />
        </TabsContent>

        <TabsContent value="bookmarks">
          <UserBookmarks id={user.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
