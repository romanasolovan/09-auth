import React from 'react'
import css from './ProfilePage.module.css'
import Link from 'next/link'
import { getMe } from '@/lib/api/serverApi'
import Image from 'next/image'

export default async function profilePage() {
  const user = await getMe()

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href={'/profile/edit'} className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={'https://ac.goit.global/fullstack/react/default-avatar.jpg'}
            alt={'User Avatar'}
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  )
}
