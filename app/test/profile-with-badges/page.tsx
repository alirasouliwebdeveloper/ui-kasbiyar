import { UserProfile } from "../../components/profile/UserProfile"
import { BadgeGrid } from "../../components/badges/BadgeGrid"
import { mockUser } from "@/app/data/mockUser"
import { mockBadges } from "@/app/data/mockBadges"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

const mockUserBadges = mockBadges.map(badge => ({
  ...badge,
  earnedAt: new Date(),
  progress: Math.floor(Math.random() * 100)
}))

export default function TestProfilePage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Profile Section */}
      <UserProfile user={mockUser} />
      
      {/* Tabs Section */}
      <Tabs defaultValue="badges" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reviews">نظرات ({mockUser.reviewCount})</TabsTrigger>
          <TabsTrigger value="photos">تصاویر ({mockUser.photoCount})</TabsTrigger>
          <TabsTrigger value="badges">نشان‌ها ({mockUserBadges.length})</TabsTrigger>
          <TabsTrigger value="collections">مجموعه‌ها</TabsTrigger>
        </TabsList>

        <TabsContent value="badges" className="mt-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">نشان‌های کسب شده</h3>
            <p className="text-muted-foreground">
              نشان‌هایی که {mockUser.fullName} با فعالیت در کسبیار دریافت کرده است
            </p>
          </div>
          <Separator className="my-4" />
          <BadgeGrid badges={mockUserBadges} />
        </TabsContent>

        <TabsContent value="reviews">
          <div className="text-center py-8 text-muted-foreground">
            بخش نظرات در حال توسعه است
          </div>
        </TabsContent>

        <TabsContent value="photos">
          <div className="text-center py-8 text-muted-foreground">
            بخش تصاویر در حال توسعه است
          </div>
        </TabsContent>

        <TabsContent value="collections">
          <div className="text-center py-8 text-muted-foreground">
            بخش مجموعه‌ها در حال توسعه است
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
