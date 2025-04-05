import Link from 'next/link'
import { ModeToggle } from '../ui/mode-toggle'

const Navigation: React.FC = () => {
  // <span className="font-bold">WatchList</span>

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between w-full max-w-[1536px] mx-auto py-2 px-6">
        <div></div>

        <div className="flex w-full items-center justify-end gap-1">
          <div className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-2 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-56 xl:w-64 outline-none">
            <input type="text" className="outline-none w-full" />
            <button>asd</button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navigation
