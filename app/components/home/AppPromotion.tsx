'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { QRCodeSVG } from 'qrcode.react'

export function AppPromotion() {
  return (
    <section className="py-8">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src="/images/app-icon.png"
              alt="اپلیکیشن کسبیار"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">
              اپلیکیشن کسبیار را نصب کنید
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              با نصب اپلیکیشن کسبیار، سریع‌تر به کسب و کارهای اطراف خود دسترسی داشته باشید
            </p>

            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">
                    دریافت مستقیم
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>دریافت اپلیکیشن کسبیار</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center gap-4 p-4">
                    <QRCodeSVG 
                      value="https://kasbiyar.com/app" 
                      size={200}
                    />
                    <p className="text-sm text-center text-muted-foreground">
                      برای دریافت اپلیکیشن، کد QR را اسکن کنید
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="outline">
                ارسال لینک
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
