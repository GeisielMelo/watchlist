import Actor from '@/components/actor'
import { getSelectedPerson, getSelectedPersonCasting } from '@/services/api'

export default async function SelectedPerson({ params }: IPage) {
  const { id, locale } = await params
  const [person, casting] = await Promise.all([
    getSelectedPerson(id, { language: locale, append_to_response: 'images' }).catch(() => null),
    getSelectedPersonCasting(id, { language: locale }).catch(() => null),
  ])

  return <Actor person={person} casting={casting} />
}
