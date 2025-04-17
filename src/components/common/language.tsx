import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { IoLanguage } from 'react-icons/io5'
import { locales } from '@/i18n/locales'
import Link from 'next/link'

export const Language: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-md hover:bg-zinc-100 outline-none">
          <IoLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {locales.map((language, key) => (
          <Link href={`/${language.value}`} key={key}>
            <DropdownMenuItem className='text-xs cursor-pointer'>{language.label}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
