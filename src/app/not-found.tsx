export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow w-full p-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page Not Found</p>
      <p className="mt-2 text-gray-500">Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}