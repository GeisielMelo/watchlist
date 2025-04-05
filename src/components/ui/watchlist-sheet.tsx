import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ChevronRight, MenuIcon } from 'lucide-react'

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
          <div className="grid gap-4 py-4">asd</div>
          <SheetFooter>
            <SheetClose asChild>
              <div className='flex items-center justify-center rounded-md h-8 border border-input'><ChevronRight/></div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
