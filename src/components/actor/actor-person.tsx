export const ActorPerson: React.FC<{ person: IActor }> = ({ person }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center max-w-7xl w-full pb-10">
        <div>{JSON.stringify(person)}</div>
      </div>
    </section>
  )
}
