import { User } from "@/types/user"
import { mockUser } from "@/app/data/mockUser"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export async function getUserByUsername(username: string): Promise<User | null> {
  // For development, return mockUser if username matches
  if (username === mockUser.username) {
    return {
      ...mockUser,
      // Fix hydration issues by ensuring dates are consistent
      joinDate: new Date(mockUser.joinDate),
      lastActive: new Date(mockUser.lastActive),
      badges: mockUser.badges?.map(badge => ({
        ...badge,
        earnedAt: new Date(badge.earnedAt)
      }))
    }
  }
  return null

  // TODO: Implement actual API call later
  // try {
  //   const response = await fetch(`${API_BASE_URL}/users/${username}`)
  //   if (!response.ok) {
  //     if (response.status === 404) return null
  //     throw new Error('Failed to fetch user')
  //   }
  //   return response.json()
  // } catch (error) {
  //   console.error('Error fetching user:', error)
  //   return null
  // }
}

export async function updateUserProfile(userId: string, data: Partial<User>) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any auth headers your API requires
        // 'Authorization': `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error('Failed to update profile')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error updating profile:', error)
    throw error
  }
}
