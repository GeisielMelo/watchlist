'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export const WatchlistSearch = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState('')

  const getUpdatedSearchHref = () => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    if (query) params.set('query', query)
    params.delete('page')
    return `/search?${params.toString()}`
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query) router.push(getUpdatedSearchHref())
  }

  return (
    <div className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-2 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-56 xl:w-64 outline-none">
      <input
        type="text"
        className="outline-none w-full"
        id="query"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Search"
      />
      <Link href={getUpdatedSearchHref()}>
        <Search />
      </Link>
    </div>
  )
}
