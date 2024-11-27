import { UserAvatar } from "@/types/avatar"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export async function updateUserAvatar(
  userId: string,
  avatar: UserAvatar
): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/avatar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(avatar)
    });

    if (!response.ok) {
      throw new Error('Failed to update avatar');
    }
  } catch (error) {
    console.error('Error updating avatar:', error);
    throw error;
  }
}

export async function checkUnlockProgress(userId: string): Promise<number> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/${userId}/avatar/progress`
    );
    if (!response.ok) throw new Error('Failed to fetch unlock progress');
    return await response.json();
  } catch (error) {
    console.error('Error checking unlock progress:', error);
    return 0;
  }
}
