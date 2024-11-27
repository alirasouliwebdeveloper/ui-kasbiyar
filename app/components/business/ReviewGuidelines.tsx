import { Card, CardContent } from '@/components/ui/card'
import { 
  CheckCircle2,
  XCircle,
  MessageCircle,
  Camera,
  Star
} from 'lucide-react'

export function ReviewGuidelines() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-6">راهنمای نوشتن نظر</h3>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <CheckCircle2 className="h-5 w-5" />
              <h4 className="font-medium">مواردی که باید رعایت کنید:</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                تجربه شخصی خود را به صورت صادقانه بیان کنید
              </li>
              <li className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                عکس‌های باکیفیت از محیط و غذاها اضافه کنید
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                به جنبه‌های مختلف مثل کیفیت، قیمت و خدمات توجه کنید
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <XCircle className="h-5 w-5" />
              <h4 className="font-medium">مواردی که نباید انجام دهید:</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>استفاده از کلمات نامناسب یا توهین‌آمیز</li>
              <li>نوشتن اطلاعات شخصی یا تبلیغات</li>
              <li>کپی کردن نظرات دیگران</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
