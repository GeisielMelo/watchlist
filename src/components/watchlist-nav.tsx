/* eslint-disable @next/next/no-img-element */
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import WhiteLogo from '../../public/svg/logo-white.svg'
import DarkLogo from '../../public/svg/logo-dark.svg'
import Link from 'next/link'

export const WatchlistNav: React.FC = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <div className="h-6 w-6">
          <img src={WhiteLogo.src} alt="Logo" className="h-6 w-6 hidden dark:block" />
          <img src={DarkLogo.src} alt="Logo" className="h-6 w-6 dark:hidden" />
        </div>
        <span className="hidden font-bold lg:inline-block">Watchlist</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6 text-nowrap">
        <Link href="/trending" className="text-muted-foreground hover:text-accent-foreground">
          Trending
        </Link>
        <Link href="/movie" className="text-muted-foreground hover:text-accent-foreground">
          Movie
        </Link>
        <Link href="/tv" className="text-muted-foreground hover:text-accent-foreground">
          TV Shows
        </Link>
        <Link href="/favorites" className="text-muted-foreground hover:text-accent-foreground">
          Favorites
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-muted-foreground hover:text-accent-foreground outline-none">
            More
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="/top_rated">
              <DropdownMenuItem>Top Rated</DropdownMenuItem>
            </Link>
            <Link href="/upcoming">
              <DropdownMenuItem>Upcoming</DropdownMenuItem>
            </Link>
            <Link href="/popular">
              <DropdownMenuItem>Popular</DropdownMenuItem>
            </Link>
            <Link href="/people">
              <DropdownMenuItem>People</DropdownMenuItem>
            </Link>
            <Link href="/genre">
              <DropdownMenuItem>Genre</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  )
}
