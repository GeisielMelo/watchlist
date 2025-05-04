'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { IoLanguage } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import { locales } from '@/i18n/locales'
import Cookies from 'js-cookie'

export const Language: React.FC = () => {
  const router = useRouter()

  const handleLocaleChange = (locale: string) => {
    Cookies.set('locale', locale)
    router.push(`/${locale}`)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-md hover:bg-zinc-100 outline-none">
          <IoLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {locales.map((language, key) => (
          <DropdownMenuItem key={key} className="text-xs cursor-pointer" onClick={() => handleLocaleChange(language.value)}>
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
