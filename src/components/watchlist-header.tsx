import { WatchlistSearch } from './watchlist-search'
import { WatchlistNav } from './watchlist-nav'
import { ModeToggle } from './ui/mode-toggle'
import { WatchlistSheet } from './watchlist-sheet'

const WatchlistHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-3 px-4">
        <WatchlistNav />
        <div className="flex w-full items-center justify-end gap-1">
          <WatchlistSearch />
          <ModeToggle />
          <WatchlistSheet />
        </div>
      </div>
    </header>
  )
}

export default WatchlistHeader
