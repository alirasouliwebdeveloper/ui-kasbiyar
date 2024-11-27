"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AvatarOption, AvatarCategory, UserAvatar } from "@/types/avatar"
import { User } from "@/types/user"

interface AvatarCustomizerProps {
  user: User;
  options: AvatarOption[];
  onSave: (avatar: UserAvatar) => Promise<void>;
}

export function AvatarCustomizer({ user, options, onSave }: AvatarCustomizerProps) {
  const [selectedOptions, setSelectedOptions] = useState(
    user.customAvatar?.selectedOptions || {}
  );

  const categories: AvatarCategory[] = [
    'HAIR', 'EYES', 'MOUTH', 'ACCESSORIES', 'CLOTHING', 'BACKGROUND'
  ];

  const handleOptionSelect = (option: AvatarOption) => {
    if (!option.isUnlocked) {
      alert(`برای باز کردن این گزینه به ${option.unlockRequirement} تعامل نیاز دارید`);
      return;
    }

    setSelectedOptions({
      ...selectedOptions,
      [option.category]: option.id
    });
  };

  const handleSave = async () => {
    try {
      await onSave({
        selectedOptions,
        unlockedOptions: options
          .filter(opt => opt.isUnlocked)
          .map(opt => opt.id)
      });
    } catch (error) {
      console.error('Error saving avatar:', error);
      alert('خطا در ذخیره آواتار');
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Avatar Preview */}
          <div className="w-48 h-48 bg-secondary rounded-lg">
            {/* Add avatar preview here */}
          </div>

          {/* Customization Options */}
          <div className="flex-1">
            <Tabs defaultValue="HAIR">
              <TabsList className="grid grid-cols-6 w-full">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>
                    {getCategoryName(category)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map(category => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-4 gap-4">
                    {options
                      .filter(opt => opt.category === category)
                      .map(option => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option)}
                          className={`relative p-2 border rounded-lg ${
                            selectedOptions[category] === option.id
                              ? 'border-primary'
                              : 'border-border'
                          } ${
                            !option.isUnlocked ? 'opacity-50' : ''
                          }`}
                        >
                          <img
                            src={option.imageUrl}
                            alt={option.name}
                            className="w-full h-auto"
                          />
                          {!option.isUnlocked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
                              <span className="text-sm">
                                نیاز به {option.unlockRequirement} تعامل
                              </span>
                            </div>
                          )}
                        </button>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSave}>
            ذخیره آواتار
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function getCategoryName(category: AvatarCategory): string {
  const names: Record<AvatarCategory, string> = {
    HAIR: 'مو',
    EYES: 'چشم',
    MOUTH: 'دهان',
    ACCESSORIES: 'اکسسوری',
    CLOTHING: 'لباس',
    BACKGROUND: 'پس‌زمینه'
  };
  return names[category];
}
