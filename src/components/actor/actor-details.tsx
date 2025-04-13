import { format } from 'date-fns'

export const ActorDetails: React.FC<{ person: IActor }> = ({ person }) => {
  const formatDate = (date: string) => {
    try {
      return format(new Date(date), 'MMMM dd, yyyy')
    } catch {
      return date
    }
  }

  return (
    <div className="flex flex-wrap gap-8">
      {person.known_for_department && (
        <div>
          <span className="font-bold">Known For</span>
          <p>{person.known_for_department}</p>
        </div>
      )}
      {person.popularity && (
        <div>
          <span className="font-bold">Popularity</span>
          <p>{person.popularity.toFixed(1)}</p>
        </div>
      )}
      {person.gender && (
        <div>
          <span className="font-bold">Gender</span>
          <p>{person.gender === 1 ? 'Female' : 'Male'}</p>
        </div>
      )}
      {person.place_of_birth && (
        <div>
          <span className="font-bold">Place of Birth</span>
          <p>{person.place_of_birth}</p>
        </div>
      )}
      {person.birthday && (
        <div>
          <span className="font-bold">Birthday</span>
          <p>{formatDate(person.birthday)}</p>
        </div>
      )}
      {person.deathday && (
        <div>
          <span className="font-bold">Deathday</span>
          <p>{formatDate(person.deathday)}</p>
        </div>
      )}
    </div>
  )
}
