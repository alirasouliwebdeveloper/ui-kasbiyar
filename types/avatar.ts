export interface AvatarOption {
  id: string;
  category: AvatarCategory;
  name: string;
  imageUrl: string;
  unlockRequirement: number; // number of reviews/interactions needed
  isUnlocked: boolean;
}

export type AvatarCategory = 
  | 'HAIR'
  | 'EYES'
  | 'MOUTH'
  | 'ACCESSORIES'
  | 'CLOTHING'
  | 'BACKGROUND';

export interface UserAvatar {
  selectedOptions: {
    [key in AvatarCategory]?: string; // option id
  };
  unlockedOptions: string[]; // array of option ids
}
