import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ChevronRight, MenuIcon } from 'lucide-react'
import Link from 'next/link'

export const WatchlistSheet: React.FC = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="h-8 w-8">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Watchlist</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4 text-center">
            <Link href="/trending" className="border-y border-accent hover:bg-accent/90 transition-all">
              Trending
            </Link>
            <Link href="/upcoming" className="border-y border-accent hover:bg-accent/90 transition-all">
              Upcoming
            </Link>
            <Link href="/top_rated" className="border-y border-accent hover:bg-accent/90 transition-all">
              Top Rated
            </Link>
            <Link href="/popular" className="border-y border-accent hover:bg-accent/90 transition-all">
              Popular
            </Link>
            <Link href="/movie" className="border-y border-accent hover:bg-accent/90 transition-all">
              Movie
            </Link>
            <Link href="/tv" className="border-y border-accent hover:bg-accent/90 transition-all">
              TV Shows
            </Link>
            <Link href="/favorites" className="border-y border-accent hover:bg-accent/90 transition-all">
              Favorites
            </Link>
            <Link href="/people" className="border-y border-accent hover:bg-accent/90 transition-all">
              People
            </Link>
            <Link href="/genre" className="border-y border-accent hover:bg-accent/90 transition-all">
              Genre
            </Link>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <div className="flex items-center justify-center rounded-md h-8 border border-input">
                <ChevronRight />
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
