import { UserProfile } from '../../../components/profile/UserProfile'
import { getUserByUsername } from '@/app/utils/user'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { UserBadges } from '../UserBadges'
import { UserReviews } from '../UserReviews'
import { UserPhotos } from '../UserPhotos'
import { UserBookmarks } from '../UserBookmarks'

interface UserProfilePageProps {
  params: {
    id: string
  }
}

export default async function UserProfilePage({ params }: UserProfilePageProps) {
  const user = await getUserByUsername(params.id)
  
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
          <UserReviews id={params.id} />
        </TabsContent>

        <TabsContent value="photos">
          <UserPhotos id={params.id} />
        </TabsContent>

        <TabsContent value="badges">
          <UserBadges id={params.id} />
        </TabsContent>

        <TabsContent value="bookmarks">
          <UserBookmarks id={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
