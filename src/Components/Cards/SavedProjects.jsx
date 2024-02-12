

export default function SavedProjects() {
  return (
    <div className='sm:w-full p-2 lg:w-64 h-32 border-t-4 rounded-md bg-slate-50 border-t-blue-500  shadow-md'>
          <h3 className="font-manual">
            Saved Projects
          </h3>
          <h2 className='p-2'>
              16
          </h2>

          <div className='w-full flex justify-between'>
                <button className="text-xs px-2 py-1 bg-blue-500 text-white font-bold rounded-md ">Add Projects</button>
                <button className="text-xs px-2 py-1 bg-blue-500 text-white font-bold rounded-md ">View Projects</button>
          </div>
    </div>
  )
}
