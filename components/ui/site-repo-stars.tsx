'use client'

import { clsx } from 'clsx'
import { Star } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

export function SiteRepoStars() {
  return (
    <Link
      href={SITE_METADATA.siteRepo}
      className={clsx([
        'group flex items-center justify-center',
        'overflow-hidden rounded-md',
        'border',
        'border-gray-200 hover:border-gray-300',
        'dark:border-gray-700 dark:hover:border-gray-600',
      ])}
    >
      <div
        className={clsx([
          'flex h-7 items-center gap-2 px-2 text-sm',
          'bg-neutral-100 dark:bg-neutral-800',
        ])}
      >
        <Star className="h-4 w-4" />
      </div>
    </Link>
  )
}
