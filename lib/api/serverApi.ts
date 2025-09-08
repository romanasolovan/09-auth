import { cookies } from 'next/headers'
import { nextServer } from './api'
import { User } from '@/types/user'

export const checkServerSession = async () => {
  const cookieStore = await cookies()
  const responce = await nextServer.get('/auth/session', {
    headers: { Cookie: cookieStore.toString() },
  })
  return responce
}

export const getMe = async (): Promise<User> => {
  const cookieStore = await cookies()
  const { data } = await nextServer.get<User>('/users/me', {
    headers: { Cookie: cookieStore.toString() },
  })
  return data
}
