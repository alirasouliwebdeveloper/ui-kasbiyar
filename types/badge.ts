export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: BadgeCategory;
  requirement: number;
  level: BadgeLevel;
}

export type BadgeCategory = 
  | 'REVIEWS' 
  | 'PHOTOS' 
  | 'RECOMMENDATIONS' 
  | 'VISITS' 
  | 'ENGAGEMENT';

export type BadgeLevel = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';

export interface UserBadge extends Badge {
  earnedAt: Date;
  progress: number;
}
