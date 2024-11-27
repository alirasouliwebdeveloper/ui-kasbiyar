import { Badge } from "@/types/badge"

export const mockBadges: Badge[] = [
  {
    id: "1",
    name: "منتقد نوظهور",
    description: "۱۰ نظر برای کسب و کارها ثبت کنید",
    icon: "/images/badges/reviewer-bronze.svg",
    category: "REVIEWS",
    requirement: 10,
    level: "BRONZE"
  },
  {
    id: "2",
    name: "عکاس حرفه‌ای",
    description: "۵۰ عکس از کسب و کارها آپلود کنید",
    icon: "/images/badges/photographer-silver.svg",
    category: "PHOTOS",
    requirement: 50,
    level: "SILVER"
  },
  // ... add more badges
]
